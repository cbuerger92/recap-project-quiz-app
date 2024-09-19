console.clear();

// == > Bookmark Toggle

// Holt den Bookmark-Button
const bookmarkButton = document.querySelector(
  ".card__button-bookmark .bookmark"
);

// Fügt einen Event-Listener für den Bookmark-Button hinzu
bookmarkButton.addEventListener("click", () => {
  // Togglet die Klasse, um das visuelle Erscheinungsbild zu ändern
  bookmarkButton.classList.toggle("bookmark--active");
});

// == > Answer-Button

// Holt den Antwort-Button und den Antwort-Text
const answerButton = document.querySelector(".card__button-answer");
const answerText = document.querySelector(".card__answer");

// Event-Listener für den Antwort-Button
answerButton.addEventListener("click", () => {
  console.log("Button clicked");
  // Togglet die Klasse 'hidden' für die Antwort
  answerText.classList.toggle("hidden");
  console.log(
    "Answer text contains 'hidden':",
    answerText.classList.contains("hidden")
  );

  // Wechselt den Text des Antwort-Buttons basierend auf der Sichtbarkeit der Antwort
  if (answerText.classList.contains("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
});
