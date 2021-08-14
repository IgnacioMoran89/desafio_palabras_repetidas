//Funcion para contar las palabras
function countByWord() {
    //Con const creamos una referencia de solo lectura, llamando al texto por la ID
    // Luego a ese texto, con innerText.trim llamamos al texto y eliminamos los espacios
    //.toLowerCase transformamos todo a letras minúsculas y se imprime en pantalla con console.log
    const text = document.getElementById('texto-entrada').innerText.trim().toLowerCase();
    console.log(text);
    

        acum = {}; // creamos el objeto acum
        // el texto se transforma en un array de palabras
        const words = text.split(' ');
        //Con for iteramos y recorremos el texto
        // iniciamos la variable i 
        //declaramos que i es menor que el largo del texto y nos arroja la cantidad
        // i ++ es el valor de i antes del incremento, es decir la palabra en este caso
        //Por lo tanto, se genera un array con palabra y cantidad
        for (let i = 0; i < words.length; i++){
        const palabra_actual = words[i] //declaramos la referencia a que palabra_actual es igual a la posición de i en el texto (array))
        if (acum[palabra_actual]) { //si el objeto recorrido es igual a palabra actual:
            acum[palabra_actual]++;  //sumamos 1 a la cantidad de la palabra y corremos en 1 la posición en el texto recorrido    
        }
        else {
            acum[palabra_actual] = 1 //se mantiene en 1 (se mantiene en los valores el array)
        }
        }
        return acum; //retornamos el objeto acum
    }


//Funcion para mostrar las las palabras y la cantidad en el HTML
    function text(word, cant){
    
        let div = document.getElementById("resultados"); //traemos el div con id resultados desde el index
    
        let p = document.createElement("p"); //creamos el elemento parrafo en el html
        div.appendChild(p);
    
        let strong = document.createElement("strong"); //ponemos en negrita la palabra del título PALABRA y va al HTML
        let texto_strong = document.createTextNode("Palabra: "+ word);//traemos la palabra correspondiente
        strong.appendChild(texto_strong);
        p.appendChild(texto_strong);
    
        let span = document.createElement("span"); //ponemos la palabra CANTIDAD como titulo en el HTML
        let texto_span = document.createTextNode(", Cantidad: "+ cant); //traemos la cantidad de la palabra correspondiente
        span.appendChild(texto_span);
        p.appendChild(texto_span);
    
    }
    
    // Devuelve una matriz en este caso del objeto counByWord
    //y para cada array generado en ese objeto, enviamos a la función text
    Object.entries(countByWord()).forEach(array =>{
        text(array[0], array[1])
    })