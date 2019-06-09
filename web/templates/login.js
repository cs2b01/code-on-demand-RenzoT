function getData(){
        $('#action').append('<div><img src="images/cargando.gif" width="32" height="32"/></div>');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });
        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                $('#action').html("");
                if(response['status']==401){
                $('#action').append('<img width="35" height="35" src="images/equis.png"/>');
                }else{
                $('#action').append('<img width="35" height="35" src="images/ok.png"/>');
                }

                //$('#action').html(response['statusText']);
            },
            error: function(response){
                $('#action').html("");

                if(response['status']==401){
                $('#action').append('<img width="35" height="35" src="images/equis.png"/"/>');
                }else{
                $('#action').append('<img width="35" height="35" src="images/ok.png"/"/>');
                }

        }});
}