

function sumar(){
	let input1 = document.getElementById('num1').value;
	let input2 = document.getElementById('num2').value;
	let result = document.getElementById('result');

    let total = (parseFloat(input1) + parseFloat(input2));
    result.innerText = "Resultado: " + total;
}

