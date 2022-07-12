$(document).ready(function(){
  $("#submitRegister").click(function(){
      $("#submitRegister").hide(750);
      $("#submitLogin").hide(750);
      $("#registerForm").fadeIn(750);
  });
});

$(document).ready(function(){
  $("#submitLogin").click(function(){
      $("#submitRegister").hide(750);
      $("#submitLogin").hide(750);
      $("#loginForm").fadeIn(750);
  });
});

$(document).ready(function(){
  $(".registerButton").click(function(){
      $("#content").hide(750);
      $("#home").hide(750);
      $("#games").fadeIn(750);
  });
});

$(document).ready(function(){
  $("#menu").click(function(){
      $("#navbar").fadeIn(750);
  });
});

$(document).ready(function(){
  $("#menu").dblclick(function(){
    $("#navbar").hide(750);
  });
});

$(document).ready(function(){
  $("form").validate({
  rules: {
      email:{
          required:true,
          email: true
      },
      name:{
          required:true,
          text: true
      },
      surname:{
          required:true,
          text: true
      },
      number:{
          required: true,
          number: true
      }
  },
  messages:{
      email: "Please enter a valid email",
      name: "Please enter name",
      surname: "Please enter surname",
      number: "Please enter a valid number"
      
  },
  submitHandler: function(form) {
  form.submit();
  }   
  });
})

function alertLogin() {
  alert("You are logged in");
}

// $(document).ready(function () {    
    
//   $('#phoneNumber').keypress(function (e) {    

//       var charCode = (e.which) ? e.which : event.keyCode    

//       if (String.fromCharCode(charCode).match(/[^0-9]/g))    

//           return false;                        

//   });    

// }); 

// $(function() {
//   $("form[name='registerForm']").validate({
//     rules: {
//       name: "required",

//       surname: "required",

//       email: {
//         required: true,
//         email: true
//       },
      
//       phoneNumber: {
//           required: true,
//           number: true
//       },
//     },

//     messages: {
//       name: "Please enter your firstname",
//       surname: "Please enter your lastname",
//       email: "Please enter a valid email address"
//     },

//     submitHandler: function(form) {
//       form.registerButton();
//     }
//   });
// })

  function ShowDateandTime()
  {
    var time = new Date();
    document.getElementById("footer").innerHTML = time.getDay()
    document.getElementById("footer").innerHTML = time.getMonth()
    document.getElementById("footer").innerHTML = time.getTime()
  }

  function ValidateandCalculate(name,num1,num2)
  {
      var userName = name;
      var Num1 = Number(num1);
      var Num2 = Number(num2);
      var answer = parseInt((Num1) + (Num2));

      alert(userName + " The total price is " + answer + " euro");
      console.log(userName)


      if(isNaN(Num1 && Num2)){
        alert("Please check your inputs and try again")
      } 
  }

  function validateForm() {
    if( document.contactForm.surname.value == "" ) {
      alert( "Note: ALL input are mandatory, please amend your entries and try again" );
      document.contactForm.comment.focus() ;
      return false;
    }
    if( document.contactForm.name.value == "" ) {
       alert( "Note: ALL input are mandatory, please amend your entries and try again" );
       document.contactForm.name.focus() ;
       return false;
    }
    if( document.contactForm.phoneNumber.value == "" ) {
      alert( "Note: ALL input are mandatory, please amend your entries and try again" );
      document.contactForm.phoneN.focus() ;
      return false;
   }
    if( document.contactForm.email.value == "" ) {
       alert( "Note: ALL input are mandatory, please amend your entries and try again" );
       document.myForm.email.focus() ;
       return false;
    }
    return( true );
  }

