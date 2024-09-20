//Aqui hago la declaracion de la funcion con el proposito de calcular las ventas de los video juegos

function calcularVenta(juego){
//Inicializo variables en 0 para darles un valor en la estructura de control
    let precio = 0;
    let decuentos = 0;

    //Aqui declaro variables para poder extraer los datos de los inpust atraves de la manipulacion del DOMS
    let nombre_usuario = document.getElementById("Nombre_Usuario").value;
    let apellidos_usuario = document.getElementById("Apellidos_Usuario").value;
    let numero_de_copias = parseInt(document.getElementById("Cantidad_de_Juegos").value);

    /*Se utiliza la estructura de control If para aplicarle diferentes descuentos a los video juegos
    Tambien se utiliza para crear la condicion de si el comprador lleva mas de una  copia de un juego 
    se aplica el desscuento
    */

    if(juego === 'Super Mario Bros 1'){
        precio  = 35
        if(numero_de_copias > 1){
            decuentos = 0.10
        }else {
            decuentos = 0;
        }
    }else if (juego === 'Super Mario bros 2'){
        precio = 45
        if(numero_de_copias > 1){
            decuentos = 0.15;
        }else {
            decuentos = 0;
        }
    }else if (juego === 'God of war'){
        precio = 50;
        if(numero_de_copias > 1){
            decuentos = 0.20;
        }else{
            decuentos = 0;
        }
    
    }else if (juego === 'zelda'){
            precio = 15;
            if(numero_de_copias > 1){
                decuentos = 0.05;
            }else {
                decuentos = 0;
            }

    }else if (juego === 'Super Mario bros 3'){
        precio = 50
        if(numero_de_copias > 1){
            decuentos = 0.25
        }else{
            decuentos = 0;
        }        
    }

    //Aqui declaro variables que ayudan hacer el proceso de compras y como se le aplican.
    let precio_cantidad_de_copias = precio * numero_de_copias
    let decuentos_total = precio_cantidad_de_copias * decuentos
    let monto_final = precio_cantidad_de_copias - decuentos_total
    
    //Mostramos el resultado en un alter, en este alerte se colocan las variables como lo son los nombre y apellido del comprador
    //Tambien se coloca el nombre del juego elegido y su precio base, se muestra de cuanto sera su descuento, y su precio final
    //Y por ultimo se muestra el precio original sin descuento.
    alert("Un gusto saludarte: " + nombre_usuario + " " + apellidos_usuario + " te saludamos de la tienda retro de video juegos es un gusto que nos hayas elegido" + "\n"
        + "Compraste de nuestra tienda el video juego: " + juego + " Con precio de $ " + precio + "\n" +
        "Es un placer para nosotros informarte que si llevas mas de un juego tu descuento es del " + (decuentos * 100) + "%, sino llevas mas de un juego no tienes decuento\n" + 
        "El precio final es de $" + monto_final + ", precio original sin descuento $ " + precio_cantidad_de_copias);
    }
