// LINK TO GO BACK TO ALL NOTES
// This function is called at the end of "showNote" because that is when the back_to_notes link is on page
(function(exports) {
  function listenForBackToAllNotes() {
    document
      .getElementById("back_to_notes")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        clearWindowHash();
        noteController.insertHTML();
    });
  }

  exports.listenForBackToAllNotes = listenForBackToAllNotes;
})(this);
