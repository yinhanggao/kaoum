/*
function getData(){
    var req=new XMLHttpRequest();
    req.open("get","http://localhost/kaoum/kata.php");
    req.onload=function(){
    var content=document.getElementById("content"); 
    content.innerHTML=this.responseText; 
    };
    req.send();
}
function aaa(){

}
*/
function ShowTime(){
    　document.getElementById('nowtime').innerHTML = new Date();
    　setTimeout('ShowTime()',1000);
    }
function print_value() {
    $city = document.getElementById("city").value;//下拉方塊選到的value
    //document.getElementById("content").innerHTML=$city+"咚咚";

    $.ajax({
        type:'GET',
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-5FC93907-783A-4AC3-8BC1-70D286425F47&locationName='+$city,
        success:function(data){
            

            var thisdata = data;

            
            console.log(thisdata["records"]["locations"][0]["location"][0]["locationName"]);
            str=thisdata["records"]["locations"][0]["location"][0]["weatherElement"][0]["time"][0]["elementValue"][0]["value"];
            int=thisdata["records"]["locations"][0]["location"][0]["weatherElement"][1]["time"][0]["elementValue"][0]["value"];
            dex=thisdata["records"]["locations"][0]["location"][0]["weatherElement"][3]["time"][0]["elementValue"][0]["value"];
            //$('#content').append(str);
            document.getElementById("citty").innerHTML=$city;
            document.getElementById("weath12h0").innerHTML="12小時降雨機率"+str+"%";
            document.getElementById("weath12h1").innerHTML=int;
            document.getElementById("weath12h3").innerHTML=dex+"攝氏度";
        }
    });



}

$('.carousel').carousel({
    interval: false
  })

/*
    var req=new XMLHttpRequest();
    req.open("get","https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-5FC93907-783A-4AC3-8BC1-70D286425F47&locationName=臺南市");
    req.onload=function(){
    var content=document.getElementById("content"); 
    content.innerHTML=this.responseText; 
    };
    req.send();

    var xhr=new XMLHttpRequest();
    xhr.open('get',"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-5FC93907-783A-4AC3-8BC1-70D286425F47&locationName=臺南市",true);
    xhr.send(null);
    xhr.onload = function(){
    var ccc=document.getElementById("content"); 
    ccc.innerText=ccc.success;
    };//onload 資料有回傳時(readyStatus:4)就可執行function
    xhr.send();
*/


/*

$(function(){

    $('#city').each( //獲得#city的所有值
        function(){
        $('#city').change(function(){
        console.log($('#city').val()); 
        $C=$('#city').val();
        });
        });


    $.ajax({
        type:'GET',
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-5FC93907-783A-4AC3-8BC1-70D286425F47',
        success:function(data){
            
            console.log(data);
            console.log(typeof(data));
            var thisdata = data;
            console.log(typeof(thisdata));
            
            console.log(thisdata["records"]["locations"][0]["location"][1]["locationName"]);
            str=thisdata["records"]["locations"][0]["location"][1]["locationName"];
            $('#result').append(str);


        }
    });

});
*/