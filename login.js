console.log('*** Start ***');

var emailId='';
var password='';

function login(){
    

    emailId = document.getElementById('email').value;
    password =document.getElementById('pswd').value;

    if( emailId == 'chandumiryala@gmail.com' && password =='67890'){

        document.getElementById('result').innerHTML = 'Successfully LogedIn....';
        document.getElementById('result').style.color='green';
         console.log('Successfully LogedIn....'); 
         window.location.href='profile.html';

    }
    else
    {
        console.log('Invalid email/password , please check....');
        document.getElementById('result').style.color='red';
        document.getElementById('result').innerHTML = 'Invalid email/password , please check....';
    
    }

    return false;
}





console.log('******* End *******');