
// Header Section Code

function showMenu () {
    
    let menuBtn = document.querySelector("#menu")
    let navLinks = document.querySelector(".show")
    
    let hIcon = document.querySelector(".h-icon")
    let pIcon = document.querySelector(".p-icon")
    let sIcon = document.querySelector(".s-icon")
    let cIcon = document.querySelector(".c-icon")
    
    let showIcon = function () {
        hIcon.innerHTML = "<i class='ri-home-2-fill'></i>";
        pIcon.innerHTML = "<i class='ri-macbook-line'></i>";
        sIcon.innerHTML = "<i class='ri-code-box-fill'></i>";
        cIcon.innerHTML = "<i class='ri-contacts-fill'></i>";
    }
    
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show")
        showIcon();
    
        if(navLinks.classList.contains("show")){
            menuBtn.className = "ri-menu-4-line"
        }else{
            menuBtn.className = "ri-close-line"
        }
    })
    
}

showMenu();


// Project Section Code 

function Project () {

    let showBasic = document.getElementById("basic");
    let showIntermediate = document.getElementById("intermediate");
    let showAdvanced = document.getElementById("advanced");
    
    let bgBasic = document.getElementById("basic-cards");
    let bgIntermediate = document.getElementById("intermediate-cards");
    let bgAdvanced = document.getElementById("advanced-cards");
    
    showBasic.addEventListener("click", () => {
        bgBasic.style.display = "initial";
        bgIntermediate.style.display = "none";
        bgAdvanced.style.display = "none";
    
        showBasic.style.backgroundColor = "#a6bcfa";
        showBasic.style.color = "#ffffff";
    
        showIntermediate.style.backgroundColor = "transparent";
        showIntermediate.style.color = "#6c92ff";
        showAdvanced.style.backgroundColor = "transparent";
        showAdvanced.style.color = "#6c92ff";
    });
    
    showIntermediate.addEventListener("click", () => {
        bgBasic.style.display = "none";
        bgIntermediate.style.display = "initial";
        bgAdvanced.style.display = "none";
    
        showIntermediate.style.backgroundColor = "#a6bcfa";
        showIntermediate.style.color = "#ffffff";
    
        showBasic.style.backgroundColor = "transparent";
        showBasic.style.color = "#6c92ff";
        showAdvanced.style.backgroundColor = "transparent";
        showAdvanced.style.color = "#6c92ff";
    });
    
    showAdvanced.addEventListener("click", () => {
        bgBasic.style.display = "none";
        bgIntermediate.style.display = "none";
        bgAdvanced.style.display = "initial";
    
        showAdvanced.style.backgroundColor = "#a6bcfa";
        showAdvanced.style.color = "#ffffff";
    
        showBasic.style.backgroundColor = "transparent";
        showBasic.style.color = "#6c92ff";
        showIntermediate.style.backgroundColor = "transparent";
        showIntermediate.style.color = "#6c92ff";
    });

}

Project();


// Contact Section Code 

function clearInput () {
    
    let clearBtn =  document.querySelector(".btn-3");
    let inputs = document.querySelectorAll("input");
    let inputs2 = document.querySelector("#textMessage");
    
    clearBtn.addEventListener("click", () => {
        setTimeout(() => {
            inputs.forEach(input => input.value = "");
            inputs2.value = "";
        }, 500);
    })

}

clearInput();


// Footer Section Code 

function year () {
    
    let showYear = document.getElementById("year");
    
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    showYear.innerText = `${currentYear}`;

}

year();


// Animation Code *GSAP*

function anim () {
    
    let tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
    
        tl.from(".profile", {
            y: -100,
            opacity: 0,
            duration: 1
        })
    
        tl.from(".profile img", {
            y: 250,
            duration: .5,
            opacity: 0
        })
        
        tl.from(".profile-info", {
            scale: 0,
            y: -200,
            duration: 1,
            opacity: 0
        })
    })
    
    tl.from(".social-media", {
        x: -30,
        opacity: 0,
        duration: .5
    })
    
    
    gsap.from(".head1", {
        y:-50,
        opacity: 0,
        duration: 2,
        scrollTrigger:{
            trigger: ".head1",
            scroller: "body",
            end: "top 40%",
            scrub: 2
        }
    })
    gsap.from(".project .box1", {
        x:-200,
        opacity: 0,
        duration: 2,
        scrollTrigger:{
            trigger: ".project .box1",
            scroller: "body",
            end: "top 55%",
            scrub: 2
        }
    })
    gsap.from(".project .box2", {
        x:200,
        opacity: 0,
        duration: 2,
        scrollTrigger:{
            trigger: ".project .box2",
            scroller: "body",
            end: "top 55%",
            scrub: 2
        }
    })
    
    
    
    gsap.from(".head2", {
        y:-50,
        opacity: 0,
        duration: 2,
        scrollTrigger:{
            trigger: ".head2",
            scroller: "body",
            end: "top 40%",
            scrub: 2
        }
    })
    gsap.from(".language", {
        scale: 0,
        opacity: 0,
        stagger: .2,
        duration: 2,
        scrollTrigger:{
            trigger: ".language",
            scroller: "body",
            end: "top 40%",
            scrub: 2
        }
    })
    

    gsap.from(".head3", {
        y:-50,
        opacity: 0,
        duration: 2,
        scrollTrigger:{
            trigger: ".head3",
            scroller: "body",
            end: "top 40%",
            scrub: 2
        }
    })    
    gsap.from(".contact-content", {
        opacity: 0,
        duration: 3,
        scrollTrigger:{
            trigger: ".contact-content",
            scroller: "body",
            start: "top: 80%",
            end: "top 40%",
            scrub: 2
        }
    })
}

anim();