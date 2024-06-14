document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.querySelector('footer a');
    
    resumeLink.addEventListener('mouseover', function() {
        const starCount = 5;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            document.body.appendChild(star);
            
            const x = resumeLink.getBoundingClientRect().left + (Math.random() * resumeLink.clientWidth);
            const y = resumeLink.getBoundingClientRect().top + (Math.random() * resumeLink.clientHeight);
            
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            
            setTimeout(() => {
                star.remove();
            }, 1000);
        }
    });
});
