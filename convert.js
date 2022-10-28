function convertdecimaltobinary(){
    var decimal_number = document.getElementById("decimal").value;
    var remainder  = [];


    while(decimal_number!=1){
        if(decimal_number%2==0){
            remainder.push(decimal_number%2);
            decimal_number/=2;
        }
        else{
            remainder.push(decimal_number%2);
            decimal_number=(decimal_number-decimal_number%2)/2;
        }
    }

    remainder.push(1);
    
   
    
  
    document.getElementById("binary").innerHTML = remainder.reverse();
}

function convertbinarytodecimal(){
    var binary_number = document.getElementById("binary_num").value;
    var decimal = 0;
    var k = 0;
    for(var i = binary_number.length - 1 ; i>=0 ;i--){
        // alert(binary_number[i]);
        decimal = decimal + binary_number[i]*(2**k);
        k+=1;
        console.log(decimal);
    }
    document.getElementById("decimal_num").innerHTML = decimal;
}