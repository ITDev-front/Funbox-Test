// Import styles

import './styles/styles.scss';
import './styles/media.scss';

// Variables for work

const allFullItems = document.querySelectorAll('.full-item'),
    allItems = document.querySelectorAll('.item'),
    headerTitle = document.querySelectorAll('.header-title'),
    additionalInfo = document.querySelectorAll('.additional-info'),
    
    array = ['Печень утки разварная с артишоками.',
            'Головы щучьи с чесноком да свежайшая сёмгушка.',
            'Филе из цыплят с трюфелями в бульоне.'];

for (let i = 0; i < allFullItems.length; i++) {
    allFullItems[i].addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]'),
            linkElems = document.querySelectorAll('a'),
            target = event.target;

        if (checkboxes[i].checked || target === linkElems[i]) {
            if (allFullItems[i].classList.contains('disabled')) {
                event.preventDefault();
            } else {
                allFullItems[i].classList.toggle('selected');
            };
        };
    });

    // Listeners for hover actions

    allItems[i].addEventListener('mouseleave', (event) => {
        const target = event.target;

        if (target === allItems[i]) {
            if (allFullItems[i].classList.contains('disabled')) {
                event.preventDefault();
            } else if (allFullItems[i].classList.contains('selected')) {
                allFullItems[i].classList.add('selected-hover');
                headerTitle[i].textContent = 'Котэ не одобряет?';
                additionalInfo[i].textContent = array[i];
            } else {
                allFullItems[i].classList.add('hover-default');
            };
        };
    });

    allItems[i].addEventListener('mouseenter', (event) => {
        const target = event.target;

        if (target === allItems[i] && allFullItems[i].classList.contains('hover-default')) {
            allFullItems[i].classList.remove('hover-default');
        } else if (target === allItems[i] && allFullItems[i].classList.contains('selected-hover')) {
            allFullItems[i].classList.remove('selected-hover');
            headerTitle[i].textContent = 'Сказочное заморское яство';
            additionalInfo[i].innerHTML = `Чего сидишь? Порадуй котэ, <label for="choice-food${i}"><a href="#">купи.</a></label>`;
        }
    })
};