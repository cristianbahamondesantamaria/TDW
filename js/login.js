class Persona {
  constructor(nombre, fechaNacimiento, fechaDefuncion, imagen, wikipedia) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
  }
}

class Entidad {
  constructor(nombre, fechaCreacion, fechaDefuncion, imagen, wikipedia, personas) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
    this.personas = [];
    for (var i = 0; i < personas.length; i++) {
      this.personas.push(personas[i]);
    }
  }
}

class Producto {
  constructor(nombre, fechaCreacion, fechaDefuncion, imagen, wikipedia, personas, entidades) {
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaDefuncion = fechaDefuncion;
    this.imagen = imagen;
    this.wikipedia = wikipedia;
    this.personas = [];
    this.entidades = [];
    for (var i = 0; i < personas.length; i++) {
      this.personas.push(personas[i]);
    }
    for (var i = 0; i < entidades.length; i++) {
      this.entidades.push(entidades[i]);
    }
  }
}

function mostrarPersonas() {
  var personas = JSON.parse(localStorage.getItem("personas"));
  const divPrincipal = $('#Personas');
  for (var i = 0; i < personas.length; i++) {
    let cartaDiv = $('<div class="card my-3" style="width: 18rem;"></div>');
    var imagen = new Image();
    imagen.src = personas[i].imagen;
    imagen.className = "card-img-top";
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + personas[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary" value= ' + i + '>Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" value= ' + i + '>Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" value= ' + i + '>Borrar</button>');

    detalles.click(function () {
      var personas = JSON.parse(localStorage.getItem("personas"));
      var persona = personas[$(this).val()];
      localStorage.setItem("personaDetalles", JSON.stringify(persona));
      window.location.href = 'detallesPersona.html';
    });
    editar.click(function () {
      var personas = JSON.parse(localStorage.getItem("personas"));
      var persona = personas[$(this).val()];
      $('#fieldEditarNombrePersona').val(persona.nombre);
      $('#fieldEditarFechaNacimientoPersona').val(persona.fechaNacimiento);
      $('#fieldEditarFechaDefuncionPersona').val(persona.fechaDefuncion);
      $('#fieldEditarWikiPersona').val(persona.wikipedia);
      $('#saveEditarPersona').val($(this).val());
      $('#modalEditarPersona').modal('show');
    });
    borrar.click(function () {
      var personas = JSON.parse(localStorage.getItem("personas"));
      personas.splice($(this).val(), 1);
      localStorage.setItem("personas", JSON.stringify(personas));
      window.location.href = 'index.html';
    });

    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3" style="display:none;">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarPersona').modal('show');
  });
}

function mostrarEntidades() {
  var entidades = JSON.parse(localStorage.getItem("entidades"));
  const divPrincipal = $('#Entidades');
  for (var i = 0; i < entidades.length; i++) {
    let cartaDiv = $('<div class="card my-3" style="width: 18rem;"></div>');
    var imagen = new Image();
    imagen.src = entidades[i].imagen;
    imagen.className = "card-img-top";
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + entidades[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary" value= ' + i + '>Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" value= ' + i + '>Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" value= ' + i + '>Borrar</button>');
    detalles.click(function () {
      var entidades = JSON.parse(localStorage.getItem("entidades"));
      var entidad = entidades[$(this).val()];
      localStorage.setItem("entidadDetalles", JSON.stringify(entidad));
      window.location.href = 'detallesEntidad.html';
    });
    editar.click(function () {
      var entidades = JSON.parse(localStorage.getItem("entidades"));
      var entidad = entidades[$(this).val()];
      $('#fieldEditarNombreEntidad').val(entidad.nombre);
      $('#fieldEditarFechaCreacionEntidad').val(entidad.fechaCreacion);
      $('#fieldEditarFechaDefuncionEntidad').val(entidad.fechaDefuncion);
      $('#fieldEditarWikiEntidad').val(entidad.wikipedia);
      var personas = entidad.personas.join(",");
      $('#fieldEditarPersonasEntidad').val(personas);
      $('#saveEditarEntidad').val($(this).val());
      $('#modalEditarEntidad').modal('show');
    });
    borrar.click(function () {
      var entidades = JSON.parse(localStorage.getItem("entidades"));
      entidades.splice($(this).val(), 1);
      localStorage.setItem("entidades", JSON.stringify(entidades));
      window.location.href = 'index.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3" style="display:none;">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarEntidad').modal('show');
  });
}

function mostrarProductos() {
  var productos = JSON.parse(localStorage.getItem("productos"));
  const divPrincipal = $('#Productos');
  for (var i = 0; i < productos.length; i++) {
    let cartaDiv = $('<div class="card my-3" style="width: 18rem;"></div>');
    var imagen = new Image();
    imagen.src = productos[i].imagen;
    imagen.className = "card-img-top";
    let cartaBody = $('<div class="card-body"></div>');
    let titulo = $('<h5 class="card-title">' + productos[i].nombre + '</h5>');
    let detalles = $('<button class="detalles btn btn-primary" value= ' + i + '>Detalles</button>');
    let editar = $('<button class="editar btn btn-primary me-1" style="display:none;" value= ' + i + '>Editar</button>');
    let borrar = $('<button class="borrar btn btn-danger" style="display:none;" value= ' + i + '>Borrar</button>');
    detalles.click(function () {
      var productos = JSON.parse(localStorage.getItem("productos"));
      var producto = productos[$(this).val()];
      localStorage.setItem("productoDetalles", JSON.stringify(producto));
      window.location.href = 'detallesProducto.html';
    });
    editar.click(function () {
      var productos = JSON.parse(localStorage.getItem("productos"));
      var producto = productos[$(this).val()];
      $('#fieldEditarNombreProducto').val(producto.nombre);
      $('#fieldEditarFechaCreacionProducto').val(producto.fechaCreacion);
      $('#fieldEditarFechaDesaparicionProducto').val(producto.fechaDefuncion);
      $('#fieldEditarWikiProducto').val(producto.wikipedia);
      var personas = producto.personas.join(",");
      $('#fieldEditarPersonasProducto').val(personas);
      var entidades = producto.entidades.join(",");
      $('#fieldEditarEntidadesProducto').val(entidades);
      $('#saveEditarProducto').val($(this).val());
      $('#modalEditarProducto').modal('show');
    });
    borrar.click(function () {
      var productos = JSON.parse(localStorage.getItem("productos"));
      productos.splice($(this).val(), 1);
      localStorage.setItem("productos", JSON.stringify(productos));
      window.location.href = 'index.html';
    });
    cartaBody.append(titulo);
    cartaBody.append(detalles);
    cartaBody.append(editar);
    cartaBody.append(borrar);
    cartaDiv.append(imagen);
    cartaDiv.append(cartaBody);
    divPrincipal.append(cartaDiv);
  }
  let botonAgregar = $('<button class="agregar btn btn-success mt-3" style="display:none;">Añadir</button>');
  divPrincipal.append(botonAgregar);
  botonAgregar.click(function () {
    $('#modalAgregarProducto').modal('show');
  });
}

function login() {
  $(".detalles").hide();
  $(".editar").show();
  $(".borrar").show();
  $(".agregar").show();
  $('#login-form').hide();
  $('#logout-form').show();
}

function logout() {
  $('#logout-form').hide();
  $('#login-form').show();
  $(".editar").hide();
  $(".borrar").hide();
  $(".agregar").hide();
  $(".detalles").show();
}

function init() {
  // Comprobar si esta logueado
  var session = localStorage.getItem("session");
  var users = localStorage.getItem("users");
  var personas = localStorage.getItem("personas");
  var entidades = localStorage.getItem("entidades");
  var productos = localStorage.getItem("productos");
  // La lista de usuarios, personas, entidades o productos no existe, crearla
  if (users === null && personas === null && entidades === null && productos === null) {
    var usersArray = [
      { username: "x", password: "x" },
      { username: "y", password: "y" },
      { username: "z", password: "z" }
    ];
    var usersJSON = JSON.stringify(usersArray);
    localStorage.setItem("users", usersJSON);

    // Creo una persona por defecto
    var persona = new Persona('Tim Berners-Lee', '1955-06-08', '', '/Resources/Sir_Tim_Berners-Lee.jpg', 'https://es.wikipedia.org/wiki/Tim_Berners-Lee');
    var personasArray = [];
    personasArray.push(persona);
    var personasJSON = JSON.stringify(personasArray);
    localStorage.setItem("personas", personasJSON);

    // Creo una entidad por defecto
    var personas = [];
    personas.push(persona.nombre);
    var entidad = new Entidad("World Wide Web Consortium", "1994-06-09", "", "/Resources/w3c.png", "https://es.wikipedia.org/wiki/World_Wide_Web_Consortium", personas);
    var entidadesArray = [];
    entidadesArray.push(entidad);
    var entidadesJSON = JSON.stringify(entidadesArray);
    localStorage.setItem("entidades", entidadesJSON);

    // Creo un producto por defecto
    var entidades = [];
    entidades.push(entidad.nombre);
    var producto = new Producto("HTML", "1991-01-01", "", "/Resources/html.png", "https://es.wikipedia.org/wiki/HTML", personas, entidades);
    var productosArray = [];
    productosArray.push(producto);
    var productosJSON = JSON.stringify(productosArray);
    localStorage.setItem("productos", productosJSON);
  }
  mostrarPersonas();
  mostrarEntidades();
  mostrarProductos();
  if (session === null) {
    localStorage.setItem("session", "false");
  } else {
    if (session === "true") {
      login();
    } else {
      logout();
    }
  }
}
window.addEventListener("load", init);


$(document).ready(function () {
  var alert = document.getElementById("alerta");

  //Funcionalidad del botón de login
  $('#login-button').click(function () {
    var username = document.getElementById("fieldUser").value;
    var password = document.getElementById("fieldPassword").value;
    var users = JSON.parse(localStorage.getItem("users"));
    var divAlerta = $('#zonaAlerta');
    // Recorrer lista de usuarios y contraseñas
    for (var i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        // Iniciar sesión
        let cartaBody = $('<div class="alert alert-success" >Inicio de sesión exitoso</div>');
        divAlerta.append(cartaBody);
        login();
        localStorage.setItem("session", "true");
        setTimeout(function () {
          divAlerta.empty();
        }, 3000);
        return;
      }
    }
    // No se encontró el usuario
    let cartaBody = $('<div class="alert alert-danger" >Usuario o contraseña incorrectos</div>');
    divAlerta.append(cartaBody);
  });

  //Funcionalidad del botón de logout
  $('#logout-button').click(function () {
    logout();
    $('#fieldUser').val("");
    $('#fieldPassword').val("");
    localStorage.setItem("session", "false");
  });

  //Funcionalidad añadir persona
  $('#addPersona').click(function () {
    const nombre = $('#fieldNombrePersona').val();
    const fechaNacimiento = $('#fieldFechaNacimientoPersona').val();
    var fechaMuerte = $('#fieldFechaDefuncionPersona').val();
    const wikipedia = $('#fieldWikiPersona').val();
    var imagen = $('#fieldImagenPersona').val();
    if (nombre != "" && fechaNacimiento != "" && wikipedia != "" && imagen != "") {
      var reader = new FileReader();
      reader.onload = function (e) {
        imagen = e.target.result;
        var persona = new Persona(nombre, fechaNacimiento, fechaMuerte, imagen, wikipedia);
        var personas = JSON.parse(localStorage.getItem("personas"));
        personas.push(persona);
        var personasJSON = JSON.stringify(personas);
        localStorage.setItem("personas", personasJSON);
        window.location.href = 'index.html';
      }
      reader.readAsDataURL($('#fieldImagenPersona')[0].files[0]);
    }
  });
  //Funcionalidad del botón de editarPersona
  $('#saveEditarPersona').click(function () {
    const nombre = $('#fieldEditarNombrePersona').val();
    const fechaNacimiento = $('#fieldEditarFechaNacimientoPersona').val();
    var fechaMuerte = $('#fieldEditarFechaDefuncionPersona').val();
    const wikipedia = $('#fieldEditarWikiPersona').val();
    var imagen = $('#fieldEditarImagenPersona').val();
    var indice = $(this).val();
    if (nombre != "" && fechaNacimiento != "" && wikipedia != "") {
      if (imagen != "") {
        var reader = new FileReader();
        reader.onload = function (e) {
          imagen = e.target.result;
          var personas = JSON.parse(localStorage.getItem("personas"));
          const persona = new Persona(nombre, fechaNacimiento, fechaMuerte, imagen, wikipedia);
          personas.splice(indice, 1);
          personas.splice(indice, 0, persona);
          var personasJSON = JSON.stringify(personas);
          localStorage.setItem("personas", personasJSON);
          window.location.href = 'index.html';
        }
        reader.readAsDataURL($('#fieldEditarImagenPersona')[0].files[0]);
      } else {
        var personas = JSON.parse(localStorage.getItem("personas"));
        const persona = new Persona(nombre, fechaNacimiento, fechaMuerte, personas[indice].imagen, wikipedia);
        personas.splice(indice, 1);
        personas.splice(indice, 0, persona);
        var personasJSON = JSON.stringify(personas);
        localStorage.setItem("personas", personasJSON);
        window.location.href = 'index.html';
      }

    }
  });

  //Funcionalidad añadir entidad
  $('#addEntidad').click(function () {
    const nombre = $('#fieldNombreEntidad').val();
    const fechaCreacion = $('#fieldFechaCreacionEntidad').val();
    const fechaDesaparicion = $('#fieldFechaDesaparicionEntidad').val();
    const wikipedia = $('#fieldWikiEntidad').val();
    var personas = $('#fieldPersonasEntidad').val();
    personas = personas.split(",");
    var imagen = $('#fieldImagenEntidad').val();
    if (nombre != "" && fechaCreacion != "" && wikipedia != "" && imagen != "") {
      var reader = new FileReader();
      reader.onload = function (e) {
        imagen = e.target.result;
        var entidad = new Entidad(nombre, fechaCreacion, fechaDesaparicion, imagen, wikipedia, personas);
        var entidades = JSON.parse(localStorage.getItem("entidades"));
        entidades.push(entidad);
        var entidadesJSON = JSON.stringify(entidades);
        localStorage.setItem("entidades", entidadesJSON);
        window.location.href = 'index.html';
      }
      reader.readAsDataURL($('#fieldImagenEntidad')[0].files[0]);
    }
  });
  //Funcionalidad del botón de editarEntidad
  $('#saveEditarEntidad').click(function () {
    const nombre = $('#fieldEditarNombreEntidad').val();
    const fechaCreacion = $('#fieldEditarFechaCreacionEntidad').val();
    const fechaDesaparicion = $('#fieldEditarFechaDefuncionEntidad').val();
    const wikipedia = $('#fieldEditarWikiEntidad').val();
    var personas = $('#fieldEditarPersonasEntidad').val();
    personas = personas.split(",");
    var imagen = $('#fieldEditarImagenEntidad').val();
    var indice = $(this).val();
    if (nombre != "" && fechaCreacion != "" && wikipedia != "") {
      if (imagen != "") {
        var reader = new FileReader();
        reader.onload = function (e) {
          imagen = e.target.result;
          var entidades = JSON.parse(localStorage.getItem("entidades"));
          const entidad = new Entidad(nombre, fechaCreacion, fechaDesaparicion, imagen, wikipedia, personas);
          entidades.splice(indice, 1);
          entidades.splice(indice, 0, entidad);
          var entidadesJSON = JSON.stringify(entidades);
          localStorage.setItem("entidades", entidadesJSON);
          window.location.href = 'index.html';
        }
        reader.readAsDataURL($('#fieldEditarImagenEntidad')[0].files[0]);
      } else {
        var entidades = JSON.parse(localStorage.getItem("entidades"));
        const entidad = new Entidad(nombre, fechaCreacion, fechaDesaparicion, entidades[indice].imagen, wikipedia, personas);
        entidades.splice(indice, 1);
        entidades.splice(indice, 0, entidad);
        var entidadesJSON = JSON.stringify(entidades);
        localStorage.setItem("entidades", entidadesJSON);
        window.location.href = 'index.html';
      }

    }
  });

  //Funcionalidad del botón añadir producto
  $('#addProducto').click(function () {
    const nombre = $('#fieldNombreProducto').val();
    const fechaCreacion = $('#fieldFechaCreacionProducto').val();
    var fechaDesaparicion = $('#fieldFechaDesaparicionProducto').val();
    const wikipedia = $('#fieldWikiProducto').val();
    var personas = $('#fieldPersonasProducto').val();
    personas = personas.split(",");
    var entidades = $('#fieldEntidadesProducto').val();
    entidades = entidades.split(",");
    var imagen = $('#fieldImagenProducto').val();
    if (nombre != "" && fechaCreacion != "" && wikipedia != "" && imagen != "") {
      var reader = new FileReader();
      reader.onload = function (e) {
        imagen = e.target.result;
        var producto = new Producto(nombre, fechaCreacion, fechaDesaparicion, imagen, wikipedia, personas, entidades);
        var productos = JSON.parse(localStorage.getItem("productos"));
        productos.push(producto);
        var productosJSON = JSON.stringify(productos);
        localStorage.setItem("productos", productosJSON);
        window.location.href = 'index.html';
      }
      reader.readAsDataURL($('#fieldImagenProducto')[0].files[0]);
    }
  });

  //Funcionalidad del botón de editarProducto
  $('#saveEditarProducto').click(function () {
    const nombre = $('#fieldEditarNombreProducto').val();
    const fechaCreacion = $('#fieldEditarFechaCreacionProducto').val();
    var fechaDesaparicion = $('#fieldEditarFechaDesaparicionProducto').val();
    const wikipedia = $('#fieldEditarWikiProducto').val();
    var personas = $('#fieldEditarPersonasProducto').val();
    personas = personas.split(",");
    var entidades = $('#fieldEditarEntidadesProducto').val();
    entidades = entidades.split(",");
    var imagen = $('#fieldEditarImagenProducto').val();
    var indice = $(this).val();
    if (nombre != "" && fechaCreacion != "" && wikipedia != "") {
      if (imagen != "") {
        var reader = new FileReader();
        reader.onload = function (e) {
          imagen = e.target.result;
          var productos = JSON.parse(localStorage.getItem("productos"));
          const producto = new Producto(nombre, fechaCreacion, fechaDesaparicion, imagen, wikipedia, personas, entidades);
          productos.splice(indice, 1);
          productos.splice(indice, 0, producto);
          var productosJSON = JSON.stringify(productos);
          localStorage.setItem("productos", productosJSON);
          window.location.href = 'index.html';
        }
        reader.readAsDataURL($('#fieldEditarImagenProducto')[0].files[0]);
      } else {
        var productos = JSON.parse(localStorage.getItem("productos"));
        const producto = new Producto(nombre, fechaCreacion, fechaDesaparicion, productos[indice].imagen, wikipedia, personas, entidades);
        productos.splice(indice, 1);
        productos.splice(indice, 0, producto);
        var productosJSON = JSON.stringify(productos);
        localStorage.setItem("productos", productosJSON);
        window.location.href = 'index.html';
      }

    }
  });
});