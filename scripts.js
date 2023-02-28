/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.*/

const idElem = document.getElementById("from");
const spanElem = document.querySelector("span");

idElem.oninput = function () {
  spanElem.innerHTML = idElem.value;
};

/*2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.*/

const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

messageBtn.onclick = () => {
  message.classList.add("animate_animated");
  message.classList.add("animate_fadeInLeftBig");
  message.style.visibility = "visible";
};

/*3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.*/

const formInput = document.querySelector(".form-control");
const optionSelect = document.querySelector("select.form-control");
const btnSend = document.querySelector("button");

formInput.onclick = () => {
  if (!formInput.value) {
    formInput.classList.add("error");
    formInput.style.background = " green";
  }
};

optionSelect.onclick = () => {
  if (!optionSelect.select) {
    optionSelect.classList.add("error");
    optionSelect.style.background = " green";
  }
};

formInput.oninput = function () {
  formInput.classList.remove("error");
  formInput.style.background = " blue";
};

if (formInput.value === "" || optionSelect.value === "") {
  btnSend.addEventListener("onclick", function (event) {
    event.preventDefault();
  });
}
