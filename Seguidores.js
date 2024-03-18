//Ejecutar en la consola de la pestaña de SEGUIDORES

function scrollPageAndSaveData() {
  var datosGuardados = [];

  function guardarDatosEnLocalStorage() {
    var datosJSON = JSON.stringify(datosGuardados);
    // Guardar los datos en el localStorage
    localStorage.setItem("datosSeguidores", datosJSON);
  }

  // Función para guardar los datos en el arreglo
  function guardarDatos() {
    var nombresUsuarios = []; // Arreglo para almacenar los nombres de usuario

    var enlacesUsuarios = document.querySelectorAll("div._aano a");

    enlacesUsuarios.forEach(function (enlace) {
      var href = enlace.getAttribute("href");
      // Extraer el nombre de usuario del href
      var nombreUsuario = href.replace(/\//g, "");
      nombresUsuarios.push(nombreUsuario);
    });

    // Agregar los nombres de usuario al arreglo de datos guardados
    datosGuardados.push(nombresUsuarios);
  }

  guardarDatos();
  guardarDatosEnLocalStorage();

  var urlActual = window.location.href;
  var nuevaURL = urlActual.replace("/followers/", "/following/");
  window.location.href = nuevaURL;
}

scrollPageAndSaveData();
