(function(exports) {

  function listenForFormSubmit() {
    var submitButton = document.getElementById("submit_form")
    if (submitButton)
      submitButton
        .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          noteList.addNote(clickEvent.path[1][0].value);
          noteController.insertHTML();
          clearWindowHash();
        });
  }

  exports.listenForFormSubmit = listenForFormSubmit;
})(this);
