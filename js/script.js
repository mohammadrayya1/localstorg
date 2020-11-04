

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


});




var textarea=document.querySelector("#textarea"),
    count=document.querySelector("#count"),
    maxlengh=textarea.getAttribute("maxlength");


textarea.oninput=function()
{

count.innerHTML=maxlengh- textarea.value.length;

if(count.innerHTML == 0)
{

count.setAttribute('class',"Zero");

}
else
{
    count.classList.remove("Zero");
}

}



var inputText=document.querySelector("#input2");


function remTextInput(num)
{

num.addEventListener('focus',function(){

num.setAttribute('data',num.getAttribute('placeholder'));
num.setAttribute('placeholder',' ');



});

num.addEventListener('blur',function(){

num.setAttribute('placeholder',num.getAttribute('data'));

});




}

remTextInput(inputText);

var pp=document.querySelector("#pp");
var btn=document.querySelector("#button");


function writetextp(num)
{

num.addEventListener('click',function()
{
var i=0;
var s=setInterval(function()
{
    
pp.textContent +=inputText.value[i];
i++;
if(i>inputText.value.length -1)
{
 pp.textContent += "<span style= display:block> Finish </span>";   
clearInterval(s);

}


},200);


});


}


writetextp(btn);


var button1=document.querySelector("#btn1"),
    input3=document.querySelector("#pass");



button1.addEventListener('click',function()
{

if(button1.textContent == "Show Password")
{
    input3.setAttribute('type','text');
    button1.textContent="Hidden Password";
}
else
{

    input3.setAttribute('type','password');
    button1.textContent = "Show Password";
}



});


var btn3=document.querySelector("#goup");

window.onscroll=function(){
if(window.pageYOffset>=800)
{
    
btn3.style.display="block";


}
else
{
    btn3.style.display="none";
}
}

btn3.addEventListener("click",function()
{
window.scrollTo(0,0);
})


var classlist=["class1","class2","class3","class4"],
    randomkey=Math.floor(Math.random()* classlist.length);


document.body.setAttribute('class',classlist[randomkey]);


document.addEventListener("contextmenu",function(e)
{

   e.preventDefault();
});





     



    window.onload=function(){


        setInterval(function()
        {
          

            var now=new Date();
             var Hours=now.getHours();
            var Minut=now.getMinutes();
            var Second=now.getSeconds();
        
    

            var docclock= document.querySelector("#clock").innerHTML=Hours +":"+ Minut + ":" + Second;
      

        },100);
    

}

   document.querySelector("#clock").style.textAlign="center";


   var spp=document.querySelector("#sppp");
   var te=document.querySelector("#textarea123");
   var count12=0;


   te.oninput=function()
   {
    if(te.value.length>50)
    {
        spp.style.color="red";
    }else{ spp.style.color="black";}
    spp.innerHTML = 50 - te.value.length;


   };
   

var imag1=document.querySelector("#imag");

var imaglist=["css/images/1.jpg","css/images/2.jpg","css/images/3.jpg","css/images/4.jpg"];


var i=0;

window.onload=setInterval(function()
{

   
if(i>imaglist.length-1){
i=0;
}
else{
    imag1.setAttribute("src",imaglist[i]);
    i++;
}


},1000);


var btn4=document.querySelector("#Redir");


btn4.addEventListener("click",function(){


window.location="https://www.arabdict.com/";

});


var inp=document.querySelector("#input44");


inp.addEventListener("focus",function()
{


this.setAttribute('data',this.getAttribute('placeholder'));


this.setAttribute('placeholder'," ");


});
inp.addEventListener("blur",function()
{

    this.setAttribute('placeholder',this.getAttribute('data'));
    this.setAttribute('data'," ");



});