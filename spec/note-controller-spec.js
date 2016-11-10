function testNoteControllerWorks() {
  var noteList = new NoteList();
  noteList.addNote("Good Morning");
  var note = noteList.returnNotes()[0];
  note.id = 1;
  var noteController = new NoteController(noteList);

  var element = document.createElement('div');
  element.id = "app";

  document.getElementById = function() {
    return element;
  };

  var modifiedElement = document.getElementById("app");
  noteController.insertHTML();

  var expectedHTML = '<ul><li><a href="#notes/1"><div>Good Morning</div></a></li></ul>';

  assert.isTrue(modifiedElement.innerHTML === expectedHTML);

}

function testNoteControllerDisplaysSingleNote() {
  var noteList = new NoteList();
  noteList.addNote("Good Morning");
  noteList.addNote("Good Night");
  var note = noteList.returnNotes()[0];
  note.id = 1;
  var noteController = new NoteController(noteList);
  var element = document.createElement('div');
  element.id = "app";

  noteController.insertHTML();
  window.location.hash = "#notes/1";
  var modifiedElement = document.getElementById("app");

  var expectedHTML = '<div>Good Morning</div>';

  assert.isTrue(modifiedElement.innerHTML === expectedHTML);

}

// function testNoteControllerAddsNewNote() {
//   var noteList = new NoteList();
//   noteList.addNote("Good Morning");
//   noteList.addNote("Good Night");
//   var note = noteList.returnNotes()[0];
//   note.id = 1;
//   var noteController = new NoteController(noteList);
//   console.log(noteController)
// }
//
// function createFakeApp() {
//   var noteList = new NoteList();
//   noteList.addNote("Good Morning");
//   noteList.addNote("Good Night");
//   var note = noteList.returnNotes()[0];
//   note.id = 1;
//   var noteController = new NoteController(noteList);
// }

testNoteControllerWorks();
testNoteControllerDisplaysSingleNote();
