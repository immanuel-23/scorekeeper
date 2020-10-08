var p1button=document.getElementById("p1");
var p2button=document.getElementById("p2");
var p3button=document.getElementById("p3");
var count1=0;
var count2=0;
var gameover=false;
var winingscore=5;
var num=document.querySelector("input");
var p = document.getElementById("span3");
var bye=0;
var span1=document.getElementById("span1");
var span2=document.getElementById("span2");
var input =document.querySelector("input");
var welcome1=document.getElementById("welcome");
welcome.addEventListener("mouseover",function(){
	welcome1.style.color="green";
});
welcome.addEventListener("mouseout",function(){
	welcome1.style.color="white";
});
p1button.addEventListener("click",function(){
	if(gameover!==true)
	{
	count1=count1+1;
	if(count1===winingscore)
	{gameover=true;
	span1.classList.add("winer");
	
	}
	span1.textContent=count1
}});

p2button.addEventListener("click",function(){
	if(gameover!==true)
	{
	count2=count2+1;
	if(count2===winingscore)
	{ gameover=true;
	span2.classList.add("winer");}
		span2.textContent=count2
	}});
p3button.addEventListener("click",function(){
	count1=count2=0;
	span1.textContent=count1;
	span2.textContent=count2;
	span1.classList.remove("winer");
	span2.classList.remove("winer");
	input.value=0;
	gameover=false;
}
);
num.addEventListener("change",function(){
	

	p.textContent=input.value;
	winingscore=	Number(input.value);
});
	
	