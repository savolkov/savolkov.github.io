
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
        status: ComplaintStatus.recieved
    },
    {
        ved: "Ведомство 2",
        ID: 2,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.recieved
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
        html+='<li><a href="#">'+currentTab+' <span class="label label-success">Обработана</span></a></li>';
        $("#mainMenu").html(html)
        if(flag === false){
            flag = true;
            $("#mainMenu li").addClass("active");
        }
    }
}

function tableRecord(number, dateTime, fullName, status) { //получаю <tr>
    var statusString;
    if(status===ComplaintStatus.recieved){statusString = '<span class="label label-warning">'+status+'</span>';}
    if(status===ComplaintStatus.inWork){statusString = '<span class="label label-info">'+status+'</span>';}
    if(status===ComplaintStatus.reAddressed){statusString = '<span class="label label-warning">'+status+'</span>';}
    if(status===ComplaintStatus.done){statusString = '<span class="label label-success">'+status+'</span>';}
    if(status===ComplaintStatus.closed){statusString = '<span class="label label-success">'+status+'</span>';}
    var html =""
    html+='<tr><td>'+number+'</td><td>'+dateTime+'</td>';
    html+='<td>'+fullName+'</td><td>'+statusString+'</td>';
    html+='<td><div style=\"float: left\"><div class=\"dropdown\" style=\"display: inline-block\"><a data-toggle=\"dropdown\" href=\"#\">Переместить</a><ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\"><li>Ved1</li><li>Ved2</li></ul></div><a href=\"#\"><i class=\"glyphicon glyphicon-trash\"></i></a></div></td></tr>';
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
            html+=tableRecord(currentItem.ID, currentItem.dateTime, currentItem.fullName, currentItem.status)
        }
    }
    $("#tableContext").html(html);
}
