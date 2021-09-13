//Однострочный комментарий
		/*Многострочный комментарий
		Средство ввода и вывода
		
		
		alert('hi'); 
		var credit = confirm('Вы хотите взять кредит?');
		alert(credit);
		var summa = prompt("Какую сумму");
		console.log(Summa);
		*/
function calculate(){//Функциональное определение
var myForm = document.message.elements;//коллекция елементов формы
var a=Symbol();
console.log(a);
var credit = myForm[1].value;//Сумма кредита
var crtime = myForm[2].value;//Срок кредита
var persent = myForm[3].value;//Процент кредита
var crsum = credit*persent/100/12*crtime;
//alert(crsum);
document.getElementById('result').innerHTML="Оплата за кредит составит :"+crsum;
	
	
}