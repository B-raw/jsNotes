(function(exports) {

  function NoteListView() {
  }

  NoteListView.prototype.renderAll = function(noteList) {
    var parsedList;
    if (noteList.returnNotes().length === 0){
        return "You don't have any notes.";
    } else {
      parsedList = addListDivAndJoin(noteList.returnNotes());
      return addULTags(parsedList)
    }
  };

  function addListDivAndJoin(noteArray) {
    return noteArray.map(function(note) {
      return '<li><a href="#notes/' + note.id + '"><div>' + truncate(note.returnText()) + "</div></a></li>";
    }).join("");
  };

  function addULTags(list) {
    return "<ul>" + list + "</ul>";
  }

  function truncate(text) {
    return (text.length > 20) ? text.substr(0,20)+'...' : text;
  }

  exports.NoteListView = NoteListView;
})(this);
