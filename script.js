
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
