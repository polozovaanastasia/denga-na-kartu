'use strict';
(function () {
    window.validates = {
        form: document.querySelector(".main__content_section"),
        inputs: document.querySelectorAll(".form__content_input"),
        checkboxNoLastName: document.querySelector(".checkbox__no-last-name"),
        inputParent: null,
        validateMessage: '',
        errors: null,
        constraints: {
            first_name: {
                presence: true,
            },
            middle_name: {
                presence: true,
            },
            last_name: {
                presence: true,
            },
            phone: {
                presence: true,
            },
            email: {
                presence: true,
                email: true
            }
        },
        checkLastName: function(checkbox, form) {
            var self = this;
            var constraints = this.constraints;

            checkbox.checked ? self.constraints.last_name.presence = false
                             : self.constraints.last_name.presence = true

            self.errors = validate(self.form, constraints)
            self.showErrors(form, self.errors || {})

        },
        inputsValidateOnTheFly: function() {
            var self = this;
            var constraints = this.constraints;

            
            for (var i = 0; i < self.inputs.length; ++i) {
                self.inputs.item(i).addEventListener("change", function() {
                    self.errors = validate(self.form, constraints) || {};
                    self.showErrorsForInput(this, self.errors[this.name]);
                });
            }
        },
        showErrors: function(form, errors) {
            var self = this;

            _.each(form.querySelectorAll('input[name]'), function(input) {
                self.showErrorsForInput(input, errors && errors[input.name]);
            });
        },
        showErrorsForInput: function(input, errors) {
            var self = this;

            self.inputParent = input.parentNode;
            self.validateMessage = self.inputParent.querySelector('.validation-message')
            self.resetError(self.inputParent)
            
            if(errors) {
                self.inputParent.classList.add('has-error');
            }
              
        },
        resetError: function(container) {
            container.classList.remove('has-error');
        },
        formSubmitHandler: function(form, constraints) {
            var self = this;
            var constraints = this.constraints;

            self.errors = validate(self.form, constraints)
            self.showErrors(form, self.errors || {})

            if (!self.errors) {
                self.showSuccess();
            }
        },
        showSuccess: function() {
            alert('success!')
        }
    }
    window.validates.inputsValidateOnTheFly();
    window.validates.form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.validates.formSubmitHandler(window.validates.form);
    });
    window.validates.checkboxNoLastName.addEventListener('change', function() {
        window.validates.checkLastName(window.validates.checkboxNoLastName, window.validates.form);
    });
})();