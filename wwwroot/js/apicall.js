$(document).ready(
    function () {
        $('#submit').click(function () {


            $.ajax({
                url: 'http://localhost:7222/api/user/authenticate',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: {
                    username: $('#uname').val(),
                    password: $('#psw').val()
                },
                processData: false,
                success: function (data, textStatus, jQxhr) {
                    var json = $.parseJSON(data)
                    alert("User successfully authenticated")
                    if (data.Role == "Manager") {
                        window.location.replace('~/Pages//Manager.cshtml')
                    }
                    else {
                        window.location.replace('~/Pages//Wfm_Manager.cshtml')
                    }


                },
                error: function (jqXhr, textStatus, errorThrown) {
                    alert("User successfully authenticated")
                }
            });



        })

    }
);