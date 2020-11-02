

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