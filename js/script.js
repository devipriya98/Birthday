document.addEventListener('DOMContentLoaded', function() {
   
    function hearts() {
        const container = document.querySelector(".container");
        if (container) {
            const create = document.createElement('div');
            create.classList.add('hearts');
            create.innerHTML = `&#10084;`;
            create.style.left = Math.random() * 100 + 'vw';
            create.style.animationDuration = Math.random() * 2 + 3 + 's';
            container.appendChild(create);
            setTimeout(() => {
                create.remove();
            }, 3000);
        }
    }
    setInterval(hearts, 100);

    const heart = document.querySelector('.heart');
    const envelopeWrapper = document.querySelector('.evvelope-wrapper');
    
    heart.addEventListener('click', () => {
        envelopeWrapper.classList.toggle('flap'); 
    });
});
window.addEventListener('click',()=>{
    document.getElementById("song").play()
});