


$(document).ready(function(){
$("#NewRegistration").on('click',function(){
    location.href = "Registration.html"
  });
});

//$(document).ready(function(){
//$("#Login").on('click',function(){
   // location.href = "ShoeTypes.html"
 // });
//});

$(document).ready(function(){
$(".btn.btn-info.FormalShoes").on('click',function(){
    location.href = "FormalShoeslist.html"
  });
});

$(document).ready(function() {
  $('#first_form').submit(function(e) {

    e.preventDefault();
    var first_name = $('#firstname').val();
    var last_name = $('#lastname').val();
    var email = $('#emailId').val();
    var contactnumber = $('#contactNumber');
    var username = $('#usr').val();
    var password = $('#pwd').val();

    $(".error").remove();

    if (first_name.length < 1) {
      $('#firstname').after('<span class="error">This field is required</span>');
    }
    else if (last_name.length < 1) {
      $('#lastname').after('<span class="error">This field is required</span>');
    }
    else if (email.length < 1) {
    	
      $('#emailId').after('<span class="error">This field is required</span>');
        } else {
      var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#emailId').after('<span class="error">Enter a valid email</span>');
               }
                               
      else if (contactnumber.length < 1) {
      $('#contactNumber').after('<span class="error">This field is required</span>');
      }
      else if (username.length < 1) {
      $('#usr').after('<span class="error">This field is required</span>');
      }
    else if (password.length < 1) {
      $('#pwd').after('<span class="error">This field is required</span>');
      }
     else{
       location.href = "RegistrationSuccessfulmessage.html";
          }
      }
     })
  });


$(document).ready(function() {
  $('#second_form').submit(function(e) {

    e.preventDefault();
    var user_name = $('#usr').val();
    var password = $('#pwd').val();

    $(".error").remove();

    if (user_name.length < 1) {
      $('#pwd').after('<span class="error">Both Username and Password field are required</span>');
    }
    else if (password.length < 1) {
      $('#pwd').after('<span class="error">Both Username and Password field are required</span>');
    }
     else{
       location.href = "ShoeTypes.html";
          }
      
     })
});

$(document).ready(function(){
$(".btn.btn-info.AddToCart").on('click',function(){
    location.href = "AddedToCartSuccessfulmessage.html"
  });
});


