let frutas = [


    'hello',
    'world',
    'amor'
]


for(let i =0; i< frutas.length ; i++ ){

    console.log(frutas)

}



//incontrar cual numero es mas  grande introducido



function numbers (){
    
    for(let i=0; i <3;i++ ){
        const numer =3;
        let input = prompt("ingresa un numero para la apuesta")
        switch(input == numer){
            case true:                
                return "esta bien"

            default:    
                return "sigue intentando"

        }
    }
}


function case_switchs (n1 , n2){

    switch(true){

        case n1 > n2 :
            return "n1 es mayor"
            break;
        case n2 > n1:
            return "n2 es mayor"
            break;
        default:
            return "son iguales"
            break;

    }

}



function numeros(){

    const uno =1;
    


}