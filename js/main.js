const createElement = function(elName, className, textContent) {
    const createdElement = document.createElement(elName);
    createdElement.className = className;

    if (textContent) {
        createdElement.textContent = textContent;
    }

    return createdElement
}

const cardRendr = function(card) {
    const item = createElement("li", "col-4");
    item.id = card.id;

    const wrapper = createElement("div", "card")

    const productImg = createElement("img", "card-img-top");
    productImg.src = card.img;


    const cardText = createElement("div", "card-body");


    const productTitle = createElement("h3", "card-title", card.title);

    const x = 3 * card.price / 4;

    const productPrice = createElement("p", "card-text fw-bold");
    const productMark = createElement("mark", "", x);
    productPrice.append(productMark);

    const productPrice1 = createElement("p", "card-text");
    const productPrice2 = createElement("s", "", card.price);
    productPrice1.append(productPrice2);

    const productModel = createElement("p", "badge bg-success", card.model);

    const productDate = createElement("p", "card-text", card.addedDate);

    const benifitsList = createElement("ul", "d-flex flex-wrap list-unstyled");

    for (let j = 0; j < card.benefits.length; j++) {
        const benifits = card.benefits[j];

        const benifitsItem = createElement("li", "badge bg-primary me-1 mb-1", benifits);

        benifitsList.append(benifitsItem);
    }

    const buttonDiv = createElement("div", "position-absolute top-0 end-0 d-flex");

    const button1 = createElement("button", "btn rounded-0 btn-secondary");
    const button1i = createElement("i", "fa-solid fa-pen");
    button1.append(button1i);
    buttonDiv.append(button1);

    const button2 = createElement("button", "btn rounded-0 btn-danger");
    const button2i = createElement("i", "fa-solid fa-trash");
    button2.append(button2i);
    buttonDiv.append(button2);

    item.append(wrapper);
    wrapper.append(productImg);
    wrapper.append(cardText);
    cardText.append(productTitle);
    cardText.append(productPrice);
    cardText.append(productPrice1);
    cardText.append(productModel);
    cardText.append(productDate);
    cardText.append(benifitsList);
    cardText.append(buttonDiv);

    return item
}

const newSelect = document.querySelector("#product-manufacturers");
for (let k = 0; k < manufacturers.length; k++) {
    const opton = createElement("option", "o", manufacturers[k].name);
    opton.id = manufacturers[k].id;

    newSelect.append(opton);
}


const formF = document.querySelector("#form-body");
formF.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const newProductTitle = document.querySelector("#product-title");
    const newPrince = document.querySelector("#price");
    const newSelect = document.querySelector("#product-manufacturers");

    const newProductTitleValue = newProductTitle.value;
    const newPrinceValue = Number(newPrince.value);
    const newSelectValue = newSelect.value;

    if (newProductTitleValue.trim() && newSelectValue && (newPrinceValue > 0)) {
        const productss = {
            id: Math.floor(Math.random() * 1000),
            title: newProductTitleValue,
            img: "https://picsum.photos/300/200",
            price: newPrinceValue,
            model: newSelectValue,
            addedDate: new Date().toISOString()
        }
        products.push(productss);
        formF.reset();
    }

});

const productWrapper = document.querySelector(".wrapper");
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const newItem = cardRendr(product);
    productWrapper.append(newItem);
}