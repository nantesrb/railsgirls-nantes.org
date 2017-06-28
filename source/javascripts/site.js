document.addEventListener("DOMContentLoaded", function(event) {

  // delete notification when clicking close button
  var elements = document.getElementsByClassName('delete')
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
      var notif = this.parentNode;
      notif.parentNode.removeChild(notif)
    });
  };
});
