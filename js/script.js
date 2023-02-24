let themeBtn=document.querySelector("#theme-btn");
let bar=document.querySelector("#menu-btn");
let lis=document.querySelector(".navbar");

bar.onclick=()=>{
    lis.classList.toggle("active");
    bar.classList.toggle("fa-times");
}

themeBtn.onclick=()=>{
    if(themeBtn.classList.contains("fa-moon")){
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }else{
        themeBtn.classList.add("fa-moon");
        themeBtn.classList.remove("fa-sun");
    }
    if(themeBtn.classList.contains("fa-sun")){
        document.body.classList.add("active");
    }else{
        document.body.classList.remove("active");
    }
}

window.onscroll=()=>{
    lis.classList.remove("active");
    bar.classList.remove("fa-times");

    let maxHeight=window.document.body.scrollHeight - window.innerHeight;
    let percentage=((window.scrollY)/maxHeight) * 100;
    document.querySelector(".scroll-indicator").style.width=percentage + '%';
}

