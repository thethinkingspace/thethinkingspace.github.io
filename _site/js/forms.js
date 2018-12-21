$(document).ready(function(e) {
  $("#form-contact").validate({
    submitHandler: function(form) {
      //form.submit();
      if ($('input#hidden').val().length != 0) {
          return false;
      };

      var name = $("input#your-name").val();
      var email = $("input#email-address").val();
      var phone = $("input#phone").val();
      var check = $("input.checkbox").is(':checked')?'Yes':'No';
      $("#btn-submit").attr('disabled', 'true');
      var dataString = 'name='+ name + '&email='+ email + '&phone='+ phone + '&check='+ check;

      var request = $.ajax({
        url: "bin/forms-email.php",
        type: "POST",
        data: dataString,
        dataType: "html"
      });

      request.done(function(msg) {
        //alert( "Request successfull: " + msg);
        $("#form-contact").append("<p class='sucess'>Thank You,<br/> Your message is received.</p>");
        $(".contact_us").remove();
      });

      request.fail(function(jqXHR, textStatus) {
        //alert( "Request failed: " + textStatus );
        $("#form-contact").append("<p class='failure'>Erron in submission, please try again.</p>");
      });

    }
    });
});
