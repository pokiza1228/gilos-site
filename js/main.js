let cretElement = function(elName, className, textContant, id, src) {
    const element = document.createElement(elName);

    if (className) {
        element.className = className;
    }

    if (id) {
        element.id = id;
    }

    if (textContant) {
        element.textContant = textContant
    }

    if (src) {
        element.src = src;
    }

    return cretElement;
}
const productWrapper = document.querySelector(".wrapper");
const productList = cretElement("ul", "product");
productWrapper.append(productList);

for (let i = 0; i <= products.length; i++) {
    const product = products[i];

    const item = cretElement("li", "product__item", product.title, product.id);

    const productImg = document.createElement("img");
    productImg.src = product.img;


    item.append(productImg);

    productList.append(item);


}