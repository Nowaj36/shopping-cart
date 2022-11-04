function increment(quantity) {
    let count = document.getElementById(quantity);
    count.value++;
    let items = document.getElementById(quantity).value;
    let total = parseInt(items) * 1219;
    document.getElementById('current-prise').innerText = total;
 }
 function decrement (quantity){
    let count = document.getElementById(quantity);
    count.value--;
    let items = document.getElementById(quantity).value;
    let totalPhone = parseInt(items) * 1219;
    document.getElementById('current-prise').innerText = totalPhone;
 }
 document.getElementById('plus-btn').addEventListener('click', function(){
    increment('phone-quantity');
    totalPrise('subtotal');
    tax('tax');
    total();
 })
 document.getElementById('minus-btn').addEventListener('click', function(){
    decrement('phone-quantity');
    totalPrise('subtotal');
    tax('tax');
    total();
 })
 function incrementCase(quantity) {
    let count = document.getElementById(quantity);
    count.value++;
    let items = document.getElementById(quantity).value;
    let totalCase = parseInt(items) * 59;
    document.getElementById('case-prise').innerText = totalCase;
 }
 function decrementCase (quantity){
    let count = document.getElementById(quantity);
    count.value--;
    let items = document.getElementById(quantity).value;
    let totalCase = parseInt(items) * 59;
    document.getElementById('case-prise').innerText = totalCase;
 }
 document.getElementById('plus-btn2').addEventListener('click', function(){
    incrementCase('case-item');
    totalPrise('subtotal');
    tax('tax');
    total();
 })
 document.getElementById('minus-btn2').addEventListener('click', function(){
    decrementCase('case-item');
    totalPrise('subtotal');
    tax('tax');
    total();
 })
 function totalPrise(sub) {
    let totalPhone = document.getElementById('current-prise').innerText;
    let totalCase = document.getElementById('case-prise').innerText;
    let subtotal = document.getElementById(sub).innerHTML;
    let subtotalPrise = parseInt(totalPhone) + parseInt(totalCase);
    document.getElementById(sub).innerHTML = subtotalPrise;
 }
 function tax(tax){
    let subtotalPrise =  document.getElementById('subtotal').innerHTML;
    let subtotalTax = subtotalPrise * 0.05;
    subtotalTax = Math.round(subtotalTax);
    document.getElementById(tax).innerHTML = subtotalTax;
 }
 function total(){
    let subtotal = document.getElementById('subtotal').innerHTML;
    let subtotalTax = document.getElementById('tax').innerHTML;
    let total = parseInt(subtotal) + parseInt(subtotalTax);
    document.getElementById('total').innerHTML = total;
 }
 function bubbleItem(bubble, product){
    const remove = document.getElementById(bubble);
 remove.addEventListener('click', function (){
    const area = document.getElementById(product);
    area.style.display = 'none';
 })
 }
 bubbleItem('remove', 'phone')
 bubbleItem('remove2', 'case')