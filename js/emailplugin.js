var $contact = $('#contact');
var destination = '';// Destination email address goes here

activateEmails = function(){
  $("#free-call-form").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize() + '&destination=' + destination; 
    console.log(form_data);
    $.ajax({
      type: "POST", 
      url: "emailform.php",
      dataType: "json", // Add datatype
      data: form_data
    }).done(function (data) {
        console.log(data);
        alert("Message sent!");
    }).fail(function (data) {
        alert("Message failed to send");
        console.log(data);
    });
  }); 
}

populateContact = function(){
  $contact.append('<h2>Contact</h2>');
  $contact.append('<form name="freeCall" method="post" class="email-form" id="free-call-form"></form>');
  var $emailform = $('.email-form');
  $emailform.append('<div class="input_div"><label for="name">Name<span class="required">*</span>:<br></label><input placeholder="Name" name="name" type="text" id="name" ></div>');
  $emailform.append('<div class="input_div"><label for="email">Email<span class="required">*</span>:<br></label><input name="email" type="email" value="" placeholder="email@address.com" id="email" ></div>');
  $emailform.append('<div class="input_div"><label for="phone">Phone:<br></label><input placeholder="(***) ***-***" name="phone" type="tel" id="phone" ></div>');
  $emailform.append('<div class="input_div"><label for="company">Company:<br></label><input placeholder="Company" name="company" type="text" id="company" ></div>');
  $emailform.append('<div class="input_div"><label for="category">Category<span class="required">*</span>:<br></label><select name="category" id="category" ><option>Booking</option><option>Commission</option><option>Other inquiry</option></select></div>');
  $emailform.append('<div class="input_div"><label for="subject">Subject<span class="required">*</span>:<br></label><input placeholder="Subject" name="subject" type="text" id="subject" ></div>');
  $emailform.append('<div class="input_div-message"><label for="message">Message<span class="required">*</span>:<br></label><textarea cols="50" rows="10" placeholder="Type your message here." name="message" type="textarea" id="message" ></textarea></div>');
  $emailform.append('<div class="input_div"><input type="submit" value="Submit" > <span class="required">*Required field</span></div>');

  activateEmails();
}

populateContact();