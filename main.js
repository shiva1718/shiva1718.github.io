

window.onload = function () {
    let number = Number(localStorage.getItem("current-number"));
    let eleFirstName = document.getElementById("first-name-input");
    let eleLastName = document.getElementById("last-name-input");
    let eleEmail = document.getElementById("email-input");
    let elePhone = document.getElementById("phone-input");
    let eleCompany = document.getElementById("company-input");
    let eleAddress = document.getElementById("address-input");

    let elements = [eleFirstName, eleLastName, eleEmail, elePhone, eleCompany, eleAddress];
    let items = ["First Name", "Last name", "Email", "Phone", "Company", "Address"];

    // let firstName = localStorage.getItem("first name");
    // eleFirstName.innerHTML = firstName;
    //
    // let lastName = localStorage.getItem("last name");
    // eleLastName.innerHTML = firstName;
    //
    // let email = localStorage.getItem("email");
    // eleEmail.innerHTML = firstName;
    //
    // let phone = localStorage.getItem("phone");
    // elePhone.innerHTML = firstName;
    //
    // let company = localStorage.getItem("company");
    // eleCompany.innerHTML = firstName;
    //
    // let address = localStorage.getItem("address");
    // eleAddress.innerHTML = firstName;
    function retrieveData() {
        // function sleep(ms) {
        //     return new Promise(resolve => setTimeout(resolve, ms));
        // }
        // console.log("retrieving");
        for (let i = 0; i < items.length; i++) {
            // console.log(localStorage.getItem(items[i]));
            elements[i].value = localStorage.getItem(items[i]);
        }
    }

    retrieveData();
    window.addEventListener('storage', retrieveData);


    document.addEventListener("keyup", function (ev) {
        for (let i = 0; i < items.length; i++) {
            localStorage.setItem(items[i], elements[i].value);
            // console.log(elements[i].value);
        }
    });


    document.getElementById("submit-button").addEventListener("click", function (ev) {
        let dataCard = {
            "card no.": `${number}`
        };
        for (let i = 0; i < items.length; i++) {
            dataCard[items[i]] = elements[i].value;
            elements[i].value = '';
            localStorage.removeItem(items[i]);
        }
        // let card = JSON.parse(localStorage.getItem("card0"));
        localStorage.setItem(`card${number++}`, JSON.stringify(dataCard));
        localStorage.setItem("current-number", number.toString());
        console.log("done");
    });
};
