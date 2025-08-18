//flip cards//

function initFlipCards() {
    let cards = document.querySelectorAll('.flip-card');
    for(let i=0; i<cards.length; i++) {
        cards[i].addEventListener('click', function() {
            this.classList.add('flipped');
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initFlipCards();
    initAccordion();
})

//Accordion section//
function initAccordion() {
    let accordionItems = document.querySelectorAll('.accordion-item');
    for(let i=0; i<accordionItems.length; i++) {
        let item = accordionItems[i];
        let header = item.querySelector('.accordion-header');

        header.addEventListener('click', function() {
            let currentItem = this.parentNode;
            let isActive = currentItem.classList.contains('active');

            for(let j=0; j<accordionItems.length; j++){
                accordionItems[j].classList.remove('active');
            }
            if(!isActive) {
                currentItem.classList.add('active');
            }
            
        });
        
    }
}