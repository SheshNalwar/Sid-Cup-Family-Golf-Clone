var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 200 + "px";
    crsrBlur.style.top = dets.y - 200 + "px";
})

var h4all = document.querySelectorAll("#navbar h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95c11e"
        crsr.style.backgroundColor = " #95c11e"
    })
})


var buttonall = document.querySelectorAll("button")
buttonall.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95c11e"
        crsr.style.backgroundColor = " #95c11e"
    })
})




gsap.to("#navbar", {
    backgroundColor: "#000",
    height: "105px",
    duration: 0.5,
    scrollTrigger: {
        trigger:"#navbar",
        scroller:"body",
        // markers: true,
        start : "top -10%",
        end: "top -11",
        scrub : 2
    }
})

gsap.to("#main", {
    backgroundColor :"#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub : 3
    }
})

gsap.from(".about-us img, .about-text", {
    scale:0,
    opacity: 0,
    duration:0.7,
    scrollTrigger: {
        trigger: ".about-text",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        // end: "top 70%",
        // scrub: 2
    }
})


// gsap.from(".card", {
//     y:150,
//     opacity: 0,
//     duration:0.3,
//     scrollTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 50%",
//         scrub: 1
//     }
// })


gsap.from(".page3 p", {
    opacity:0,
    duration:1.5,
    scrollTrigger: {
        trigger: ".page3 p",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".food-drink .food-drink-img",{
    scale:0.5,
    duration:1,
    scrollTrigger: {
        trigger: ".food-drink ",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        // end: "top 65%",
        // scrub: 4
    }
})

gsap.from(".food-drink .food-info",{
    x:100,
    duration:1,
    scrollTrigger: {
        trigger: ".food-drink ",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        // end: "top 65%",
        // scrub: 4
    }
})


gsap.from("#colon1", {
    y:-80,
    x:-80,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 4
    }
})


gsap.from("#colon2", {
    y:80,
    x:80,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 65%",
        scrub: 4
    }
})

gsap.from(".page4 h1", {
    y:50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 65%",
        scrub: 2
    }
})