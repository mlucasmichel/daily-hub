document.addEventListener("DOMContentLoaded", () => {
  const notesForm = document.getElementById("notes-form");
  const noteInput = document.getElementById("note-input");
  const notesList = document.getElementById("notes-list");

  /**
   * Loads notes from local storage and displays them.
   */
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = "";

    notes.forEach((note) => {
      const li = document.createElement("li");
      li.classList.add("note-item");

      const noteText = document.createElement("span");
      noteText.textContent = note.text;
      li.appendChild(noteText);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.dataset.id = note.id;
      deleteBtn.classList.add("delete-btn");
      li.appendChild(deleteBtn);

      notesList.appendChild(li);
    });
  }

  loadNotes();

  notesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = noteInput.value.trim();
    if (text === "") return;

    const newNote = {
      id: Date.now(),
      text: text,
    };

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();

    noteInput.value = "";
  });

  /**
   * Deletes a note from local storage.
   */
  function deleteNote(event) {
    if (event.target.tagName === "BUTTON") {
      const id = Number(event.target.dataset.id);
      let notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes = notes.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(notes));
      loadNotes();
    }
  }

  notesList.addEventListener("click", deleteNote);
});
