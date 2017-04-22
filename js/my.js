
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';

ComplaintStatus = { //Статус (Поступила; В обработке; Перенаправлена; Обработана; Закрыта)
    recieved : "Поступила",
    inWork : "В обработке",
    reAddressed : "Перенаправлена",
    done : "Обработана",
    closed : "Закрыта"
};

records = [
    {
        ved: "Ведомство 1",
        ID: 1,
        dateTime: "19.04.2017",
        fullName: "Мамедова Марта Романовна",
        status: ComplaintStatus.recieved
    },
    {
        ved: "Ведомство 2",
        ID: 2,
        dateTime: "19.04.2017",
        fullName: "Михайлов Владислав Святославович",
        status: ComplaintStatus.reAddressed
    },
    {   
        ved: "Ведомство 3",
        ID: 3,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.inWork
    },
    {   
        ved: "Ведомство 5",
        ID: 4,
        dateTime: "19.04.2017",
        fullName: "Сысолятина Наталия Платоновна",
        status: ComplaintStatus.closed
    },
    {   
        ved: "Ведомство 5",
        ID: 5,
        dateTime: "19.04.2017",
        fullName: "Городнов Амаяк Вениаминович",
        status: ComplaintStatus.recieved
    },
        {   
        ved: "Ведомство 6",
        ID: 6,
        dateTime: "19.04.2017",
        fullName: "Наумова Яна Валерьевна",
        status: ComplaintStatus.inWork
    },
        {   
        ved: "Ведомство 4",
        ID: 7,
        dateTime: "12.124.2017",
        fullName: "Козлова Стела Тарасовна",
        status: ComplaintStatus.recieved
    },
        {   
        ved: "Ведомство 3",
        ID: 8,
        dateTime: "03.11.2017",
        fullName: "Полякова Клара Аркадьевна",
        status: ComplaintStatus.inWork
    },
        {   
        ved: "Ведомство 3",
        ID: 9,
        dateTime: "01.05.2017",
        fullName: "Литвина Лия Сергеевна",
        status: ComplaintStatus.recieved
    },
        {   
        ved: "Ведомство 1",
        ID: 10,
        dateTime: "23.05.2017",
        fullName: "Виноградов Ипатий Кириллович",
        status: ComplaintStatus.inWork
    },
        {   
        ved: "Ведомство 5",
        ID: 11,
        dateTime: "11.04.2016",
        fullName: "Ильин Август Федорович",
        status: ComplaintStatus.recieved
    }
];
Tabs = []

function ifInArray(item, array){
    for(a in array){
        if(item===array[a]){
            return true;
        }
    }
    return false;
}
function getVedStatus(name){
// У каждого ведомства должен отображаться комплексный статус. Комплексный статус складывается из статусов всех жалоб:

// Если есть хотя бы одна жалоба со статусом «Поступила»
// и нет жалоб со статусом «Перенаправлена», то отображать комплексный статус = «Новое».
// При переносе жалобы в другое ведомство изменять ее статус на «Перенаправлена»,
// комплексный статус ведомства должен измениться на «Срочное».
    var complexStatus = "";
    for(item in records){
        currentItem = records[item];
        if(currentItem.ved==name){
           if(currentItem.status == ComplaintStatus.recieved) complexStatus = ' <span class="label label-success">Новое</span>';
           if(currentItem.status == ComplaintStatus.reAddressed){complexStatus = ' <span class="label label-warning">Срочное</span>'; break;} 
        }
    }
    return complexStatus;
}

function buildMenu(){
    
    for(item in records){ //массив таблиц, если не было такой, добавляем.
        currentItem = records[item];
        if(!(ifInArray(currentItem.ved, Tabs))){
            Tabs.push(currentItem.ved.trim());
        }
    }

    flag = false; //первый проход
    var html = "";
    for(tab in Tabs){
        currentTab = Tabs[tab];
        html+='<li><a href="#">'+currentTab+ getVedStatus(currentTab.trim()) +' </a></li>';        
        if(flag == false){
            flag = true; //если первый проход, помечаем первый таб активным
        }
    }
    $("#mainMenu").html(html);    
}
function buildContextMenu(name){
    var html = "";
        for(tab in Tabs){  
            currentTab = Tabs[tab];      
            if(currentTab!=name){
                html+='<li><a href="#">'+currentTab+'</a></li>'            
        }
    }
    return html;
}
function tableRecord(number, dateTime, fullName, status, ved) { //получаю <tr>
    var statusString = "";
    if(status===ComplaintStatus.recieved){statusString = '<span class="label label-warning">'+status+'</span>';}
    if(status===ComplaintStatus.inWork){statusString = '<span class="label label-info">'+status+'</span>';}
    if(status===ComplaintStatus.reAddressed){statusString = '<span class="label label-warning">'+status+'</span>';}
    if(status===ComplaintStatus.done){statusString = '<span class="label label-success">'+status+'</span>';}
    if(status===ComplaintStatus.closed){statusString = '<span class="label label-success">'+status+'</span>';}
    var html =""
    html+='<tr><td>'+number+'</td><td>'+dateTime+'</td>';
    html+='<td>'+fullName+'</td><td>'+statusString+'</td>';
    if(status != ComplaintStatus.closed && status != ComplaintStatus.done){
        html+='<td><div style="float: left"><div id="btns" class="btn-group" ><a class="btn dropdown-toggle" data-toggle="dropdown" href="#">'
        html+='Переместить<span class="caret"></span></a><ul class="dropdown-menu">'+buildContextMenu(ved)+'</ul></div>'
    }
    else
        html+='<td></td>';
    return html;
}

function buildTable(name){
    $("#tableHeading").html(name);
    var html = "";
    for(item in records){
        currentItem = records[item];
        if(currentItem.ved==name){
            // html += $("#tableContext").html()
            html+=tableRecord(currentItem.ID, currentItem.dateTime, currentItem.fullName, currentItem.status, currentItem.ved)
        }
    }
    $("#tableContext").html(html);
}
