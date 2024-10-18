const Nucleasbtn = document.getElementById("NucleasBtn");
const popUpWN = document.getElementsByClassName("pop-upNB");
const MitochonBtn = document.querySelector("#MitochondriaBtn");
const popUpWM = document.getElementsByClassName("pop-upMB");
const ChloroBtn = document.querySelector("#ChloroplastBtn");
const popUpWC = document.querySelector(".pop-upCB")
const VacuoleBtn = document.querySelector("#VacuoleBtn");
const popUpWV = document.querySelector(".pop-upVB");
const CytosolBtn = document.querySelector("#CytosolBtn");
const popUpWCY = document.querySelector(".pop-upCYB");
const CellWallBtn = document.querySelector("#CellWallBtn");
const popUpWCW = document.querySelector(".pop-upCWB");
const CellMemBtn = document.querySelector("#CellMembraneBtn");
const popUpWCM = document.querySelector(".pop-upCMB");
const tl = gsap.timeline({default:{duration: 0.75, ease: "power1.out"}});

function popUpW(btn, PPw) {
    
    let vsbl;

    btn.addEventListener("click", function() {
        if(vsbl) {
            tl.fromTo(PPw, {opacity: 0}, {opacity: 1});
            vsbl = false;
        }
        else {
            tl.fromTo(PPw, {opacity: 1}, {opacity: 0});
            vsbl = true;
        }
    })
}

popUpW(Nucleasbtn, popUpWN);
popUpW(MitochonBtn, popUpWM);
popUpW(ChloroBtn, popUpWC);
popUpW(CytosolBtn, popUpWCY);
popUpW(VacuoleBtn, popUpWV);
popUpW(CellMemBtn, popUpWCM)