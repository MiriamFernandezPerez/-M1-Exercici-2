const coberturaLitro = 12;


function calcularLitros(){
    let area = document.getElementById("metros_cuadrados").value;
    let manos = document.getElementById("manos_pintura").value;

    let result = (area / coberturaLitro) * manos;
    
    document.getElementById("resultado_litros").innerHTML = "Necesitas " + result.toFixed(2) + " litros de pintura";

}

function calcularLitrosArea(){
    let alto = document.getElementById("alto").value;
    let ancho = document.getElementById("ancho").value;
    let manos = document.getElementById("manos_pintura2").value;
        
    let area = ancho * alto;
    let litros = area / coberturaLitro;
    let result = litros * manos;
    console.log(result)
    
    
    document.getElementById("resultado_litros").innerHTML = "Necesitas " + result.toFixed(2) + " litros de pintura.";
    
}



