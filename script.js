document.getElementById('phone-increase').addEventListener('click', function(){
    getProductValue('phone', true);
})
document.getElementById('phone-decrease').addEventListener('click', function(){
    getProductValue('phone',false);
})
document.getElementById('case-increase').addEventListener('click', function(){
    getProductValue('case',true);
})
document.getElementById('case-decrease').addEventListener('click', function(){
    getProductValue('case',false);
})
function getProductValue(product,isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount; 
    let productPrise = 0;
    if(product == 'phone') {
        productPrise = productNewCount * 1219;
    }
    if(product == 'case') {
        productPrise = productNewCount * 59;
    }
    document.getElementById(product + '-prise').innerText = productPrise;
    calculateTotal()
}
function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const totalAmount = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-amount').innerText = totalAmount;
    const tax = Math.round(totalAmount * 0.05);
    document.getElementById('tax').innerText = tax;
    const grandTotal = totalAmount + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}
function getInputValue(product){
    const produntInput = document.getElementById(product + '-count')
    const produntCount = parseInt(produntInput.value);
    return produntCount;
}