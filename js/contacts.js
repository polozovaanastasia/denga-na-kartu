'use strict';
(function () {
    window.contacts = {
        loanValue: document.querySelector('.loan-value'),

        inputFocusOutHandler: function(event) {
            var input = event.target;
            var inputTrimmedValue = input.value.trim();

            if(input.nextElementSibling.className === 'input-placeholder') {
                var inputPlaceholder = input.nextElementSibling;

                inputTrimmedValue != '' ? inputPlaceholder.style.opacity = 0
                                        : inputPlaceholder.style.opacity = 1;     
            }
        },
        getLoanValue: function() {
            var self = this;
            var getedValue = localStorage.getItem('loanValue');

            self.loanValue.innerHTML = getedValue;
        }
    }
    window.contacts.getLoanValue();
    document.addEventListener('focusout', window.contacts.inputFocusOutHandler);
})();