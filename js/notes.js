/**
 * Loads notes from local storage and displays them.
 */
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";

    notes.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.id = note.id;
        li.appendChild(deleteBtn);

        notesList.appendChild(li);
    })
}

loadNotes();