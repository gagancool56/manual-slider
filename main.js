var slideIndex,slides;
function slider(){
    slides=document.getElementsByClassName("imgContainer");
    slideIndex = 0;
    slides[slideIndex].style.opacity=1;
}
slider();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i,current,next,forNext,forCurrent;
    if(n>slideIndex) {
        if(n >= slides.length)
        {
            n=0;
        }
        forCurrent="moveLeftCurrentSlide";
        forNext="moveLeftNextSlide";
     }
    else if(n<slideIndex){
        if(n<0)
        {
            n=slides.length-1;
        }
        forCurrent="moveRightCurrentSlide";
        forNext="moveRightPrevSlide";
    }
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className ="imgContainer";
            slides[i].style.opacity=0;
        }
        current.classList.add(forCurrent);
        next.classList.add(forNext);
        slideIndex=n;
}