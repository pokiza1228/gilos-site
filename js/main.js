//element yashash funksiyasi 
const createElement = function(elName, className, textContent) {
    const createdElement = document.createElement(elName);
    createdElement.className = className;

    if (textContent) {
        createdElement.textContent = textContent;
    }

    return createdElement
}

//item yasash funksiyasi
const cardRendr = function(card) {
    //tesktruzatsiya
    const { id, title, img, price, model, addedDate, benefits } = card;
    const item = createElement("li", "col-4");
    item.id = id;

    const wrapper = createElement("div", "card")

    const productImg = createElement("img", "card-img-top");
    productImg.src = img;


    const cardText = createElement("div", "card-body");


    const productTitle = createElement("h3", "card-title", title);

    const x = 3 * price / 4;

    const productPrice = createElement("p", "card-text fw-bold");
    const productMark = createElement("mark", "", x);
    productPrice.append(productMark);

    const productPrice1 = createElement("p", "card-text");
    const productPrice2 = createElement("s", "", price);
    productPrice1.append(productPrice2);

    const productModel = createElement("p", "badge bg-success", model);

    const productDate = createElement("p", "card-text", addedDate);

    const benifitsList = createElement("ul", "d-flex flex-wrap list-unstyled");

    for (let j = 0; j < benefits.length; j++) {
        const benifits = benefits[j];

        const benifitsItem = createElement("li", "badge bg-primary me-1 mb-1", benifits);

        benifitsList.append(benifitsItem);
    }

    const buttonDiv = createElement("div", "position-absolute top-0 end-0 d-flex");

    const button1 = createElement("button", "btn rounded-0 btn-secondary");
    const button1i = createElement("i", "fa-solid fa-pen");
    button1i.style.pointerEvents = "none";
    button1.setAttribute("data-id", id);
    button1.setAttribute("data-bs-toggle", "modal");
    button1.setAttribute("data-bs-target", "#edit-product-modal");
    button1.append(button1i);
    buttonDiv.append(button1);

    const button2 = createElement("button", "btn rounded-0 btn-danger");
    const button2i = createElement("i", "fa-solid fa-trash");
    button2i.style.pointerEvents = "none";
    button2.setAttribute("data-id", id);
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

//productni chiqarish funksiyasi
const renderproduc = function(productArray = products) {
    productWrapper.innerHTML = "";

    for (let i = 0; i < productArray.length; i++) {
        const product = productArray[i];
        const newItem = cardRendr(product);
        productWrapper.append(newItem);
    }
}

//productni chiqarish
const productWrapper = document.querySelector(".wrapper");
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const newItem = cardRendr(product);
    productWrapper.append(newItem);
}

//add manufactior
const formManufactor = document.querySelector("#manufacturer");
const newSelect = document.querySelector("#product-manufacturers");
for (let k = 0; k < manufacturers.length; k++) {
    const opton = createElement("option", "", manufacturers[k].name);
    opton.id = manufacturers[k].id;

    newSelect.append(opton);
    formManufactor.append(opton);
}

//add benifits
const benef = document.querySelector("#benefits");
let benefArray = [];
benef.addEventListener("input", function() {
    const benefVaue = benef.value;

    const benefSplitet = benefVaue.split(";");

    if (benefSplitet.length == 2) {
        benefArray.push(benefSplitet[0]);

        benef.value = "";
        const benefWrapper = document.querySelector(".benifits-wrapper");
        benefWrapper.textContent = "";
        for (let a = 0; a < benefArray.length; a++) {
            const benefItem = createElement("li", "me-1 mb-1");
            const benefBtn = createElement("button", "btn btn-sm badge rounded-pill btn-danger", benefArray[a]);
            benefWrapper.append(benefItem);
            benefItem.append(benefBtn);
        }
    }
});

//add
const formF = document.querySelector("#form-body");
formF.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const newProductTitle = document.querySelector("#product-title");
    const newPrince = document.querySelector("#price");
    const newSelect = document.querySelector("#product-manufacturers");

    const newProductTitleValue = newProductTitle.value;
    const newPrinceValue = Number(newPrince.value);
    const newSelectValue = newSelect.value;

    if (newProductTitleValue.trim() && newSelectValue && (newPrinceValue > 0) && benefArray) {
        const productss = {
            id: Math.floor(Math.random() * 1000),
            title: newProductTitleValue,
            img: "https://picsum.photos/300/200",
            price: newPrinceValue,
            model: newSelectValue,
            addedDate: new Date().toISOString(),
            benefits: benefArray
        }
        products.push(productss);
        formF.reset();
        const benefWrapper = document.querySelector(".benifits-wrapper");
        benefWrapper.innerHTML = "";
        const newItem = cardRendr(productss);
        productWrapper.append(newItem);
        benefArray = [];
    }
});

//edit delet codes
const newProductTitle = document.querySelector("#product-title-edit");
const newPrince = document.querySelector("#price-edit");

productWrapper.addEventListener("click", function(evt) {
    //delet
    if (evt.target.matches(".btn-danger")) {
        const clickedItemId = +evt.target.dataset.id;
        const clickedItemIndex = products.findIndex(function(card) {
            return card.id === clickedItemId;
        });
        console.log(clickedItemIndex);
        products.splice(clickedItemIndex, 1);

        renderproduc();
    }
    //edit
    else if (evt.target.matches(".btn-secondary")) {
        const clickedId = +evt.target.dataset.id;
        const clicked = products.find(function(card) {
            return card.id === clickedId;
        });
        console.log(clicked);
        newProductTitle.value = clicked.title;
        newPrince.value = clicked.price;
        newSelect.value = clicked.model;

        editForm.setAttribute("data-editingid", clicked.id);
    }

});



//edit benifits
const benefEdit = document.querySelector("#benefits-edit");
let benefArrayEdit = [];
benefEdit.addEventListener("input", function() {
    const benefVaue = benefEdit.value;

    const benefSplitet = benefVaue.split(";");

    if (benefSplitet.length == 2) {
        benefArray.push(benefSplitet[0]);

        benefEdit.value = "";
        const benefWrapper = document.querySelector(".benifits-wrapper-edit");
        benefWrapper.textContent = "";
        for (let a = 0; a < benefArray.length; a++) {
            const benefItem = createElement("li", "me-1 mb-1");
            const benefBtn = createElement("button", "btn btn-sm badge rounded-pill btn-danger", benefArray[a]);
            benefWrapper.append(benefItem);
            benefItem.append(benefBtn);
        }
    }
});

// edit manufactior
const newSelectEdit = document.querySelector(".edit-select");
for (let k = 0; k < manufacturers.length; k++) {
    const opton = createElement("option", "", manufacturers[k].name);
    opton.id = manufacturers[k].id;

    newSelectEdit.append(opton);

}

//edit form
const editForm = document.querySelector("#form-body-edit")
editForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const editingId = +evt.target.dataset.editingid;

    const newProductTitleValue = newProductTitle.value;
    const newPrinceValue = Number(newPrince.value);
    const newSelectValue = newSelect.value;

    if (newProductTitleValue.trim() && newSelectValue && (newPrinceValue > 0) && benefArray) {
        const productss = {
            id: editingId,
            title: newProductTitleValue,
            img: "https://picsum.photos/300/200",
            price: newPrinceValue,
            model: newSelectValue,
            addedDate: new Date().toISOString(),
            benefits: benefArray
        }



        const editingItemIndex = products.findIndex(function(product) {
            return product.id === editingId
        })

        console.log(editingItemIndex)
        products.splice(editingItemIndex, 1, productss);

        formF.reset();
        const benefWrapper = document.querySelector(".benifits-wrapper");
        benefWrapper.innerHTML = "";
        renderproduc();
    }
});


//filter
const filterForm = document.querySelector(".form-filter");
filterForm.addEventListener("submit", function(evt) {
    evt.preventDefault;

    const elements = evt.target.elements;

    const priceToValue = Number(elements.to.value);
    const priceMarkValue = Number(elements.from.value);
    const manufactorValue = formManufactor.value;
    const filterProducts = products.filter(function(product) {
        return product.price * 3 / 4 <= priceToValue;
    }).filter(function(product) {
        return product.price * 3 / 4 >= priceMarkValue;
    }).filter(function(product) {
        return product.model == manufactorValue;
    })
    console.log(filterProducts);
    renderproduc(filterProducts);

})