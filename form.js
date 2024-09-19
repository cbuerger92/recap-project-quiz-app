console.clear();

// == > submit-Event abfangen

// Wählt Formular aus
const form = document.querySelector("form");

//Event Listener auf Submit-Event
form.addEventListener("submit", function (event) {
  // Verhindert neu laden der Seite
  event.preventDefault();

  //Test in Konsole
  console.log("Formular wurde abgeschickt!");

  // == > Auslesen und in Variablen speichern

  // Eingabe lesen aus Inputfeldern
  const question = document.querySelector("#question").value;
  const answer = document.querySelector("#answer").value;
  const tag = document.querySelector("#tag").value;

  // Test in Konsole
  console.log("Frage:", question);
  console.log("Antwort:", answer);
  console.log("Tag:", tag);
});
