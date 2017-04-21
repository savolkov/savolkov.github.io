
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
        ID: 12,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.done
    },
    {
        ved: "Ведомство 2",
        ID: 2,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.reAddressed
    },
    {   
        ved: "Ведомство 3",
        ID: 3,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.recieved
    },
    {   
        ved: "Ведомство 5",
        ID: 5,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.recieved
    },
    {   
        ved: "Ведомство 1",
        ID: 1123,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч-dnjhj",
        status: ComplaintStatus.done
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
        if(currentItem.ved===name){
           if(currentItem.status === ComplaintStatus.recieved) complexStatus = ' <span class="label label-success">Новое</span>';
           if(currentItem.status === ComplaintStatus.reAddressed) complexStatus = ' <span class="label label-warning">Срочное</span>';
        }
    }
    return complexStatus;
}

function buildMenu(){
    for(item in records){
        currentItem = records[item];
        if(!(ifInArray(currentItem.ved, Tabs))){
            Tabs.push(currentItem.ved);
        }
    }
    flag = false;
    for(tab in Tabs){
        currentTab = Tabs[tab];
        var html = $("#mainMenu").html()
        html+='<li><a href="#">'+currentTab+getVedStatus(currentTab)+' </a></li>';
        $("#mainMenu").html(html)
        if(flag === false){
            flag = true;
            $("#mainMenu li").addClass("active");
        }
    }
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
    // html+='<td><div style="float: left"><div class="btn-group" ><a class="btn dropdown-toggle" data-toggle="dropdown" href="#">'
    // html+='Переместить<span class="caret"></span></a><ul class="dropdown-menu">'+buildContextMenu(ved)+'</ul></div>'
    html+='<td><a class="btn" href="#myModal" data-toggle="modal">Переместить</a></td>'
    return html;
}

function buildTable(name){
    $("#tableContext").html("");
    $("#tableHeading").html(name);
    var html = "";
    for(item in records){
        currentItem = records[item];
        if(currentItem.ved===name){
            html += $("#tableContext").html()
            html+=tableRecord(currentItem.ID, currentItem.dateTime, currentItem.fullName, currentItem.status,currentItem.ved)
        }
    }
    $("#tableContext").html(html);
}
