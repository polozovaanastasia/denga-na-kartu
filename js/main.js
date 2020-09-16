'use strict';

(function () {
    var body = document.body;
    var popup = document.querySelector('.popup');
    var popupClose = popup.querySelector('.popup__close');
    var aboutFaqWrapper = document.querySelector('.about-faq__wrapper');

    var openPopup = function(event) {
        window.utils.showElement(popup);
    };

    var closePopup = function(event) {
        window.utils.hideElement(popup);
    };

    var popupCloseClickHandler = function(event) {
        if (event.type === 'click' || event.keyCode === 27) {
            var visibleElement = popup.querySelector('.visible');
            visibleElement.classList.remove('visible');
            body.classList.remove('popup-opened');
            closePopup();
          };
    };
    var faqItemClickHandler = function(event) {
        if(event.target.id != '') {
            try {
                body.classList.add('popup-opened');
                var currentElementId = event.target.id
                var currentElement = document.querySelector('.'+ currentElementId)
    
                currentElement.classList.add('visible')
                openPopup(evt);
    
            } catch (event) {
            }
        }
    };
    var buttonNextClickHandler = function(event) {
        if(event.target.classList.contains('button_next-step')) {
            var rangeOutputInnerText = document.querySelector('.range-output').innerText;
            
            localStorage.setItem('loanValue', rangeOutputInnerText)
            document.location = 'contacts.html';
        }
        
    };
    document.addEventListener('click', buttonNextClickHandler);
    popupClose.addEventListener('click', popupCloseClickHandler);
    document.addEventListener('keydown', popupCloseClickHandler);
    aboutFaqWrapper.addEventListener('click', faqItemClickHandler);

    document.getElementById('loan-issued-time').innerText = window.utils.getLoanIssuedTime();
})(); 