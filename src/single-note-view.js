(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.renderNote = function() {
    return "<div>" + this.note.text + "</div>";
  };

  SingleNoteView.prototype.addReturnLink = function() {
    return '<a href="" id="back_to_notes">Back to All Notes</a></br>';
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
