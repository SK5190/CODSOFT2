function valueset(){
    gsap.set("#div a",{y: "-100%",opacity:0});
        gsap.set("#content .child",{y:"100%"});
        gsap.set("#content svg",{opacity:0});
    }
    
    function reveal(){
        document.querySelectorAll(".reveal")
     .forEach(function(elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
    
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
    
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
     })
    }
    
    function loader(){
    var t1 = gsap.timeline();
       t1.from("#loader .child ",{
        x:100,
        opacity: 0,
        duration:1.1,
        delay:.7,
        // stagger:1,
        ease: Circ.easeInOut
    })
    t1.to("#loader .reveal .parent .child", {
        y: "-100%",
        duration: 1.5,
        opacity:0,
        delay: 0.1,
        ease: Expo.easeInOut
    })
    t1
    .to("#loader", {
        height: 0,
        duration: 1,
        delay:-1,
        ease: Expo.easeInOut
    })
    .to("#red",{
        height: 0,
        duration:3,
        delay:-2,
        ease: Expo.easeInOut,
        onComplete: function(){
       animateContent();
    }
    }) 
    }
    function animateContent(){
        var tl = gsap.timeline();
    tl
    .to("#div a",{
        y:0,
        opacity:1,
        stagger: .15,
        // duration:10,
       ease: Expo.easeInOut,
    })
    .to("#content .parent .child",{
        y:0,
        stagger: .18,
        duration: 2,
       ease: Expo.easeInOut
    })
    .to("#content svg",{
        opacity:1,
    delay:-2})
    .from("#main #content #image img",{
        opacity:0,
        height:40,
        duration:2,
        delay:-3,
        ease: Expo.easeInOut,
    })
    .to("#main #content #image img",{
        opacity:1,
        height:40,
        duration:2,
        delay:-1,
        ease: Expo.easeInOut,
    })
    
    }
    cardHoverEffect();
    locoInitialize();
    reveal();
    valueset();
    loader();
    function locoInitialize(){
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true
        });
    }
    function cardHoverEffect(){
        document.querySelectorAll(".cntr")
        .forEach(function (cntr){
            var showingImage;
            cntr.addEventListener("mousemove",function(dets){
                // document.querySelector("#work").children[dets.target.dataset.index].style.opacity = 1;
                showingImage = dets.target;
                // document.querySelector("#work").children[showingImage.dataset.index].style.transform = `translate(${dets.x}px, ${dets.y}px)` ;
                showingImage.style.filter = "grayscale(1)";
    
                document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
            })
    
            cntr.addEventListener("mouseleave",function(dets){
                // document.querySelector("#work").children[showingImage.dataset.index].style.opacity = 0;
               showingImage.style.filter ="grayscale(0)";
               document.querySelector("#work").style.backgroundColor = "#cdbed6";
            })
        })
    }
    
    
    
    