
    $(document).ready(function(e) {
      $("input#accept-terms").click(function() {
        // get current time and date
        var dt = new Date();
        var hours = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
        var min = dt.getMinutes();
        var am_pm = dt.getHours() >= 12 ? "PM" : "AM";
        var year = dt.getFullYear();
        var date = dt.getDate();

        var my_month = dt;

        var month_name = new Array(12);
        month_name[0] = "January";
        month_name[1] = "February";
        month_name[2] = "March";
        month_name[3] = "April";
        month_name[4] = "May";
        month_name[5] = "June";
        month_name[6] = "July";
        month_name[7] = "August";
        month_name[8] = "September";
        month_name[9] = "October";
        month_name[10] = "November";
        month_name[11] = "December";

        $("#consent-time").val(hours + ":" + min + " " + am_pm);
        $("#consent-date").val(
          month_name[my_month.getMonth()] + "-" + date + "-" + year
        );
      });

      // open consent popup
      $("#popup-link").click(function() {
        $("#concent-pop-up").addClass("open-popup");
        $("body").addClass("open-consent-form");
      });

      // close consent form
      $(
        "#concent-pop-up .close-popup , #concent-pop-up .consent-pop-up-bg"
      ).click(function() {
        $("#concent-pop-up").removeClass("open-popup");
        $("body").removeClass("open-consent-form");
      });

      $("#form-contact").validate({
        submitHandler: function(form) {
          //form.submit();
          if ($("input#hidden").val().length != 0) {
            return false;
          }

          var name = $("input#your-name").val();
          var email = $("input#email-address").val();
          var phone = $("input#phone").val();
          var check = $("input.checkbox").is(":checked") ? "Yes" : "No";
          var times = $("input#consent-time").val();
          var dates = $("input#consent-date").val();
          var consent = $("input#consent-accepted").val();
          $("#btn-submit").attr("disabled", "true");
          var dataString =
            "name=" +
            name +
            "&email=" +
            email +
            "&phone=" +
            phone +
            "&times=" +
            times +
            "&dates=" +
            dates +
            "&consent=" +
            consent;

          var request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzPFdnusss0YYhz8Z0OE-snekx8m_P7fNj-lC9uvR44KOLb-TQ/exec",
            type: "POST",
            data: dataString,
            dataType: "json"
          });

          request.done(function(result) {
            if (result.error) {
              $("#form-contact").append(
                "<p class='failure'>Error in submission, please try again or call 020 8361 3219.</p>"
              );
            } else {
              $("#form-contact").append(
                "<p class='sucess'>Thank You,<br/> Your message is received.</p>"
              );
              $(".contact_us").remove();
            }
          });

          request.fail(function(jqXHR, textStatus) {
            $("#form-contact").append(
              "<p class='failure'>Error in submission, please try again or call 020 8361 3219.</p>"
            );
          });
        }
      });
    });
