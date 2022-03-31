const createElement = function(elName, className, textContent) {
    const createdElement = document.createElement(elName);
    createdElement.className = className;

    if (textContent) {
        createdElement.textContent = textContent;
    }

    return createdElement
}


const productWrapper = document.querySelector(".wrapper");
const productList = createElement("ul", "row list-unstyled g-3");


for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const item = createElement("li", "col-4");
    item.id = product.id;

    const wrapper = createElement("div", "card")

    const productImg = createElement("img", "card-img-top");
    productImg.src = product.img;


    const cardText = createElement("div", "card-body");


    const productTitle = createElement("h3", "card-title", product.title);

    const x = product.price / 4;

    const productPrice = createElement("p", "card-text fw-bold");
    const productMark = createElement("mark", "", x);
    productPrice.append(productMark);

    const productPrice1 = createElement("p", "card-text", product.price);

    const productModel = createElement("p", "badge bg-success", product.model);

    const productDate = createElement("p", "card-text", product.addedDate);

    const benifitsList = createElement("ul", "d-flex flex-wrap list-unstyled");

    //for (let j = 0; j < product.benefits.length; j++) 

    productList.append(item);
    item.append(wrapper);
    wrapper.append(productImg);
    wrapper.append(cardText);
    cardText.append(productTitle);
    cardText.append(productPrice);
    cardText.append(productPrice1);


}
productWrapper.append(productList);