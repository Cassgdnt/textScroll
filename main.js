function scrollAppear(){
    var txt1Home=document.querySelector('.txt1Home');
    var txt2Home=document.querySelector('.txt2Home');
    var txt1Position=txt1Home.getBoundingClientRect().top;
    var txt2Position=txt2Home.getBoundingClientRect().top;
    var screenPosition= window.innerHeight / 1.3;
    console.log(txt1Position);

    if(txt1Position < screenPosition && txt2Position < screenPosition){
        txt1Home.classList.add('text-appear');
        txt2Home.classList.add('text-appear');
    }
}
window.addEventListener('scroll', scrollAppear);
