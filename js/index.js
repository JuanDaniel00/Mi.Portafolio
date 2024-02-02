function stars() {
    let count = 200;
    let divBackground = document.querySelector('.divBackground');
    let i = 0;
    while(i<count){
        let star= document.createElement("i");
        let x= Math.floor(Math.random() * window.innerWidth);
        let y= Math.floor(Math.random() * window.innerHeight - 150);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x +'px';
        star.style.top = y +'px';
        star.style.width = 1+size +'px';
        star.style.height = 1+size +'px';

        star.style.animationDuration = 10 + duration +'s';
        star.style.animationDelay = duration +'s';

        divBackground.appendChild(star);
        i++;
    }
}
stars();

window.addEventListener('load', function(){
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 2000);
});
