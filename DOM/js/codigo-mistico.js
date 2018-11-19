function ff_Inscripcion_Congreso_2019_02_init()
{

    var newRecaptcha = document.querySelector('#newrecaptcha');
    var submitButton = document.querySelector('#submitButton');

    function checkForm() {
        var registerForm = {
            name: document.querySelector('[name="ff_nm_Nombre[]"]'),
            lastname: document.querySelector('[name="ff_nm_Apellido[]"]'),
            zipcode: document.querySelector('[name="ff_nm_CP[]"]'),
            city: document.querySelector('[name="ff_nm_Ciudad[]"]'),
            state: document.querySelector('[name="ff_nm_Provincia[]"]'),
            country: document.querySelector('[name="ff_nm_Pais[]"]'),
            phone: document.querySelector('[name="ff_nm_Telefono[]"]'),
            cellphone: document.querySelector('[name="ff_nm_Celular[]"]'),
            email: document.querySelector('[name="ff_nm_Email[]"]'),
            career: document.querySelector('[name="ff_nm_Profesion[]"]'),
            inscriptionCategory: document.querySelector('[name="ff_nm_Categoria_Inscripcion[]"]'),
            preCongress: document.querySelector('[name="ff_nm_CursoPreCongreso[]"]'),
            inCongress: [].slice.call(document.querySelectorAll('[name="ff_nm_CursoIntraCongreso[]"]')),
            society: document.querySelector('[name="ff_nm_Sociedad[]"]')
        };
        var valid = true;
        if (registerForm.name.value === '') {
            registerForm.name.style.borderColor = 'red';
        } else {
            registerForm.name.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.name.value === '';

        if (registerForm.lastname.value === '') {
            registerForm.lastname.style.borderColor = 'red';
        } else {
            registerForm.lastname.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.lastname.value === '';

        if (registerForm.zipcode.value === '') {
            registerForm.zipcode.style.borderColor = 'red';
        } else {
            registerForm.zipcode.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.zipcode.value === '';

        if (registerForm.city.value === '') {
            registerForm.city.style.borderColor = 'red';
        } else {
            registerForm.city.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.city.value === '';

        if (registerForm.state.value === '') {
            registerForm.state.style.borderColor = 'red';
        } else {
            registerForm.state.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.state.value === '';

        if (registerForm.country.value === '') {
            registerForm.country.style.borderColor = 'red';
        } else {
            registerForm.country.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.country.value === '';

        if (registerForm.phone.value === '') {
            registerForm.phone.style.borderColor = 'red';
        } else {
            registerForm.phone.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.phone.value === '';

        if (registerForm.cellphone.value === '') {
            registerForm.cellphone.style.borderColor = 'red';
        } else {
            registerForm.cellphone.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.cellphone.value === '';

        var emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (registerForm.email.value === '' || !emailRegEx.test(registerForm.email.value)) {
            registerForm.email.style.borderColor = 'red';
        } else {
            registerForm.email.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.email.value === '' || !emailRegEx.test(registerForm.email.value);

        if (registerForm.career.value === '') {
            registerForm.career.style.borderColor = 'red';
        } else {
            registerForm.career.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.career.value === '';

        if (registerForm.inscriptionCategory.value === '') {
            registerForm.inscriptionCategory.style.borderColor = 'red';
        } else {
            registerForm.inscriptionCategory.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.inscriptionCategory.value === '';

        if (registerForm.preCongress.value === '') {
            registerForm.cellphone.style.borderColor = 'red';
        } else {
            registerForm.cellphone.style.borderColor = 'lightgreen';
        }
        valid = valid && registerForm.preCongress.value === '';

        var recaptchaResponse = grecaptcha.getResponse();

        if (recaptchaResponse === "") {
            newRecaptcha.style.borderColor = 'red';
        } else {
            newRecaptcha.style.borderColor = 'lightgreen';
        }
        valid = valid && recaptchaResponse === null;

        if (!valid) {
            var formData = []
            formData.push({
                key: 'nombre',
                value: registerForm.name.value
            });
            formData.push({
                key: 'apellido',
                value: registerForm.lastname.value
            });
            formData.push({
                key: 'codigoPostal',
                value: registerForm.zipcode.value
            });
            formData.push({
                key: 'ciudad',
                value: registerForm.city.value
            });
            formData.push({
                key: 'provincia',
                value: registerForm.state.value
            });
            formData.push({
                key: 'pais',
                value: registerForm.country.value
            });
            formData.push({
                key: 'telefono',
                value: registerForm.phone.value
            });
            formData.push({
                key: 'celular',
                value: registerForm.cellphone.value
            });
            formData.push({
                key: 'email',
                value: registerForm.email.value
            });
            formData.push({
                key: 'profesion',
                value: registerForm.career.value
            });
            formData.push({
                key: 'categoria',
                value: registerForm.inscriptionCategory.value
            });
            formData.push({
                key: 'preCongreso',
                value: registerForm.preCongress.value
            });
            formData.push({
                key: 'intCongress[]',
                value: registerForm.inCongress[0].value
            });
            formData.push({
                key: 'intCongress[]',
                value: registerForm.inCongress[1].value
            });
            if (registerForm.society.value !== '') {
                formData.push({
                    key: 'sociedad',
                    value: registerForm.society.value
                });
            }
            sendDataToAPI(formData);
        }
    }

    function sendDataToAPI(data) {
        var formData = new FormData();
        data.forEach(function(item) {
            formData.append(item.key, item.value)
        });
        fetch('https://sacipapi.div-it.com.ar/api/inscribir/multiples', {
                body: formData,
                method: 'POST'
            }).then(function(response) {
                if (response.ok) {
                    response.json().then(function(json) {
                        console.log(json);
                        var response = document.querySelector('#response');
                        response.innerText = 'Precio: ' + json.amount + ' ' + json.currency;
                        var payForm = document.querySelector('#payForm');
                        var merchantId = document.querySelector('input[name="merchantId"]');
                        var accountId = document.querySelector('input[name="accountId"]');
                        var description = document.querySelector('input[name="description"]');
                        var referenceCode = document.querySelector('input[name="referenceCode"]');
                        var amount = document.querySelector('input[name="amount"]');
                        var tax = document.querySelector('input[name="tax"]');
                        var taxReturnBase = document.querySelector('input[name="taxReturnBase"]');
                        var currency = document.querySelector('input[name="currency"]');
                        var signature = document.querySelector('input[name="signature"]');
                        var test = document.querySelector('input[name="test"]');
                        var buyerEmail = document.querySelector('input[name="buyerEmail"]');
                        var responseUrl = document.querySelector('input[name="responseUrl"]');
                        var confirmationUrl = document.querySelector('input[name="confirmationUrl"]');

                        merchantId.value = json.merchantId;
                        accountId.value = json.accountId;
                        description.value = json.description;
                        referenceCode.value = json.referenceCode;
                        amount.value = json.amount;
                        tax.value = json.tax;
                        taxReturnBase.value = json.taxReturnBase;
                        currency.value = json.currency;
                        signature.value = json.signature;
                        test.value = "1";
                        buyerEmail.value = json.buyerEmail;
                        responseUrl.value = json.responseUrl;
                        confirmationUrl.value = json.confirmationUrl;
                    });
                } else {
                    response.json().then(function(json) {
                        console.log(json);
                    });
                }
            })
            .catch(function(response) {
                console.log(response.json());
            });
    }

    submitButton.addEventListener('click', function() {
        checkForm();
    });

} // ff_Inscripcion_Congreso_2019_02_init

// -------------- Código viejo debajo --------------

