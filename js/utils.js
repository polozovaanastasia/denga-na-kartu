'use strict';

(function () {
    window.utils = {
        showElement: function (element) {
            debugger
            element.classList.add('visible');
        },
        hideElement: function (element) {
            element.classList.remove('visible');
        },
        getLoanIssuedTime: function () {
            var dateNow = new Date(new Date().getTime() + 900000);
            var getFullMinutes = function() {
                if(dateNow.getMinutes() < 10) {
                    return '0' + dateNow.getMinutes() 

                }
                return dateNow.getMinutes()
            };
            var result = dateNow.getHours() +':' + getFullMinutes();

            return result
        }
    }
})();