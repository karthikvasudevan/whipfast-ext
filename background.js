var commentText = "";
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse)
  {
    commentText = request.commentText;
    var tabidofcreatedwindow = 0;
    var message = "Message";
    chrome.windows.create({
                           type: 'popup',
                           width: 700,
                           height: 500,
                           url:'app.html',
                           focused: true},

                           function (newWindow){
                            tabsinnewwindow = newWindow.tabs;
                            tabidofcreatedwindow = tabsinnewwindow[0].id;
                           });


    sendResponse({tabidofcreatedwindow: tabidofcreatedwindow});


  }
);

function commenttextvalue(){
  return commentText;
}
