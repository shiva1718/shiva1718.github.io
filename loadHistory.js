
function addButtonListeners() {
    for (let elementsByClassNameElement of document.getElementsByClassName("delete-button")) {
        // console.log(elementsByClassNameElement);
        elementsByClassNameElement.addEventListener('click', function (ev) {
            // console.log(ev.target.id);
            let key = `card${ev.target.id.split('-')[2]}`;
            localStorage.removeItem(key);
            let elementById = document.getElementById(key);
            // console.log(elementById);
            elementById.remove();
            // loadStorage();
        });
    }
}
async function loadStorage() {
    // console.log("loading");
    let divTag = document.getElementById("history-container");
    let htmlContent = '';
    // let added = false;
    for (let key in localStorage) {
        if (key.startsWith('card') && !document.getElementById(key)) {
            let dataCard = JSON.parse(localStorage.getItem(key));
            // added = true;
            // console.log(key);
            // console.log(dataCard);
            // console.log(divTag);
            // const deleteButton = document.createElement("button");
            // deleteButton.className = "delete-button";
            const items = ["First Name", "Last name", "Email", "Phone", "Company", "Address"];
            const classes = ['card-first-name', 'card-last-name', 'card-email', 'card-phone', 'card-company', 'card-address'];
            // const values = []
            // const pElements = []
            // divTag.innerHTML += `<div class="submit-history-card">`;
            let inner = '';

            function construct() {
                for (let i = 0; i < items.length; i++) {
                    inner += `<p><span class="input-label">${items[i]}</span><br><span class="${classes[i]} input-text">${dataCard[items[i]]}</span></p>`;
                }
            }

            await construct();
            let id = `card${dataCard["card no."]}`;
            htmlContent += `<div id="${id}" class=submit-history-card>${inner}<button id="history-delete-${dataCard["card no."]}" class="delete-button">Delete</button></div>`;
        }
    }

    divTag.innerHTML = htmlContent + divTag.innerHTML;
    addButtonListeners();
    // if (added) {
    // }
    for (let elementsByClassNameElement of document.getElementsByClassName("delete-button")) {
        let key = `card${elementsByClassNameElement.id.split('-')[2]}`;
        // console.log(key);
        if (!localStorage.getItem(key)) {
            document.getElementById(key).remove();
        }

    }
}

window.onload = function () {

    // setInterval(loadStorage, 10);
    loadStorage().then(r => window.addEventListener('storage', loadStorage));
    // window.addEventListener('storage', loadStorage);

};