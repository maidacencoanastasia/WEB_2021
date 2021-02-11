 //////////////////////////////////////// 1 //////////////////////////////////////
result = prompt("Introduceti un numar")
if (result>0) {
	alert(1);
}else if (result<0){
	alert(-1);
}else if (result==0){
	alert(0);
}else if (isNaN(result)){
	alert("Error");
}
////////////////////////////////////////// 2 ////////////////////////////////////
age = 100;
if (!(age >= 14 && age <= 90)){
	alert("not in [14;90] first method");
}
if (age < 14 || age > 90){
	alert("not in [14;90] second method")
}
///////////////////////////////////////// 3 ///////////////////////////////////////
function myFunccc(){
	let admin = "admin"
	let pole = document.getElementById("pole");
	let pass = document.getElementById("pass");
	if ( pole.value ==" "||pass.value =="" ){
    console.log("Ошибка Валидации");
  }else if (pole.value === pass.value) {
    console.log("Привет");
  } else if (pole.value != admin){
    console.log("Неправильный username");
  }else if (pass.value != admin ){
    console.log("Неправильный пароль");
  }
}
////////////////////////////////////////  4  ///////////////////////////////////////
function myFunction(){
	let a = parseInt(document.getElementById("var1").value);
	let b = parseInt(document.getElementById("var2").value);
	for (let i = a; i <= b; i++) {
	if (i%2==0) {
		console.log(i)
		}
	}
}

