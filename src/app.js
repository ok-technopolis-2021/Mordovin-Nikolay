document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementsByClassName("themeSwitchButton")[0].addEventListener('click', () => {
        if(document.body.classList.contains("body_light")){
            document.getElementsByClassName("main")[0].classList.replace("main_light","main_dark");
            document.getElementsByClassName("main-left-info__download")[0].classList.replace("main-left-info__download_light","main-left-info__download_dark");
            document.getElementsByClassName("main-right")[0].classList.replace("main-right_light","main-right_dark");
            document.body.classList.replace("body_light","body_dark");
        }else{
            document.getElementsByClassName("main")[0].classList.replace("main_dark","main_light");
            document.getElementsByClassName("main-left-info__download")[0].classList.replace("main-left-info__download_dark","main-left-info__download_light");
            document.getElementsByClassName("main-right")[0].classList.replace("main-right_dark","main-right_light");
            document.body.classList.replace("body_dark","body_light");
        }
    });
});