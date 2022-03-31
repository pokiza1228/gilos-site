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

    const productImg = createElement("img", "product__img");
    productImg.src = product.img;


    const cardText = createElement("div", "card-body");


    const productTitle = createElement("h3", "card-title", product.title);

    const x = product.price / 4;

    const productPrice = createElement("p", "card-text fw-bold");
    const productMark = createElement("mark", "", x);
    productPrice.append(productMark);

    const productModel = createElement("p", "product__model", product.model);

    item.append(productTitle);
    item.append(productImg);
    item.append(productPrice);
    item.append(productModel);
    productList.append(item);



}
productWrapper.append(productList);