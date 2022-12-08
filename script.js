//функция удаления строки
const delRow = (el) => {
    el.parentElement.remove();
}

//узнаем дату и время прямо сейчас
function checkDate(){
    let td4 = document.createElement("td");
    Data = new Date();
    Year = Data.getFullYear();
    Month = Data.getMonth();
    Day = Data.getDate();
    Hour = Data.getHours();
    Minutes = Data.getMinutes();
    let date = "Time: "+Hour+':'+Minutes+', Today is '+Day+':'+Month+':'+Year ;
    return date;
}

//функция перебора наших мин и макс температур
function checkArray(a, b){
    for()
}

//Создает ряды в таблице (a-макс темп, b-мин темп, c-город) для погоды на СУТКИ!
function addRow(a,b,c){
    // создать ячейку в таблице
    let tbody = document.getElementById("CitiesTable").getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    row.id = 'blackRow';
// создать 1 ячейку с названием города
    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(c));
// создать 2 ячейку в таблице
    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(a + ' ℃'));
// создать 3 ячейку в таблице
    let td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(b + ' ℃'));
// создать 4 ячейку с датой
    let date = checkDate();
    let td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(date));
// создать 5 ячейку с кнопкой для удаления в таблице
    let td5 = document.createElement("td");
    let btn = document.createElement("button");
    td5.setAttribute("onclick", "delRow(this);");
    btn.id = 'deleteRowBtn';
    btn.appendChild(document.createTextNode("Удалить"));
    td5.appendChild(btn);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    tbody.appendChild(row);
}

//логика карточек (a-массив из 3 макс темп, b-массив из 3 мин темп, c-город) для погоды на ТРОЕ СУТОК!
function addRowThree(a, b, c) {
    alert("Вы выбрали прогноз на 3 дня. Чтоб просмотреть все дни, кликните на нужную строку(она подсвечивается розовым цветом).");
    let tbody = document.getElementById("CitiesTable").getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    row.setAttribute("onclick", "check3Days();");
    row.id = 'pinkRow';
    let td1 = document.createElement("td");
    td1.id = 'cityName';
    td1.appendChild(document.createTextNode(c));
    row.appendChild(td1);
    tbody.appendChild(row);
}

//логика карточек (a-массив из 7 макс темп, b-массив из 7 мин темп, c-город) для погоды на НЕДЕЛЮ!
function addRowWeek(a, b, c){
    alert("Вы выбрали прогноз на неделю. Чтоб просмотреть все дни, кликните на нужную строку(она подсвечивается красным цветом).");
    let tbody = document.getElementById("CitiesTable").getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    row.id = 'redRow';
    let td1 = document.createElement("td");
    td1.id = 'cityName';
    td1.appendChild(document.createTextNode(c));
    row.appendChild(td1);
    tbody.appendChild(row);
}

//Функция получения json по api (a-ссылка, b-город, c-сколько дней хочет человек узнать)
function getWeather(a,b,c) {
    let array = {}; //тут у нас будет результат
    let xhr = new XMLHttpRequest();
    xhr.open('GET', a, false);
    xhr.send();
    if (xhr.status != 200) {
        // вывести ошибку
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        // сохранить результат
        array = JSON.parse(xhr.responseText);
    }
    //логика работы при прогнозах погоды на разное кол-во дней
    if(c == 1){
        //функция для создания таблицы на день
        addRow(array.daily.temperature_2m_max[0], array.daily.temperature_2m_min[0], b); 
    }else if(c == 2){
        //Обрезаю макс и мин темп до 3-х дней
        let arrMax = array.daily.temperature_2m_max.slice(0,3);
        let arrMin = array.daily.temperature_2m_min.slice(0,3);
        //функция для создания таблицы на 3 дня
        addRowThree(arrMax, arrMin, b);
    }else{
        //функция для создания таблицы на неделю
        addRowWeek(array.daily.temperature_2m_max, array.daily.temperature_2m_min, b);
    }
    
}

//проверяем какой город получаем и подставляем ссылку для получения json. Принимаем запрос на количество дней
function checkCity(x, count){
    var count = document.getElementById("count").value;
    if(x == 1){
        let city = "Kyiv";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }else if(x == 2){
        let city = "Kharkiv";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=49.98&longitude=36.25&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }else if(x == 3){
        let city = "Lviv";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=49.84&longitude=24.02&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }else if(x == 4){
        let city = "Odesa";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=46.49&longitude=30.74&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }else if(x == 5){
        let city = "Dnipro";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=48.47&longitude=35.04&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }else if(x == 6){
        let city = "Kherson";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=46.64&longitude=32.61&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }else{
        let city = "Cherkassy";
        getWeather("https://api.open-meteo.com/v1/forecast?latitude=49.44&longitude=32.06&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin", city, count);
    }
}



// document.addEventListener('click', function(e){
//     if(e.target.classList.contains('deleteRowBtn')){
//         e.preventDefault();
//         let tr = e.target.closest('tr');
//         tr.remove();
//         return !1;
//     };
// });