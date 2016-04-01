

if(window.location.href.indexOf("/comments/") >= 0){
bolticon = chrome.extension.getURL("images/bolt.png");
// $('.commentarea .usertext-body').find("p:first").append("<a class='whipfast-icon'><img width='40px' src='"+bolticon+"' class='bolticon' /></a>").addClass("whipfast-icon-container");
$('.commentarea .usertext-body').find("p:first").addClass("whipfast-icon-container");

$("<a class='whipfast-icon'><img width='40px' src='"+bolticon+"' class='bolticon' /></a>").appendTo($('.commentarea .usertext-body').find("p:first")).bind("click", function() {
  var commentText = $(this).closest(".md").text();
  sendtoBackground(commentText);
});
}


function sendtoBackground(commentText) {

  chrome.runtime.sendMessage({commentText: commentText}, function(response) {
  console.log("Tab Created with ID : "+response.tabidofcreatedwindow);
  });

}
