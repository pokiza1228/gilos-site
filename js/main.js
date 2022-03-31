const createElement = function(elName, className, textContent) {
    const createdElement = document.createElement(elName);
    createdElement.className = className;

    if (textContent) {
        createdElement.textContent = textContent;
    }

    return createdElement
}


const productWrapper = document.querySelector(".wrapper");
const productList = createElement("ul", "product");


for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const item = createElement("li", "product__item");

    const productTitle = createElement("h2", "product__title", product.title);


    const productImg = document.createElement("img");
    productImg.src = product.img;

    item.append(productTitle);
    item.append(productImg);
    productList.append(item);


}
productWrapper.append(productList);