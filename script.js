//Функция получения json по api
function getWeather() {
    let array = {}; //тут у нас будет результат
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin', false);
    xhr.send();
    if (xhr.status != 200) {
        // вывести ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // сохранить результат
        array = JSON.parse(xhr.responseText);
    }
    console.log(array);
}
//Добавляю координаты для каждого города
let Kyiv = ;
let Kharkiv = ;
let Lviv = ;
let Odessa = ;