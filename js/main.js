//Méthode 1 : 
document.getElementById("bt1").addEventListener("click",
function(){
    document.getElementById("abc").style.fontWeight='bold';
}
);

document.getElementById("bt2").addEventListener("click",
function(){
    document.getElementById("abc").style.fontStyle='italic';
}
)

document.getElementById("bt3").addEventListener("click",
function(){
    document.getElementById("abc").style.textDecoration='underline';
}
)

function func1(){
    var x=document.getElementById("bcd").value;
    document.getElementById("abc").style.fontFamily=x;
}

function func2(){
    var y=document.getElementById("efg").value;
    document.getElementById("abc").style.fontSize=y+"px";
}


