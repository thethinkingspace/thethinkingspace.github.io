$(document).ready(function($) {
  $(".tweets-list-container").tweetscroll({
    username: "thinkinspace",
    limit: 2,
    replies: true,
    position: "append",
    animation: "false",
    date_format: "style2",
    visible_tweets: 2
  });
});
