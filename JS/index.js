document.addEventListener('DOMContentLoaded', function() {
    const hoverBtns = document.querySelectorAll('.hover-btn');

    hoverBtns.forEach(hoverBtn => {
        hoverBtn.addEventListener('click', () => {
            const animateBtn = hoverBtn.nextElementSibling;
            // animateBtn.style.transform = 'rotate(24deg)';
            this.style.color = 'red'
        });

        hoverBtn.addEventListener('mouseout', () => {
            const animateBtn = hoverBtn.nextElementSibling;
            animateBtn.style.transform = 'rotate(0deg)';
        });
    });
});
