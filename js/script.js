

var backk=document.querySelector(".back");
backk.style.backgroundColor=localStorage.getItem("ssss");
var el=document.querySelectorAll(".color-switcher li");
var classes=[];


for(var i=0;i<el.length;i++)
{

classes.push(el[i].getAttribute('data-coloer'));

el[i].addEventListener('click',function()
{

console.log(backk.style.backgroundColor=this.getAttribute('data-coloer'));

localStorage.setItem("ssss",this.getAttribute('data-coloer'));


})


}


console.log(localStorage.getItem("ssss"));





function Uppercase1(num)
{

var oldarray=num.split(' ');
var newArray = [];



for(var i=0;i<oldarray.length;i++)
{

newArray.push(oldarray[i].charAt(0).toUpperCase() + oldarray[i].slice(1));

}


return newArray.join(' ');

}



var bott=document.querySelector('#btn');
var div1=document.querySelector("#result");
var inputt=document.querySelector("#input1");

bott.addEventListener('click',function()
{
div1.innerHTML=Uppercase1(inputt.value);


})
