var onedmove=false
var fourdmove=false
var oy,ox,topv

var ojoy=document.getElementById("ojoy")
var fjoy=document.getElementById("fjoy")

document.addEventListener("mousemove", (ev) => {
    if (onedmove == true) {
        if (ev.clientY - oy + topv > 100) {
            ojoy.style.top = `${100}px`;
        } else if (ev.clientY - oy + topv < -100) {
            ojoy.style.top = `${-100}px`;
        } else {
            ojoy.style.top = `${ev.clientY - oy + topv}px`;
        }

        console.log(ev.clientY - oy);
    } else if (fourdmove == true) {
        if (ev.clientX - ox > 70) {
            fjoy.style.left = `${70}px`;
        } else if (ev.clientX - ox < -70) {
            fjoy.style.left = `${-70}px`;
        } else {
            fjoy.style.left = `${ev.clientX - ox}px`;
        }

        if (ev.clientY - oy > 70) {
            fjoy.style.top = `${70}px`;
        } else if (ev.clientY - oy < -70) {
            fjoy.style.top = `${-70}px`;
        } else {
            fjoy.style.top = `${ev.clientY - oy}px`;
        }
    }
});

// ✅ TOUCH MOVE SUPPORT
document.addEventListener("touchmove", (ev) => {
    if (ev.touches.length === 0) return;
    const touch = ev.touches[0];

    if (onedmove == true) {
        if (touch.clientY - oy + topv > 100) {
            ojoy.style.top = `${100}px`;
        } else if (touch.clientY - oy + topv < -100) {
            ojoy.style.top = `${-100}px`;
        } else {
            ojoy.style.top = `${touch.clientY - oy + topv}px`;
        }

        console.log(touch.clientY - oy);
    } else if (fourdmove == true) {
        if (touch.clientX - ox > 70) {
            fjoy.style.left = `${70}px`;
        } else if (touch.clientX - ox < -70) {
            fjoy.style.left = `${-70}px`;
        } else {
            fjoy.style.left = `${touch.clientX - ox}px`;
        }

        if (touch.clientY - oy > 70) {
            fjoy.style.top = `${70}px`;
        } else if (touch.clientY - oy < -70) {
            fjoy.style.top = `${-70}px`;
        } else {
            fjoy.style.top = `${touch.clientY - oy}px`;
        }
    }

    ev.preventDefault(); // Prevents page scrolling during touch drag
}, { passive: false });

ojoy.addEventListener("mousedown", (ev) => {
    onedmove = true;
    oy = ev.clientY;
    topv = parseInt(window.getComputedStyle(ojoy).top, 10);
});

// ✅ TOUCH START for ojoy
ojoy.addEventListener("touchstart", (ev) => {
    onedmove = true;
    oy = ev.touches[0].clientY;
    topv = parseInt(window.getComputedStyle(ojoy).top, 10);
}, { passive: false });

fjoy.addEventListener("mousedown", (ev) => {
    fourdmove = true;
    ox = ev.clientX;
    oy = ev.clientY;
    fjoy.style.transition = "0s";
});

// ✅ TOUCH START for fjoy
fjoy.addEventListener("touchstart", (ev) => {
    fourdmove = true;
    ox = ev.touches[0].clientX;
    oy = ev.touches[0].clientY;
    fjoy.style.transition = "0s";
}, { passive: false });

document.addEventListener("mouseup", () => {
    onedmove = false;
    fourdmove = false;
    fjoy.style.transition = ".1s";
    fjoy.style.left = "0px";
    fjoy.style.top = "0px";
});

// ✅ TOUCH END
document.addEventListener("touchend", () => {
    onedmove = false;
    fourdmove = false;
    fjoy.style.transition = ".1s";
    fjoy.style.left = "0px";
    fjoy.style.top = "0px";
});
