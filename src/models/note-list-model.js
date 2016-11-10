(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  NoteList.prototype.findNoteById = function(id) {
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        return this.notes[i];
      }
    }
  };

  exports.NoteList = NoteList;
})(this);
