// Delete Todo List
const delToDO = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/"filler"/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete todo');
      }
    }
  };
// Delete a note
  const delNotes = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/BLANK/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete Note');
      }
    }
  };
// add Todo
  const newToDo = async (event) => {
    event.preventDefault();
  
    const desc = document.querySelector('NEED INPUT FORM').value.trim();
    if (desc) {
      const response = await fetch(`/BLANK`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create toDO');
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
        body: JSON.stringify({ title, description }),
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
// create study group
  const createSG = async (event) => {
    event.preventDefault();
    const url = document.querySelector('#sgLink').value.trim();
    const time = document.querySelector('#date').value.trim();
    const studyPreference = document.querySelector('#sgStyle').value.trim();
    const subject = document.querySelector('#sgSubject').value.trim();
    if (url, time, studyPreference, subject) {
      const response = await fetch(`/BLANK`, {
        method: 'POST',
        body: JSON.stringify({ url, time, studyPreference, subject_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create a study group');
      }
    }
  };




  document
  .getElementById('#deleteToDo')
  .addEventListener('click', delToDO);

  document
  .getElementById('#deleteNote')
  .addEventListener('click', delNotes);

  document
  .querySelector('NEED CLASS')
  .addEventListener('submit', newToDo);

  document
  .querySelector('#addNote')
  .addEventListener('submit', newNote);

  document
  .querySelector('.submitSG')
  .addEventListener('submit', createSG);