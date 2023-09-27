function edad(){
    const fechaynombre = prompt("ingrese su fecha de nacimiendo de cuando nacio la cual representa el dia cuando nacio en formato YYYY-MM-DD y luego su nombre separado por una coma ,", "1970-01-01, binker").split(",")
    let fecha= new Date(fechaynombre[0])
    const nombre=fechaynombre[1] +" "
    let hoy= new Date()
    hoy=hoy.getFullYear()
    fecha=fecha.getFullYear()
    edad=hoy-fecha

    document.getElementById("resultadop").innerHTML= "Hola " + nombre + " tienes " + edad + " años"
}

function fruta(){
    const frutas=["arandano","frambuesa","frutilla","banana","manzana","limon","naranja","melon","palta","anana"]
    const divcoso=document.getElementById("resultadop")

    console.log(frutas)

    const frutaseleccionadaporelusuario=prompt("ingrese por favor una fruta por favor: ", "frambuesa")

    if (frutas.includes(frutaseleccionadaporelusuario.toLowerCase())){
        divcoso.innerHTML="SI EXISTE CORRECTO EXISTE LA FRUTA ESTA EPICO ASOMBROSO INCREIBLE INAUDITO SUBLIME"
    }
    else{
        divcoso.innerHTML="no existe :p"
    }
    
}

function comparando(){

    //10 es == a "10" ya que no comparamos el tipo de dato por ende esto devuelve true:
    console.log(10=="10")

    //10 no es === a "10" ya que ahora tomamos en cuenta el tipo de dato por esto devuelve false:
    console.log(10==="10")

    //10.6 es un numero racional y en js todo numero es un tipo number
    console.log(typeof 10.6)

    //si es cierto ya que javascript al comparar un binario con un numero que vale 1 lo toma como numero binario(1/0)
    console.log(true==1)
}

function yobjeto(){

    const ciudad={
        nombre : "la ciudad de la furia",
        fechaFundacion : new Date("6/11/1580"),
        poblacion : 6666666,
        extension : 20000000000,
    }

    const claves=Object.keys(ciudad)
    const valores=Object.values(ciudad)

    for(let i=0; i<claves.length; i++){
        document.getElementById("resultadop").innerHTML+=claves[i] + ": " + valores[i] + "<br>"
    }

}

function doble(){

    let arr=(prompt("ingrese una lista de numeros separados por espacio ", "1 2 3 4")).split(" ")

    const dobles=arr.map(num=> parseInt(num)*2)

    document.getElementById("resultadop").innerHTML=dobles

}

function asteriscos1(){
    const cantfilas=5
    let string=""
    for(var i=1;i<cantfilas+1;i++){


        for(var j=0;j<i;j++){

            string+="*"

        }

        string+="\n"
    }
    console.log(string)

}

function asteriscos2(){
    const cantfilas=9
    let str=""
    for(var i =1;i<=cantfilas;i++){
        if (i==(cantfilas+1)/2){str+="*"}
        else {str+="-"}
    }
    console.log(str)
    let cantguion=4
    let cantast=1
    
    for (var i=1;i<=((cantfilas+1)/2)-1;i++){

        str=""
        cantguion-=1
        cantast+=2
        
        for(var j=0; j<cantguion;j++){
            str+="-"
        }
        for(var j=0; j<cantast;j++){
            str+="*"
        }
        for(var j=0; j<cantguion;j++){
            str+="-"
        }

        console.log(str)
        
    }


}

function nombres(){
    let listnombres= (prompt("ingrese los nombres separados por coma", "dante, zarek, zareke, adrian, aristoteles").toLowerCase()).split(",")
 
    listnombres=listnombres.map(i => i=i.trim())

    const listresultado=listnombres.filter(nombre=>nombre[0]=="a")
    document.getElementById("resultadop").innerHTML=listresultado
}

function reemplazarpalabras(){
    const str=(prompt("ingrese a continuacion una cadena de texto a continuacion:", "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.")).split(" ")
    
    const words=(prompt("ingrese la palabra a reemplazar y luego la palabra por la cual se va a reemplazar separadas por coma", "el, la")).split(",")
    const palabrain=words[0].trim()
    const palabraout=words[1].trim()

    const result=(str.map(i=> i==palabrain ? palabraout : i)).join(" ")
    document.getElementById("resultadop").innerHTML=result
}

function cortartexto(){
    const strYNum=(prompt("ingrese una cadena de texto y un numero separados por coma", "hola q onda, 6")).split(",")

    const str=strYNum[0]
    const num=parseInt(strYNum[1])

    const result=str.substring(0,num)
    document.getElementById("resultadop").innerHTML=result
}

function separador(){
    const str=(prompt("ingrese una lista de elementos separados por coma", "la,lista,separada,por,comas")).split(",")

    const result=str.join("-")
    document.getElementById("resultadop").innerHTML=result
}


function calculadoraRecaudacion(){
    const str=(prompt("ingrese objetos pedidos con sus respectivos totales en formato nombre:total", "hamburguesa:8.75")).split(",")
    const recaudacioncu= str.map(i => Number(i.substring(i.indexOf(":")+1)))
    let rectotal=0;
    recaudacioncu.forEach(rec=>rectotal+=rec)
    document.getElementById("resultadop").innerHTML=rectotal
}