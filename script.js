//Функция получения json по api
function getWeather(a) {
    let array = {}; //тут у нас будет результат
    let xhr = new XMLHttpRequest();
    xhr.open('GET', a, false);
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
