

$(document).ready(function () {
    
    $("#register").on('click',function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var contact = $("#contact").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var dob = $("#dob").val();
        

        
        if(email == "" || password == "" ||contact==""||fname == "" || lname == ""|| dob=="")
        {
            alert('Please fill everything');
        }
        else
        {
            $.ajax
            (
                {
                    url:'php/register.php',
                    method: 'POST',
                    data: 
                    {
                        login:1,
                        emailPHP: email,
                        passwordPHP: password,
                        contactPHP: contact,
                        fnamePHP: fname,
                        lnamePHP: lname,
                        dobPHP : dob

                        
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