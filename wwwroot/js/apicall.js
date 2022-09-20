$(document).ready(
    function () {
        $('#submit').click(function () {


            $.ajax({
                url: 'http://localhost:5000/api/user/authenticate',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    username: $('#uname').val(),
                    password: $('#psw').val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {
                    alert("User successfully authenticated")
                    window.location.replace('~/Pages//Manager.html')

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    alert("User Failed to authenticate")
                    window.location.replace('~/Pages//Wfm_Manager.html')
                }
            });



        })

    }
)