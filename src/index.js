var noteList = new NoteList();

var noteController = new NoteController(noteList);
listenForFormSubmit();
makeURLChangeShowNoteForCurrentPage();

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
