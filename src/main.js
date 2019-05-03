const storeEl = document.querySelector("#container")

const storeButton = document.querySelector("#save-button").addEventListener("click", function (event) {

    const itemName = document.querySelector("#item-name").value;
    console.log(itemName);
    const storeLocation = document.querySelector("#store-location").value;
    console.log(storeLocation)

    let storeHtml = `I can purchase ${itemName} at ${storeLocation}`

    storeEl.innerHTML += storeHtml;
})


