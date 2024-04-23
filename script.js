

var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
});
tl.from("#line-part1, .line h2", {
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line-part1 h5")
        var grow = 0
        setInterval(function () {
            if (grow < 100) {
                grow++;
                h5timer.textContent = grow++
            }
            else {
                h5timer.textContent = "100";
            }
        }, 35);
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})

tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.5,
});
tl.from("#page1", {
    delay:0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease:power4
})
tl.to("#loader",{
    display:"none"
})