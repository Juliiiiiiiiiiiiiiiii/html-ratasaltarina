var imagenes=["Raton1.png","Raton2.png","Raton3.png","Raton4.png","Raton5.png","Raton6.png"]; 
var a=0;
var b; 

function siguiente() {
    if(a==6){
        a=0;
    }
    document.getElementById("fotografia").src=imagenes[a];
    a++;
}

function mover(){
    b=setInterval(function(){
        if(a==6){
            a=0;
        }
        document.getElementById("fotografia").src=imagenes[a];
        a++;
        c=document.getElementById("manolo"); 
        c.disabled=true;
    },100)
}

function parar(){
    clearInterval(b); 
    c=document.getElementById("manolo"); 
    c.disabled=false;
}