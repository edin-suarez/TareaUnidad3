var nombre;
nombre = prompt("Porfavor ingrese su nombre");
alert("Bienvenido"+nombre)

var curso;

//Conjuncion AND &
//Disyuncion OR|(pipe)
//Negacion NOT !
while (curso != 1 && curso !=2){

  curso  = prompt("Los cursos a los que se puede inscribir son: 1. Programacion 2. Matematica")

}

var horario;

if(curso=1){
  horario = "1.Lunes a las 1300 2.sabado a las 0900"
}else{

  horario = "1.Martes a las 1600 2.Domingo a las 1300"
}

var horario_seleccionado
horario_seleccionado = prompt(horario)

alert("Se esta procesando la inscripción")
