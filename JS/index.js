alert('Inicia el juego');

alert('Elige tu ataque');

let player = prompt('Escribe 0 para piedra, 1 para papel  y 2 para tijera')

if(player == 0){

    alert('Elegiste PIEDRA * ');
}else if(player == 1){

    alert('Elegiste PAPEL []');

}else if(player == 2){

    alert('Elegiste TIJERA :<');

}

let enemy = Math.round(Math.random()*2)


if(enemy == 0){

    alert('El enemigo eligió PIEDRA * ');
}else if(enemy == 1){

    alert('El enemigo eligió PAPEL []');

}else if(enemy == 2){

    alert('El enemigo eligió TIJERA :<');

}

//Mostrar RESULTADO



if(player == enemy){

    alert('EMPATE ');

}else if(player == 0 && enemy == 2 ){

    alert('GANASTEEE ******');

}else if(player == 1 && enemy == 0){

    alert('GANASTEEE ******');

}else if(player == 2 && enemy == 1 ){

    alert('GANASTEEE ******');

}else {
    alert('Perdisteee :( ');
}


