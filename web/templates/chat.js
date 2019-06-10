function getCurrentUser(){
        $.ajax({
            url:'/current',
            type:'GET',
            success: function(response){
                alert("success");
                alert(JSON.stringify(response));
                $('#current_user').html(response['username']);
            },
            error: function(response){
                alert("error")
                alert(JSON.stringify(response));
            }

        });
}

function getAllUsers(){
        $.ajax({
            url:'/users',
            type:'GET',
            success: function(response){
                //((alert("success");
                alert(JSON.stringify(response));
                //$('#current_user').html(response['username']);
            },
            error: function(response){
                alert("error")
                alert(JSON.stringify(response));
            }

        });
}