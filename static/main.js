var onedmove=false
var fourdmove=false
var oy,ox,topv

var ojoy=document.getElementById("ojoy")
var fjoy=document.getElementById("fjoy")

document.addEventListener("mousemove",(ev)=>{
    if (onedmove==true){
        if (ev.clientY-oy+topv>100){
            ojoy.style.top=`${100}px`
        }
        else if(ev.clientY-oy+topv<-100){
             ojoy.style.top=`${-100}px`
        }
        else{ojoy.style.top=`${ev.clientY-oy+topv}px`}

        console.log(ev.clientY-oy)
    }

    else if(fourdmove==true){

        if (ev.clientX-ox>70){
            fjoy.style.left=`${70}px`
        }
        else if (ev.clientX-ox<-70){
            fjoy.style.left=`${-70}px`
        }
        else{
            fjoy.style.left=`${ev.clientX-ox}px`
        }

        if (ev.clientY-oy>70){
            fjoy.style.top=`${70}px`
        }
        else if (ev.clientY-oy<-70){
            fjoy.style.top=`${-70}px`
        }
        else{
            fjoy.style.top=`${ev.clientY-oy}px`
        }
    }
})

ojoy.addEventListener("mousedown",(ev)=>{
    onedmove=true
    oy=ev.clientY
    topv=parseInt(window.getComputedStyle(ojoy).top,10)

})

fjoy.addEventListener("mousedown",(ev)=>{
    fourdmove=true
    ox=ev.clientX
    oy=ev.clientY
    fjoy.style.transition="0s"
})

document.addEventListener("mouseup",()=>{
    onedmove=false
    fourdmove=false
    fjoy.style.transition=".1s"
    fjoy.style.left="0px"
    fjoy.style.top="0px"
})