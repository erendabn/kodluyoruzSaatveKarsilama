let name = document.querySelector("#myName");

name.innerHTML = prompt("Lütfen adınızı Giriniz");

clock = document.querySelector("#myClock");

setInterval(function () {
  let date = new Date();
  let hour =
    date.getHours().toString().length == 1
      ? "0" + date.getHours().toString()
      : date.getHours().toString();
  let minute =
    date.getMinutes().toString().length == 1
      ? "0" + date.getMinutes().toString()
      : date.getMinutes().toString();
  let second =
    date.getSeconds().toString().length == 1
      ? "0" + date.getSeconds().toString()
      : date.getSeconds().toString();
  let day =
    date.getDay() == 0
      ? "Pazar"
      : date.getDay() == 1
      ? "Pazartesi"
      : date.getDay() == 2
      ? "Salı"
      : date.getDay() == 3
      ? "Çarşamba"
      : date.getDay() == 4
      ? "Perşembe"
      : "Cumartesi";

  let time = `${hour}:${minute}:${second} ${day}`;

  clock.innerHTML = `${time}`;
}, 1000);
//clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getFullYear()}`;
