(function(exports) {

  function Note(text) {
    this.text = text
    Note.numInstances = (Note.numInstances || 0) + 1;
    this.id = Note.numInstances
  }

  Note.prototype.returnText = function () {
    return this.text
  };

  exports.Note = Note;
  exports.returnText = this.returnText;
})(this);
