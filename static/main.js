var onedmove=false
var fourdmove=false
var topv
var ojoy_oy
var fjoy_ox,fjoy_oy

var ojoy=document.getElementById("ojoy")
var fjoy=document.getElementById("fjoy")


document.addEventListener("pointermove", (ev) => {
    if (onedmove == true) {
        if (ev.clientY - ojoy_oy + topv > 100) {
            ojoy.style.top = `${100}px`
        }
        else if (ev.clientY - ojoy_oy + topv < -100) {
            ojoy.style.top = `${-100}px`
        }
        else {
            ojoy.style.top = `${ev.clientY - ojoy_oy + topv}px`
        }

        console.log(ev.clientY - ojoy_oy)
    }

    else if (fourdmove == true) {

        if (ev.clientX - fjoy_ox > 70) {
            fjoy.style.left = `${70}px`
        }
        else if (ev.clientX - fjoy_ox < -70) {
            fjoy.style.left = `${-70}px`
        }
        else {
            fjoy.style.left = `${ev.clientX - fjoy_ox}px`
        }

        if (ev.clientY - fjoy_oy > 70) {
            fjoy.style.top = `${70}px`
        }
        else if (ev.clientY - fjoy_oy < -70) {
            fjoy.style.top = `${-70}px`
        }
        else {
            fjoy.style.top = `${ev.clientY - fjoy_oy}px`
        }
    }
})

ojoy.addEventListener("pointerdown", (ev) => {
    onedmove = true
    ojoy_oy = ev.clientY
    topv = parseInt(window.getComputedStyle(ojoy).top, 10)
})

fjoy.addEventListener("pointerdown", (ev) => {
    fourdmove = true
    fjoy_ox = ev.clientX
    fjoy_oy = ev.clientY
    fjoy.style.transition = "0s"
})

document.addEventListener("pointerup", () => {
    onedmove = false
    fourdmove = false
    fjoy.style.transition = ".1s"
    fjoy.style.left = "0px"
    fjoy.style.top = "0px"
})
