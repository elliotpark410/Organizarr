// Delete a note
const delNotes = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete Note');
      }
    }
  };

// Create Note
const newNote = async (event) => {
    event.preventDefault();
    const title = document.querySelector('.note-title').value.trim();
    const desc = document.querySelector('.note-textarea').value.trim();
    if (title, desc) {
      const response = await fetch(`/api/notes`, {
        method: 'POST',
        body: JSON.stringify({ title: title, description: desc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create a notes');
      }
    }
  };
// event listener to run delNote
  var deleteNote = document.querySelectorAll('.deleteNote')
  for (let i = 0; i < deleteNote.length; i++) {
    deleteNote[i].addEventListener('click', delNotes);
  };

  // event listner to run newNote
  document.getElementById('addNote').addEventListener('click', newNote);