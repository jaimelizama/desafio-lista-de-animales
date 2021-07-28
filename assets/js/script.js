class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto es ${this.telefono}.`;
  }
}

class Animal extends Propietario {
  constructor(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipo
  ) {
    super(nombrePropietario, direccionPropietario, telefonoPropietario);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipoAnimal,
    nombreMascota,
    enfermedad
  ) {
    super(
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario,
      tipoAnimal
    );
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombreMascota) {
    this._nombre = nuevoNombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

////////////////////////////////////////////////////////
// Probando la herencia

// const mascotaEjemplo = new Mascota(
//   "Jaime",
//   "Los Leones",
//   123456789,
//   "Perro",
//   "BlackPerro",
//   "sano"
// );
// console.log(mascotaEjemplo);
// console.log(mascotaEjemplo.datosPropietario());

////////////////////////////////////////////////////////

const formElement = document.getElementById("form");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombrePropietarioElement = document.querySelector("#propietario");
  const direccionPropietarioElement = document.querySelector("#direccion");
  const telefonoPropietarioElement = document.querySelector("#telefono");
  const tipoAnimalElement = document.querySelector("#tipo");
  const nombreMascotaElement = document.querySelector("#nombreMascota");
  const enfermedadElement = document.querySelector("#enfermedad");

  const nombrePropietario = nombrePropietarioElement.value;
  const direccionPropietario = direccionPropietarioElement.value;
  const telefonoPropietario = telefonoPropietarioElement.value;
  const tipoAnimal = tipoAnimalElement.value;
  const nombreMascota = nombreMascotaElement.value;
  const enfermedad = enfermedadElement.value;

  const mascota = new Mascota(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipoAnimal,
    nombreMascota,
    enfermedad
  );
  console.log(mascota);
  console.log(mascota.datosPropietario());

  function mostrarResultado(mascota) {
    const resultadoElement = document.querySelector("#resultado");
    resultadoElement.innerHTML = `
      <li>${mascota.datosPropietario()}</li>
      <li>${mascota.tipo}, mientras que el nombre de la mascota es: ${
      mascota.nombreMascota
    } y la enfermedad es: ${mascota.enfermedad}</li>`;
  }

  //   mostrarResultado(mascota);

  if (tipoAnimalElement.value == "perro") {
    const perro = mascota;
    mostrarResultado(perro);
  } else if (tipoAnimalElement.value == "gato") {
    const gato = mascota;
    mostrarResultado(gato);
  } else if (tipoAnimalElement.value == "conejo") {
    const conejo = mascota;
    mostrarResultado(conejo);
  } else {
    ("No elegiste el tipo de animal adecuado :(");
  }
});
