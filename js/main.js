var numberOne = document.getElementById('numberOne')
var numberTwo = document.getElementById('numberTwo')
document.querySelector('#btnOne').addEventListener('click',function(){
    var number=numberOne.value;
    var number1=numberTwo.value;
    var result = (number*number1);
    clearForm()
    document.querySelector('#total').innerHTML = result
    console.log(result);
})
document.querySelector('#btnTwo').addEventListener('click',function(){
    var number=numberOne.value;
    var number1=numberTwo.value;
    var result = (number/number1);
    clearForm()
    document.querySelector('#total').innerHTML = result
    console.log(result);
})
function clearForm(){
    numberOne.value=''
    numberTwo.value=''
}