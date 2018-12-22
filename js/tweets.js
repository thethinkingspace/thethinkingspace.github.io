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
      "https://script.google.com/macros/s/AKfycbxqYNkNejlaS6zL1PJ6Ud9Yq7zKc9zByDKGYeMuNgNIXxmLXJU/exec"
  });
});
