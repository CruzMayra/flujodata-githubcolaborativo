var students = [];

function getStudentsList() {
    // TO DO: Retornar la lista de estudiantes
    return students;
}

function studentAdd() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    var name = prompt('Ingrese el nombre de la estudiante');
    var techPoints = prompt('Ingrese puntos Tech');
    var hsePoints = prompt('Ingrese puntos HSE');
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    var student = {
      'nameStudent': name,
      'tech': techPoints,
      'hse':hsePoints
    }
    students.push(student);
    // TO DO: Retornar el estudiante recientemente creado
    console.log(student);
}

function show(student) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var result = "";
    result += "<div class='row'>";
    result += "<div class='col m12'>";
    result += "<div class='card blue-grey darken-1'>";
    result += "<div class='card-content white-text'>";
    result += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    result += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    result += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    return result;
}

function listShow(students) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
  // Retornar el template de todos los estudiantes

}

function search(studentName, students) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTech(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
