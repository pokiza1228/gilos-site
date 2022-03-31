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
    item.id = product.id;
    const productTitle = createElement("h2", "product__title", product.title);


    const productImg = createElement("img", "product__img");
    productImg.src = product.img;


    const productPrice = createElement("p", "product__price", `Price: ${product.price}`);

    const productModel = createElement("p", "product__model", `Model: ${product.model}`);

    item.append(productTitle);
    item.append(productImg);
    item.append(productPrice);
    item.append(productModel);
    productList.append(item);


}
productWrapper.append(productList);