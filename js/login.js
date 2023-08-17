document.getElementById('btn-login').addEventListener('click',function()
{
   const emailField=document.getElementById('emailInput');
   const email=emailField.value;
   const passwordField=document.getElementById('passwordInput');
   const password=passwordField.value;

   if (email=='tahsinniyan@gmail.com' && password=='1234')
   {
        window.location.href='bank.html';
   }
   else{
    alert('Inavalid email or password!!');
   }
})