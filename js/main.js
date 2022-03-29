const cretedElement = function(elName, className, textContant) {
    const element = document.createElement(elName);
    element.className = className;
    if (textContant) {
        element.textContant = textContant
    }
    return cretedElement;
}