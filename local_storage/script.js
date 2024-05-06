document.getElementById('id');
const studentBioData={
    firstName:'RUPAM',
    lastName:"dey",
    age:23,
    gender:"male",
}
const myBtn1=document.getElementById('btn1').addEventListener('click',()=>{handleBtn1()});
const myBtn2=document.getElementById('btn2').addEventListener('click',()=>{handleBtn2()});
const myBtn3=document.getElementById('btn3').addEventListener('click',()=>{handleBtn3()});

const handleBtn1=()=>{
    localStorage.setItem("objectData",JSON.stringify(studentBioData))
}
const handleBtn2=()=>{
const dataRetrive=JSON.parse(localStorage.getItem("objectData"));
console.log(dataRetrive);
}
const handleBtn3=()=>{
    localStorage.removeItem("objectData",);
    localStorage.removeItem("name",);
}



