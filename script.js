let count = document.querySelector(".count");
let btn = document.querySelectorAll(".btn");
let Img = document.querySelectorAll(".Img");
let btnwait = document.querySelectorAll(".btnwait");
let reset = document.querySelector(".reset");
let score = document.querySelectorAll(".score");

let arrscale = ["scale1","scale2"];
let arrimg = ["img1.png","img2.png","img3.png"];
let countmax = 3;
let countarr = 0;
let countbtn1 = 0;
let countbtn2 = 0;
let countimgp1 = 0;
let countimgp2 = 0;
let scoreplay1 = 0;
let scoreplay2 = 0;
let checkscoreplay1 = 0;
let checkscoreplay2 = 0;
let ranimg1;
let ranimg2;
let random1;
let random2;


// click btn play1
btn[0].addEventListener("click",() => { 

    countbtn1 += 1;
    if (countbtn1 >= 1) {
        countbtn1 = 1;
    }

    btnwait[0].style.zIndex = "2";

    ranimg1 = setInterval(() => {
        if (countimgp1 > 2) {
            countimgp1 = 0;
        }
        Img[0].src = arrimg[countimgp1];
        countimgp1++;
    },100);

    random1 = Math.floor(Math.random() * 3) + 0;
    checkscoreplay1 = random1;

    if (countbtn1 + countbtn2 == 2) {
        // script count number
        count.style.visibility = "visible";
        let countnumber = setInterval(() => {
            if (countmax < 0) {
                countmax = 3;
            }
            if (countarr > 1) {
                countarr = 0;
            }
            for (let i = 0 ; i < arrscale.length ; i++) {
                count.classList.remove(arrscale[i]);
            }
            count.innerHTML = countmax;
            count.classList.toggle(arrscale[countarr]);
            countarr += 1;
            countmax -= 1;
        },1000);

        let stop = setTimeout(() => {
            count.style.visibility = "hidden";
            reset.style.visibility = "visible"
            clearInterval(countnumber);
            clearInterval(ranimg1);
            clearInterval(ranimg2);
            Img[0].src = arrimg[random1];
            Img[1].src = arrimg[random2];
            if (checkscoreplay1 == 0 && checkscoreplay2 == 1) {
                scoreplay1 += 0;
                scoreplay2 += 1;
            }
            else if (checkscoreplay1 == 0 && checkscoreplay2 == 2) {
                scoreplay1 += 1;
                scoreplay2 += 0;
            }
            else if (checkscoreplay1 == 1 && checkscoreplay2 == 0) {
                scoreplay1 += 1;
                scoreplay2 += 0;
            }
            else if (checkscoreplay1 == 1 && checkscoreplay2 == 2) {
                scoreplay1 += 0;
                scoreplay2 += 1;
            }
            else if (checkscoreplay1 == 2 && checkscoreplay2 == 0) {
                scoreplay1 += 0;
                scoreplay2 += 1;
            }
            else if (checkscoreplay1 == 2 && checkscoreplay2 == 1) {
                scoreplay1 += 1;
                scoreplay2 += 0;
            }
            score[0].innerHTML = "score : " + scoreplay1;
            score[1].innerHTML = "score : " + scoreplay2;
        },4000);
    }
});

// click btn play2
btn[1].addEventListener("click",() => {

    countbtn2 += 1;
    if (countbtn2 > 1) {
        countbtn2 = 1;
    }

    btnwait[1].style.zIndex = "2";

    ranimg2 = setInterval(() => {
        if (countimgp2 > 2) {
            countimgp2 = 0;
        }
        Img[1].src = arrimg[countimgp2];
        countimgp2++;
    },100);

    random2 = Math.floor(Math.random() * 3) + 0;
    checkscoreplay2 = random2;

    if (countbtn1 + countbtn2 == 2) {
        // script count number
        count.style.visibility = "visible";
        let countnumber = setInterval(() => {
            if (countmax < 0) {
                countmax = 3;
            }
            if (countarr > 1) {
                countarr = 0;
            }
            for (let i = 0 ; i < arrscale.length ; i++) {
                count.classList.remove(arrscale[i]);
            }
            count.innerHTML = countmax;
            count.classList.toggle(arrscale[countarr]);
            countarr += 1;
            countmax -= 1;
        },1000);

        let stop = setTimeout(() => {
            count.style.visibility = "hidden";
            reset.style.visibility = "visible"
            clearInterval(countnumber);
            clearInterval(ranimg1);
            clearInterval(ranimg2);
            Img[0].src = arrimg[random1];
            Img[1].src = arrimg[random2];
            if (checkscoreplay1 == 0 && checkscoreplay2 == 1) {
                scoreplay1 += 0;
                scoreplay2 += 1;
            }
            else if (checkscoreplay1 == 0 && checkscoreplay2 == 2) {
                scoreplay1 += 1;
                scoreplay2 += 0;
            }
            else if (checkscoreplay1 == 1 && checkscoreplay2 == 0) {
                scoreplay1 += 1;
                scoreplay2 += 0;
            }
            else if (checkscoreplay1 == 1 && checkscoreplay2 == 2) {
                scoreplay1 += 0;
                scoreplay2 += 1;
            }
            else if (checkscoreplay1 == 2 && checkscoreplay2 == 0) {
                scoreplay1 += 0;
                scoreplay2 += 1;
            }
            else if (checkscoreplay1 == 2 && checkscoreplay2 == 1) {
                scoreplay1 += 1;
                scoreplay2 += 0;
            }
            score[0].innerHTML = "score : " + scoreplay1;
            score[1].innerHTML = "score : " + scoreplay2;
        },4000);
    }
});

reset.addEventListener("click",() => {
    countmax = 3;
    count.innerHTML = countmax;
    btnwait[0].style.zIndex = "-1";
    btnwait[1].style.zIndex = "-1";
    reset.style.visibility = "hidden";
    countbtn1 = 0;
    countbtn2 = 0;
});