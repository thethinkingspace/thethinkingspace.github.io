$(document).ready(function($) {
  $(".tweets-list-container").tweetscroll({
    username: "thinkinspace",
    limit: 2,
    replies: true,
    position: "append",
    animation: "false",
    date_format: "style2",
    visible_tweets: 2,
    request_url:
      "https://script.google.com/macros/s/AKfycbxeDJE0T3PZQzjlVdZRPMi6De5s3bd05JMKb2a_RY2dkxf8gb6p/exec"
  });
});
