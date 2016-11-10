(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView();
  }

// INSERTING HTML FROM NOTELIST

  NoteController.prototype.insertHTML = function() {
    var html = this.noteListView.renderAll(this.noteList);
    document.getElementById("app").innerHTML=html;
  };


  exports.NoteController = NoteController;
})(this);
