var dateEnd = new Date("2023-02-01 00:00:00"),
  dateNow = new Date(),
  date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function countdown() {
  var dateLeft = date,
    dateTemp = 0;
  dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
  dateLeft -= dateTemp * 24 * 60 * 60;
  if (dateTemp < 10) dateTemp = "0" + dateTemp;
  document.querySelector("#days span").innerHTML = dateTemp;

  dateTemp = Math.floor(dateLeft / (60 * 60));
  dateLeft -= dateTemp * 60 * 60;
  if (dateTemp < 10) dateTemp = "0" + dateTemp;
  document.querySelector("#hours span").innerHTML = dateTemp;

  dateTemp = Math.floor(dateLeft / 60);
  dateLeft -= dateTemp * 60;
  if (dateTemp < 10) dateTemp = "0" + dateTemp;
  document.querySelector("#minutes span").innerHTML = dateTemp;

  if (dateLeft < 10) dateLeft = "0" + dateLeft;
  document.querySelector("#seconds span").innerHTML = dateLeft;
  date--;
}
setInterval(countdown, 1000);
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
