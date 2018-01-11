+function  () {
    // Elementos
    var addButton = document.getElementById('agragar');
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



    // Manejadores de eventos
addButton.addEventListener('click',addEvent);
showButton.addEventListener('click',showEvent);
}();
