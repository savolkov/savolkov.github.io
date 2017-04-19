
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
function tableRecord(number, dateTime, fullName, status, tab) { //получаю <tr>
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
ComplaintStatus = { //Статус (Поступила; В обработке; Перенаправлена; Обработана; Закрыта)
    recieved : "Поступила",
    inWork : "В обработке",
    reAddressed : "Перенаправлена",
    done : "Обработана",
    closed : "Закрыта"
}

Vedomstva = { //все ведомства
ved1: "Ведомство 1",
ved2: "Ведомство 2",
ved3: "Ведомство 3"
}
// var tableItem = {
//     number,
//     dateTime,
//     fullName,
//     status,
//     ved
// }
tableItems = [
    {
        number: 1,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.recieved,
        ved: Vedomstva.ved1
    },
    {
        number: 2,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.done,
        ved: Vedomstva.ved1
    },
    {
        number: 3,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.inWork,
        ved: Vedomstva.ved2
    },
    {
        number: 4,
        dateTime: "19.04.2017",
        fullName: "Иванов Иван Иваныч",
        status: ComplaintStatus.recieved,
        ved: Vedomstva.ved3
    }
    
]
function getTab(){ //построение вкладки с таблицей
    var resString = "";
    for(item in Vedomstva)
    {   
        resString += '<div class="tab-pane fade in" id="'+item+'">';
        resString+='<h2>'+Vedomstva[item]+'</h2><hr><table class="table table-striped table-hover"><col width="10%"><col width="10%"><col width="30%">';
        resString+='<col width="20%"><col width="30%"><thead><tr><th>#</th><th>Дата</th><th>ФИО заявителя</th><th>Статус</th><th>Действия</th></tr>';
        resString+='</thead><tbody></tbody></table></div>';}
        return resString;
    }
function fillInTable(){
    var ved1Data = '';
    var ved2Data = '';
    var ved3Data = '';
    for(item in tableItems){

        var wat = tableItems[item]; 

        var html = tableRecord(wat.number, wat.dateTime, wat.fullName, wat.status, wat.ved)
        if(wat.ved === Vedomstva.ved1){
            ved1Data=$("#ved1 tbody").html();
            ved1Data+=html;
            $("#ved1 tbody").html(ved1Data);
        }
        if(wat.ved === Vedomstva.ved2){
            ved2Data=$("#ved2 tbody").html();
            ved2Data+=html;
            $("#ved2 tbody").html(ved2Data);
        }
        if(wat.ved === Vedomstva.ved3){
            ved3Data=$("#ved3 tbody").html();
            ved3Data+=html;
            $("#ved3 tbody").html(ved3Data);
        }
        
    }
}