


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

var trialCount = 0;
$(document).ready(function() {
  $('#second_form').submit(function(e) {
    console.log(trialCount);
    e.preventDefault();
    var user_name = $('#usr').val();
    var password = $('#pwd').val();
    $(".error").remove();
    if (trialCount < 3 ){
      if (user_name.length < 1) {
      $('#pwd').after('<span class="error">Both Username and Password field are required</span>');
      trialCount++;
      }
      else if (password.length < 1) {
      $('#pwd').after('<span class="error">Both Username and Password field are required</span>');
     trialCount++;
      }
      else{
       location.href = "ShoeTypes.html";
      }
      }
      else{
        $('#pwd').after('<span class="error">You tried 3 times already !!! - start from beginning </span>');
      }
     })
});

$(document).ready(function(){
$(".btn.btn-info.AddToCart").on('click',function(){
    location.href = "AddedToCartSuccessfulmessage.html"
  });
});

/****************** functionality related to hide and show of the Online Products Table *************************************/
/****************** functionality related to hide and show of the Online Products Table *************************************/
/****************** Formal shoes  *************************************/

$(document).ready(function(){
  $(".formalshoetable").hide();
  $(".formalshoedropup").hide();
$(".formalshoedropdown").on('click',function(){
    $(".formalshoetable").toggle(500);
    $(".formalshoedropup").show();
    $(".formalshoedropdown").hide();
  });
});

$(document).ready(function(){
$(".formalshoedropup").on('click',function(){
    $(".formalshoetable").hide();
    $(".formalshoedropdown").show();
    $(".formalshoedropup").hide();
  });
});

/****************** Sports shoes  *************************************/

$(document).ready(function(){
  $(".sportsshoetable").hide();
  $(".sportsshoedropup").hide();
$(".sportsshoedropdown").on('click',function(){
    $(".sportsshoetable").toggle(500);
    $(".sportsshoedropup").show();
    $(".sportsshoedropdown").hide();
  });
});

$(document).ready(function(){
$(".sportsshoedropup").on('click',function(){
    $(".sportsshoetable").hide();
    $(".sportsshoedropdown").show();
    $(".sportsshoedropup").hide();
  });
});

/****************** Sneaker shoes  *************************************/

$(document).ready(function(){
  $(".sneakersshoetable").hide();
  $(".sneakersshoedropup").hide();
$(".sneakershoedropdown").on('click',function(){
    $(".sneakersshoetable").toggle(500);
    $(".sneakersshoedropup").show();
    $(".sneakershoedropdown").hide();
  });
});

$(document).ready(function(){
$(".sneakersshoedropup").on('click',function(){
    $(".sneakersshoetable").hide();
    $(".sneakershoedropdown").show();
    $(".sneakersshoedropup").hide();
  });
});
