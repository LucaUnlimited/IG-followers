//Ejecutar en la consola de la pestaña de SEGUIDOS

function scrollPageAndSaveData2() {
  var datosSeguidos = []; // Arreglo para almacenar los datos guardados
  var datosSeguidores = localStorage.getItem("datosSeguidores");
  var datosSeguidoresArray = JSON.parse(datosSeguidores);
  var lastHeight = 0;

  function guardarDatos() {
    var nombresUsuarios = [];
    var enlacesUsuarios = document.querySelectorAll("div._aano a");

    enlacesUsuarios.forEach(function (enlace) {
      var href = enlace.getAttribute("href");
      var nombreUsuario = href.replace(/\//g, "");
      nombresUsuarios.push(nombreUsuario);
    });

    datosSeguidos.push(nombresUsuarios);
  }

  guardarDatos();
  compararDatos();

  var urlActual = window.location.href;
  var nuevaURL = urlActual.replace("/followers/", "/following/");
  window.location.href = nuevaURL;

  function compararDatos() {
    const arraySeguidos = datosSeguidos[0];
    const arraySeguidores = datosSeguidoresArray[0];

    const faltantesEnArr2 = arraySeguidos.filter(
      (item) => !arraySeguidores.includes(item)
    );

    var conjuntoUnico = new Set(faltantesEnArr2);
    var arregloUnico = Array.from(conjuntoUnico);
    var contenido = arregloUnico.join("\n");

    var blob = new Blob([contenido], {
      type: "text/plain;charset=utf-8",
    });

    var url = window.URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = "no_te_siguen.txt"; // Nombre del archivo
    document.body.appendChild(a);

    a.click();

    window.URL.revokeObjectURL(url);
  }
}

scrollPageAndSaveData2();
