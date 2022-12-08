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
    let table = document.querySelector('#CitiesTableBody');
    let tr = document.createElement('tr');
    let city = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let date = document.createElement('td');

    let adt = document.createTextNode(array.daily.temperature_2m_max[0]);
    let bdt = document.createTextNode(array.daily.temperature_2m_max[0]);
    let time = new Date();

    td1.appendChild(adt);
    td2.appendChild(bdt);

    tr.appendChild(td1);
}
function addOneMoreCity(){

}