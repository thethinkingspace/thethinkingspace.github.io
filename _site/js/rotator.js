$(document).ready(function($) {
    $("#rotating-words").wordsrotator({
      randomize: true,
      speed: 5000,
      animationIn: "fadeOut",
      animationOut: "fadeIn",
      words: [
        "A space to restore your wellbeing.",
        "A space to rediscover your potential."
      ]
    });
  });
