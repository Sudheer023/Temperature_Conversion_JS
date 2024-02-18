const CalculateTemp=()=>{
    const EnteredTemp= document.getElementById('temp').value
   
   const selectedTemp= document.getElementById('temp_diff')

  const valueTemp=temp_diff.options[selectedTemp.selectedIndex].value

let  result;
const cellTofah=(EnteredTemp)=>{
    return (EnteredTemp * 9/5) + 32;
}

const farTocel=(EnteredTemp)=>{
    return (EnteredTemp - 32) * 5/9;
}

if(valueTemp==='cel'){
result=cellTofah(EnteredTemp);
document.getElementById('result_container').innerHTML=`${result} °Fahrenheit`

}
else{
    result=farTocel(EnteredTemp);
    document.getElementById('result_container').innerHTML=`${result} °Celsius`
}

}