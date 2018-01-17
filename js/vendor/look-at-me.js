+function  () {
    // Elementos
    var addButton = document.getElementById('agregar');
    var showButton = document.getElementById('mostrar');
    var searchButton = document.getElementById('buscar');
    var techButton = document.getElementById('top-tecnico');
    var topHseButton = document.getElementById('top-hse');
    var result = document.getElementById('contenedor-estudiantes');


    // Evento Click - Agregar
    var addEvent = function (e) {
        e.preventDefault();
        var student = studentAdd();
        result.innerHTML = show(student);
    };

    var showEvent = function (e) {
        e.preventDefault();
        var students = getStudentsList();
        result.innerHTML = listShow(students);
    };

    var searchEvent = function (e) {
      e.preventDefault();
      var students = getStudentsList();
      var searchName = prompt("Proporcione un nombre a buscar");
      var searchStudent =search(searchName,students);
      result.innerHTML = listShow(searchStudent);

    }



    // Manejadores de eventos
addButton.addEventListener('click', addEvent);
showButton.addEventListener('click', showEvent);
searchButton.addEventListener('click', searchEvent);

}();
