/* juego.js — motor: portal de juegos, retos, puntuación y pistas.
   Depende de datos.js (window.__JUEGOS__). */
(function () {
  "use strict";

  var DATOS = window.__JUEGOS__;
  var JUEGOS = DATOS.juegos || [];
  var CONFIG = null;
  var retos = [];
  var estado = { i: 0, puntos: 0, intentos: 0, pistasUsadas: 0, completados: 0, activo: null };

  function $(id) { return document.getElementById(id); }
  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto !== undefined && texto !== null) el.textContent = texto;
    return el;
  }
  function barajar(lista) {
    var copia = lista.slice();
    for (var k = copia.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1));
      var tmp = copia[k]; copia[k] = copia[j]; copia[j] = tmp;
    }
    return copia;
  }
  function normalizar(txt) {
    return String(txt)
      .toLowerCase()
      .replace(/[\u2018\u2019\u201c\u201d]/g, "'")
      .replace(/\s+/g, " ")
      .replace(/;+$/, "")
      .trim();
  }

  /* ==CORE-START== */
  var CORE = {
    normalizar: normalizar,
    barajar: barajar,
    // Devuelve el estado inicial de la interfaz de un reto.
    iniciarReto: function (reto) {
      if (reto.tipo === "orden") {
        var correcto = reto.bloques.slice();
        var mezcla = barajar(correcto);
        if (mezcla.join("|") === correcto.join("|") && correcto.length > 1) mezcla.reverse();
        return { pool: mezcla, respuesta: [] };
      }
      if (reto.tipo === "completar") {
        var huecos = String(reto.plantilla).split("___").length - 1;
        var valores = [];
        for (var h = 0; h < huecos; h++) valores.push(null);
        return { valores: valores, activo: 0 };
      }
      return {};
    },
    // Comprueba si la solución propuesta es correcta.
    comprobar: function (reto, vista) {
      if (reto.tipo === "orden") {
        if (vista.respuesta.length !== reto.bloques.length) return false;
        for (var a = 0; a < reto.bloques.length; a++) {
          if (vista.respuesta[a] !== reto.bloques[a]) return false;
        }
        return true;
      }
      if (reto.tipo === "completar") {
        for (var b = 0; b < reto.respuesta.length; b++) {
          if (normalizar(vista.valores[b] || "") !== normalizar(reto.respuesta[b])) return false;
        }
        return true;
      }
      if (reto.tipo === "predecir") {
        var dado = normalizar(vista.texto || "");
        if (!dado) return false;
        for (var c = 0; c < reto.aceptadas.length; c++) {
          if (normalizar(reto.aceptadas[c]) === dado) return true;
        }
        return false;
      }
      return false;
    },
    calcularPuntos: function (intentos, pistas) {
      var p = 100 - intentos * 20 - pistas * 10;
      return Math.max(20, p);
    }
  };
  /* ==CORE-END== */

  function pintarCabecera() {
    $("titulo").textContent = CONFIG.titulo;
    $("texto-explicacion").textContent = CONFIG.explicacion;
    $("total-retos").textContent = retos.length;
    var marca = CONFIG.tipo === "especial" ? (retos.length + " niveles") : ("Semana " + CONFIG.semana);
    $("pie-semana").textContent = marca;
    var et = $("etiqueta");
    et.textContent = marca + " · ";
    var sp = crear("span", null, CONFIG.concepto);
    sp.id = "concepto";
    et.appendChild(sp);
    $("subtitulo").textContent = CONFIG.tipo === "especial"
      ? "Veinte niveles progresivos, de la primera variable a la recursión doble."
      : "Practica lógica de programación desde cero. Sin instalar nada.";
    document.title = CONFIG.titulo + " — minijuegos de lógica";
  }

  function pintarBarra() {
    $("num-reto").textContent = Math.min(estado.i + 1, retos.length);
    $("total-retos").textContent = retos.length;
    $("puntos").textContent = estado.puntos;
    var pct = retos.length ? Math.round((estado.completados / retos.length) * 100) : 0;
    $("barra-progreso").style.width = pct + "%";
  }

  function feedback(tipo, titulo, texto) {
    var caja = $("feedback");
    caja.className = "feedback visible " + tipo;
    caja.innerHTML = "";
    caja.appendChild(crear("span", "titulo", titulo));
    caja.appendChild(document.createTextNode(texto));
  }
  function limpiarFeedback() {
    var caja = $("feedback");
    caja.className = "feedback";
    caja.innerHTML = "";
  }

  function mostrarFinal() {
    limpiarFeedback();
    var zona = $("reto");
    zona.innerHTML = "";
    var caja = crear("div", "final");
    caja.appendChild(crear("p", null, "Has terminado los " + retos.length + " niveles de «" + CONFIG.titulo + "»."));
    caja.appendChild(crear("div", "marcador", estado.puntos + " pts"));
    var maximo = retos.length * 100;
    caja.appendChild(crear("p", null, "Puntuación máxima posible: " + maximo + ". Cada fallo o pista resta puntos."));
    var acciones = crear("div", "acciones");
    acciones.style.justifyContent = "center";
    var repetir = crear("button", "principal", "Jugar otra vez");
    repetir.type = "button";
    repetir.addEventListener("click", function () { abrirJuego(CONFIG.id); });
    var volver = crear("button", "secundario", "Ver todos los juegos");
    volver.type = "button";
    volver.addEventListener("click", function () { mostrarPortal(); });
    acciones.appendChild(repetir);
    acciones.appendChild(volver);
    caja.appendChild(acciones);
    zona.appendChild(caja);
    pintarBarra();
  }

  function pintarReto() {
    limpiarFeedback();
    if (estado.i >= retos.length) { mostrarFinal(); return; }
    var reto = retos[estado.i];
    estado.intentos = 0;
    estado.pistasUsadas = 0;
    estado.activo = CORE.iniciarReto(reto);

    var zona = $("reto");
    zona.innerHTML = "";
    zona.appendChild(crear("p", "enunciado", reto.enunciado));

    if (reto.tipo === "orden") pintarOrden(zona, reto);
    else if (reto.tipo === "completar") pintarCompletar(zona, reto);
    else pintarPredecir(zona, reto);

    var acciones = crear("div", "acciones");
    var botonPista = crear("button", "secundario", "Dame una pista");
    botonPista.type = "button";
    botonPista.setAttribute("data-testid", "pista");
    botonPista.addEventListener("click", function () { pedirPista(reto); });
    var boton = crear("button", "principal", "Comprobar");
    boton.type = "button";
    boton.id = "comprobar";
    boton.setAttribute("data-testid", "comprobar");
    boton.addEventListener("click", function () { comprobar(reto); });
    acciones.appendChild(boton);
    acciones.appendChild(botonPista);
    zona.appendChild(acciones);

    pintarBarra();
  }

  function pintarOrden(zona, reto) {
    var pool = crear("div", "pool");
    pool.id = "pool";
    var respuesta = crear("div", "respuesta");
    respuesta.id = "respuesta";

    function repintar() {
      pool.innerHTML = "";
      estado.activo.pool.forEach(function (texto) {
        var b = crear("button", "bloque", texto);
        b.type = "button";
        b.setAttribute("data-testid", "bloque-disponible");
        b.addEventListener("click", function () {
          estado.activo.respuesta.push(texto);
          estado.activo.pool.splice(estado.activo.pool.indexOf(texto), 1);
          repintar();
        });
        pool.appendChild(b);
      });
      respuesta.innerHTML = "";
      estado.activo.respuesta.forEach(function (texto, idx) {
        var b = crear("button", "bloque");
        b.type = "button";
        b.setAttribute("data-testid", "bloque-colocado");
        b.appendChild(crear("span", "num", String(idx + 1) + "."));
        b.appendChild(document.createTextNode(texto));
        b.addEventListener("click", function () {
          estado.activo.respuesta.splice(idx, 1);
          estado.activo.pool.push(texto);
          repintar();
        });
        respuesta.appendChild(b);
      });
    }
    repintar();
    zona.appendChild(pool);
    zona.appendChild(respuesta);
  }

  function pintarCompletar(zona, reto) {
    var cont = crear("div", "zona-completar");
    zona.appendChild(cont);
    repintarCompletar(cont, reto);
  }

  function repintarCompletar(cont, reto) {
    cont.innerHTML = "";
    var partes = String(reto.plantilla).split("___");
    var pre = crear("pre");
    var codigo = crear("code");
    for (var p = 0; p < partes.length; p++) {
      codigo.appendChild(document.createTextNode(partes[p]));
      if (p < partes.length - 1) {
        (function (indice) {
          var valor = estado.activo.valores[indice];
          var hueco = crear("button", "hueco", valor || "___");
          hueco.type = "button";
          hueco.setAttribute("data-testid", "hueco");
          hueco.setAttribute("data-indice", String(indice));
          if (valor) hueco.className = "hueco lleno";
          if (estado.activo.activo === indice) hueco.className += " activo";
          hueco.addEventListener("click", function () {
            if (estado.activo.valores[indice]) {
              estado.activo.valores[indice] = null;
            }
            estado.activo.activo = indice;
            repintarCompletar(cont, reto);
          });
          codigo.appendChild(hueco);
        })(p);
      }
    }
    pre.appendChild(codigo);
    cont.appendChild(pre);

    var paleta = crear("div", "pool paleta");
    var opciones = [];
    (reto.opciones || []).forEach(function (grupo) {
      grupo.forEach(function (op) { if (opciones.indexOf(op) === -1) opciones.push(op); });
    });
    opciones.forEach(function (op) {
      var f = crear("button", "ficha", op);
      f.type = "button";
      f.setAttribute("data-testid", "ficha");
      f.setAttribute("data-valor", op);
      f.addEventListener("click", function () {
        var destino = estado.activo.activo;
        if (destino === null || destino === undefined) {
          for (var v = 0; v < estado.activo.valores.length; v++) {
            if (!estado.activo.valores[v]) { destino = v; break; }
          }
        }
        if (destino === null || destino === undefined) destino = 0;
        estado.activo.valores[destino] = op;
        var siguiente = null;
        for (var w = destino + 1; w < estado.activo.valores.length; w++) {
          if (!estado.activo.valores[w]) { siguiente = w; break; }
        }
        estado.activo.activo = siguiente === null ? destino : siguiente;
        repintarCompletar(cont, reto);
      });
      paleta.appendChild(f);
    });
    cont.appendChild(paleta);
  }

  function pintarPredecir(zona, reto) {
    var pre = crear("pre");
    var code = crear("code", null, reto.codigo);
    pre.appendChild(code);
    zona.appendChild(pre);
    var entrada = document.createElement("input");
    entrada.type = "text";
    entrada.id = "entrada";
    entrada.setAttribute("data-testid", "entrada");
    entrada.setAttribute("placeholder", "Escribe exactamente lo que imprime");
    entrada.setAttribute("autocomplete", "off");
    entrada.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); comprobar(reto); }
    });
    zona.appendChild(entrada);
  }

  function pedirPista(reto) {
    estado.pistasUsadas = Math.min(estado.pistasUsadas + 1, reto.pistas.length);
    var indice = Math.min(estado.pistasUsadas - 1, reto.pistas.length - 1);
    feedback("error", "Pista " + (indice + 1) + " de " + reto.pistas.length + ": ", reto.pistas[indice]);
  }

  function valorActual(reto) {
    if (reto.tipo === "orden") return { respuesta: estado.activo.respuesta };
    if (reto.tipo === "completar") return { valores: estado.activo.valores };
    var entrada = document.getElementById("entrada");
    return { texto: entrada ? entrada.value : "" };
  }

  function comprobar(reto) {
    var vista = valorActual(reto);
    if (reto.tipo === "completar") {
      for (var h = 0; h < estado.activo.valores.length; h++) {
        if (!estado.activo.valores[h]) {
          feedback("error", "Falta un hueco. ", "Toca un hueco y luego una ficha para rellenarlo.");
          return;
        }
      }
    }
    if (reto.tipo === "orden" && estado.activo.respuesta.length === 0) {
      feedback("error", "Aún no has colocado nada. ", "Toca los bloques de arriba para ponerlos en orden.");
      return;
    }
    if (reto.tipo === "predecir" && !String(vista.texto).trim()) {
      feedback("error", "Escribe tu respuesta. ", "Puedes probar con un número o con una palabra.");
      return;
    }

    if (CORE.comprobar(reto, vista)) {
      var ganados = CORE.calcularPuntos(estado.intentos, estado.pistasUsadas);
      estado.puntos += ganados;
      estado.completados += 1;
      pintarBarra();
      feedback("exito", "¡Correcto! +" + ganados + " puntos. ", reto.exito || "Esa es la lógica. Ya puedes pasar al siguiente reto.");
      var acciones = document.querySelector("#reto .acciones");
      if (acciones) {
        acciones.innerHTML = "";
        var siguiente = crear("button", "principal", estado.i + 1 >= retos.length ? "Ver mi resultado" : "Siguiente reto");
        siguiente.type = "button";
        siguiente.setAttribute("data-testid", "siguiente");
        siguiente.addEventListener("click", function () {
          estado.i += 1;
          pintarReto();
        });
        acciones.appendChild(siguiente);
      }
      return;
    }

    estado.intentos += 1;
    var indice = Math.min(estado.intentos - 1, reto.pistas.length - 1);
    var esUltima = estado.intentos >= reto.pistas.length;
    feedback(
      "error",
      "Todavía no. ",
      (esUltima ? "Repasa esta idea: " : "Pista " + (indice + 1) + ": ") + reto.pistas[indice]
    );
  }

  function pintarPortal() {
    var lista = $("lista-juegos");
    lista.textContent = "";
    JUEGOS.forEach(function (juego) {
      var boton = crear("button", "tarjeta-juego");
      boton.type = "button";
      boton.setAttribute("data-testid", "juego-" + juego.id);
      var marca = juego.tipo === "especial" ? (juego.retos.length + " niveles") : ("Semana " + juego.semana);
      boton.appendChild(crear("span", "semana", marca + (juego.tipo === "especial" ? " · especial" : "")));
      boton.appendChild(crear("span", "nombre", juego.titulo));
      boton.appendChild(crear("span", "concepto-mini", juego.concepto));
      boton.appendChild(crear("span", "jugar", "Jugar " + juego.retos.length + " retos →"));
      boton.addEventListener("click", function () { abrirJuego(juego.id); });
      lista.appendChild(boton);
    });
    $("total-juegos").textContent = JUEGOS.length;
    var totalRetos = 0;
    JUEGOS.forEach(function (j) { totalRetos += j.retos.length; });
    $("total-retos-todos").textContent = totalRetos;
  }

  function mostrarPortal() {
    $("vista-juego").hidden = true;
    $("portal").hidden = false;
    CONFIG = null;
    retos = [];
    document.title = "Minijuegos de lógica — todos en un solo archivo";
    window.__vista = "portal";
  }

  function abrirJuego(id) {
    var juego = null;
    for (var k = 0; k < JUEGOS.length; k++) {
      if (JUEGOS[k].id === id) { juego = JUEGOS[k]; break; }
    }
    if (!juego) return;
    CONFIG = juego;
    retos = juego.retos || [];
    if (!retos.length) return;
    estado.i = 0;
    estado.puntos = 0;
    estado.intentos = 0;
    estado.pistasUsadas = 0;
    estado.completados = 0;
    estado.activo = null;
    $("portal").hidden = true;
    $("vista-juego").hidden = false;
    pintarCabecera();
    pintarReto();
    window.__vista = "juego";
    document.documentElement.scrollTop = 0;
  }

  function init() {
    pintarPortal();
    $("volver-portal").addEventListener("click", function () { mostrarPortal(); });
    window.__juego = {
      portal: pintarPortal,
      abrir: abrirJuego,
      volver: mostrarPortal,
      estado: estado,
      core: CORE,
      comprobar: function (reto) { return comprobar(reto); },
      datos: JUEGOS
    };
    window.__listo = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
