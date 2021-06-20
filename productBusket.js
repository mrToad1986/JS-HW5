'use strict'

/* Задание 5-2; 5-3
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
каталога генерируется JS.
*/
const main = document.querySelector('#main');
var emptyMessage = 'Корзина пуста'
var priceList = [];

function Product(name, price) {
    this.name = name;
    this.price = price
}
priceList.push(new Product('mouse', 14.99));
priceList.push(new Product('keyboard', 26.50));
priceList.push(new Product('usb', 8.99));
priceList.push(new Product('phone', 199));
priceList.push(new Product('notebook', 500));

function countBasketPrice(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += parseFloat(list[i].price);
    }
    return sum;
}


if (priceList.length == 0) {
    main.insertAdjacentHTML('beforeend', `<div class="busket_price">
    ${emptyMessage}
    </div>`);
} else {
    for (const iterator of priceList) {
        main.insertAdjacentHTML('beforeend',
            `<div class="catalog">
        <span>Наименование: ${iterator.name}</span><br> 
        <span>Стоимость: ${iterator.price} $</span><br>
        </div>`);
    }
    const busketPrice = main.insertAdjacentHTML('beforeend',
        `<hr><div class="busket_price">
        В корзине ${priceList.length} позиций  
        на сумму ${countBasketPrice(priceList)} $
        </div>`);
}
