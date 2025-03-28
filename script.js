'use strict';

// Selected Elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('times-btn');
const mobileNav = document.querySelector('.mobile-navigation');
const loaderOverlay = document.querySelector('.loader-overlay');



// Handle mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    loaderOverlay.style.display = 'none';

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.add('show');
        });  
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('show');
        });
    }
})

// FAQ'S collapse/expand function
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const faqCard = header.parentElement;

        if (faqCard.classList.contains('active')) {
            faqCard.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-card').forEach(card => {
                card.classList.remove('active');
            });
            
            faqCard.classList.add('active');
        }
    });
});