var validate = function(e) {
    var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
    var regEx;
    var removeSpan;
    var par;
    var check = false;
    var val;
    var errArr = [];

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {

            if (fields[i].nextElementSibling.classList.contains('error')) {
                removeSpan = fields[i].nextElementSibling;
                par = fields[i].parentNode;
                par.removeChild(removeSpan);
                fields[i].nextElementSibling.innerHTML = fields[i].placeholder + " is required";
                fields[i].style.boxShadow = "0 0 2px 1px #96577a";
                check = false;
                errArr.push(fields[i]);
            }
            fields[i].nextElementSibling.innerHTML = fields[i].placeholder + " is required";
            fields[i].style.boxShadow = "0 0 2px 1px #96577a";
            check = false;
            errArr.push(fields[i]);
        } else {

            // check if message and name values contain valid characters.
            if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
                val = isValidChar(fields[i]);
                if (val === false) {
                    fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME?!";
                    fields[i].style.boxShadow = "0 0 2px 1px #96577a";
                    check = false;
                    errArr.push(fields[i]);
                } else {
                    fields[i].nextElementSibling.innerHTML = "";
                    fields[i].style.boxShadow = "none";
                    check = true;
                }
            }

            if (fields[i].id === 'phone') {
                val = isValidPhone(fields[i]);
                if (val === false) {
                    fields[i].nextElementSibling.innerHTML = "Your phone number is not valid";
                    fields[i].style.boxShadow = "0 0 2px 1px #96577a";
                    check = false;
                    errArr.push(fields[i]);
                } else {
                    fields[i].nextElementSibling.innerHTML = "";
                    fields[i].style.boxShadow = "none";
                    check = true;
                }
            }

            if (fields[i].id === 'email') {
                val = isValidEmail(fields[i]);
                if (val === false) {
                    fields[i].nextElementSibling.innerHTML = "Your email address is not valid";
                    fields[i].style.boxShadow = "0 0 2px 1px #96577a";
                    check = false;
                    errArr.push(fields[i]);
                } else {
                    fields[i].nextElementSibling.innerHTML = "";
                    fields[i].style.boxShadow = "none";
                    check = true;
                }
            }
        }
    }

    // if(check === false) {
    //     var count = 0;
    //     var toErr = setInterval(function() {
    //         var e = errArr[0].offsetTop + -25;
    //         var pos = Math.abs(e);
    //         if(count < pos) {
    //             count ++;
    //             window.scrollTo(0, count);
    //         } else {
    //             clearInterval(toErr);
    //         }
    //     }, 1);
    // }

    if (check) {
        showPopup()
        return false;
    } else {
        return check
    }

    // Helper functions.
    function isValidEmail(e) {
        regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = e.value;
        if (!regEx.test(email)) {
            return false;
        }
    }

    function isValidChar(e) {
        regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
        var value = e.value;
        if (!regEx.test(value)) {
            return false;
        }
    }

    function isValidPhone(e) {
        regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
        var value = e.value;
        if (!regEx.test(value)) {
            return false;
        }
    }
};


// POPUP

let popupContainer = document.getElementsByClassName("popup-container")[0];

// let triggerBtn = document.getElementsByClassName("submit")[0];



function showPopup() {
    popupContainer.style.visibility = "visible";
    popupContainer.style.opacity = "1";
}

function hidePopup() {
    popupContainer.style.visibility = "hidden";
    popupContainer.style.opacity = "0";
}

// triggerBtn.onclick = (e) => {
//     if (validate()) {
//         showPopup();
//     }
// }


popupContainer.onclick = (e) => {

    if (e.target.attributes.getNamedItem("data-js") && e.target.attributes.getNamedItem("data-js").value == "popup") {
        hidePopup();
    }

};

let cancelBtn = document.getElementsByClassName("btn-cancel")[0];

cancelBtn.onclick = () => {
    hidePopup();
}

let okBtn = document.getElementsByClassName("btn-ok")[0];

okBtn.onclick = () => {
    alert("Done!");
}

// POPUP