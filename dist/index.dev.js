"use strict";

require("./styles/styles.scss");

require("./styles/media.scss");

// Import styles
// Variables for work
var allFullItems = document.querySelectorAll('.full-item'),
    allItems = document.querySelectorAll('.item'),
    headerTitle = document.querySelectorAll('.header-title'),
    additionalInfo = document.querySelectorAll('.additional-info'),
    array = ['Печень утки разварная с артишоками.', 'Головы щучьи с чесноком да свежайшая сёмгушка.', 'Филе из цыплят с трюфелями в бульоне.'];

var _loop = function _loop(i) {
  allFullItems[i].addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]'),
        linkElems = document.querySelectorAll('a'),
        target = event.target;

    if (checkboxes[i].checked || target === linkElems[i]) {
      if (allFullItems[i].classList.contains('disabled')) {
        event.preventDefault();
      } else {
        allFullItems[i].classList.toggle('selected');
      }

      ;
    }

    ;
  }); // Listeners for hover actions

  allItems[i].addEventListener('mouseleave', function (event) {
    var target = event.target;

    if (target === allItems[i]) {
      if (allFullItems[i].classList.contains('disabled')) {
        event.preventDefault();
      } else if (allFullItems[i].classList.contains('selected')) {
        allFullItems[i].classList.add('selected-hover');
        headerTitle[i].textContent = 'Котэ не одобряет?';
        additionalInfo[i].textContent = array[i];
      } else {
        allFullItems[i].classList.add('hover-default');
      }

      ;
    }

    ;
  });
  allItems[i].addEventListener('mouseenter', function (event) {
    var target = event.target;

    if (target === allItems[i] && allFullItems[i].classList.contains('hover-default')) {
      allFullItems[i].classList.remove('hover-default');
    } else if (target === allItems[i] && allFullItems[i].classList.contains('selected-hover')) {
      allFullItems[i].classList.remove('selected-hover');
      headerTitle[i].textContent = 'Сказочное заморское яство';
      additionalInfo[i].innerHTML = "\u0427\u0435\u0433\u043E \u0441\u0438\u0434\u0438\u0448\u044C? \u041F\u043E\u0440\u0430\u0434\u0443\u0439 \u043A\u043E\u0442\u044D, <label for=\"choice-food".concat(i, "\"><a href=\"#\">\u043A\u0443\u043F\u0438.</a></label>");
    }
  });
};

for (var i = 0; i < allFullItems.length; i++) {
  _loop(i);
}

;