function askMyName() {
    const name = prompt("Enter your name"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    }
 }
 function helloWorld() {
    const h1message = document.getElementById("name").innerText
    alert(h1message + "(แซงซ้ายไม่เคยว่า แต่ถ้าปาดหน้าเจอกัน)");
 }

 const calAge =() => {
   const yearOfbirth = Number(prompt('กรอกปีเกิด(ค.ศ.)'))
   const currentlyYear = new Date().getFullYear()
   const currentlyAge =currentlyYear - yearOfBirth
   alert(`ยินดีด้วย คุณอยู่ในประเทศนี้มา ${currentlyAge} ปีแล้ว`)
}

const loadProfile =() => {
   const name = 'Nawarat' 
   const province = 'Bangkok' 
   document.getElementById('my-name').innerHTML = name 
   document.getElementById('my-province').innerHTML = province
}