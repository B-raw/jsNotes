(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView();
  }

// LINK TO GO BACK TO ALL NOTES
// This function is called at the end of "showNote" because that is when the back_to_notes link is on page

  function listenForBackToAllNotes() {
    document
      .getElementById("back_to_notes")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        window.location.hash = "";
        noteController.insertHTML();
    });
  }

// SUBMITTING NEW FORM

  listenForFormSubmit();

  function listenForFormSubmit() {
    document
      .getElementById("submit_form")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        noteList.addNote(clickEvent.path[1][0].value);
        noteController.insertHTML();
        window.location.hash = ""
      });
  }


// CHANGING URLS
  makeURLChangeShowNoteForCurrentPage();

  function makeURLChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
    showNote(getNoteIDFromUrl(window.location));
  }

  function getNoteIDFromUrl(location) {
    return location.hash.split("#notes/")[1];
  }

  function showNote(note_id) {
    var note = this.noteList.findNoteById(parseInt(note_id));
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("app").innerHTML = singleNoteView.addReturnLink() + singleNoteView.renderNote();
    listenForBackToAllNotes();
  }

  NoteController.prototype.insertHTML = function() {
    var html = this.noteListView.renderAll(this.noteList);
    document.getElementById("app").innerHTML=html;
  };


  exports.NoteController = NoteController;
})(this);
