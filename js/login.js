$(document).ready(function () {
    $("#login").on('click',function() {
        var email = $("#email").val();
        var password = $("#password").val();
        //console.log(email);
        //console.log(password);
        if(email == "" || password == "")
        {
            alert('Please check your inputs');
        }
        else
        {
            $.ajax
            (
                {
                    url:'php/login.php',
                    method: 'POST',
                    data: 
                    {
                        login:1,
                        emailPHP: email,
                        passwordPHP: password
                    },
                    success: function(response)
                    {
                        console.log(response);
                    },
                    datatype:'text'
                }
            );
        }		
    });
        
}); 