function httpGet(){
    var get = [];
    var url = window.location.href;
    var i = url.lastIndexOf("?");
    var getstring = url.substring(i + 1);
    var result = getstring.split('&');
    
    $.each(result, function(i,result){
        var variable = result.split("=");
        get[variable[0]] = variable[1];
    })

    return get;
}
