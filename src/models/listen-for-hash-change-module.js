(function(exports) {
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

  exports.makeURLChangeShowNoteForCurrentPage = makeURLChangeShowNoteForCurrentPage;


})(this);
