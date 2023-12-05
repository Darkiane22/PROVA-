function informe(){
   
    //entrada e armazenamento
    let numero=parseInt(document.getElementById("numero").value);

    //let nota2=parseFloat(document.querySelector("#nota2").value); //outra forma, se usar essa forma...o hashtag faz parte


    //processamento dos dados
    let divisao= numero/2;
    document.getElementById("divisao").innerHTML = "A metade do numero digitado é: " + divisao;
    
    let multiplicaçao=numero*2;
    document.getElementById("multiplicaçao").innerHTML = "O dobro do numero digitado é: " + multiplicaçao;

   
    if(numero/2 % 0)
    document.getElementById("Par").innerHTML=" O Numero digitado é PAR : " + numero;

    else(Par/2  % 1)
            document.getElementById("Par").innerHTML=" O Numero digitado é impar : " + numero;
    
    }
    
    