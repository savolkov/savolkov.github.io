{
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
}
function tableRecord(number, dateTime, fullName, status, tab) {
    var statusString;
    if(status===ComplaintStatus.recieved){statusString = "<span class=\"label label-success\">"+status+"</span>";}
    var html ="<tr><td>"+number+"</td><td>"+dateTime+"</td><td>"+fullName+"</td><td>"+statusString+"</td>"+"<td><div style=\"float: left\"><div class=\"dropdown\" style=\"display: inline-block\"><a data-toggle=\"dropdown\" href=\"#\">Переместить</a><ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\"><li>Ved1</li><li>Ved2</li></ul></div><a href=\"#\"><i class=\"glyphicon glyphicon-trash\"></i></a></div></td></tr>";
    return html;
}
ComplaintStatus = {
    recieved : "Поступила",
    inWork : "В обработке",
    reAddressed : "Перенаправлена",
    done : "Обработана",
    closed : "Закрыта"
}
//Статус (Поступила; В обработке; Перенаправлена; Обработана; Закрыта)
Vedomstva = {
ved1: "Ведомство 1",
ved2: "Ведомство 2",
ved3: "Ведомство 3"
}

function getTab(){
    var resString = "";
    for(item in Vedomstva)
    {   
        resString += '<div class="tab-pane fade in" id="'+item+'">';
        resString+='<h2>'+Vedomstva[item]+'</h2><hr><table class="table table-striped table-hover"><col width="10%"><col width="10%"><col width="30%">';
        resString+='<col width="20%"><col width="30%"><thead><tr><th>#</th><th>Дата</th><th>ФИО заявителя</th><th>Статус</th><th>Действия</th></tr>';
        resString+='</thead><tbody></tbody></table></div>';}
        return resString;
    }
