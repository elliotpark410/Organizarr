
// Delete Todo List
const delToDO = async (event) => {
  console.log('testing delete todo button');
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/todo/${id}`, {
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

// add Todo
  const newToDo = async (event) => {
    console.log('testing save todos button');
    event.preventDefault();
  
    const desc = document.querySelector('#toDo').value.trim();
    if (desc) {
      const response = await fetch(`/api/todo`, {
        method: 'POST',
        body: JSON.stringify({ description: desc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create toDO');
      }
    }
  };

  // const displayToDo = () => {
  //   const response = await fetch(`/api/todo`, {
  //     method: 'GET',
  //     body: JSON.stringify({ description: desc }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

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
// create study group
  const createSG = async (event) => {
    event.preventDefault();
    const url = document.querySelector('#sgLink').value.trim();
    const date = document.querySelector('#date').value.trim();
    const time = document.querySelector('#sgTime').value.trim();
    const studyPreference = document.querySelector('#sgStyle').value.trim();
    const subject_name = document.querySelector('#sgSubject').value;
    if (url, time, studyPreference, subject_name) {
      const response = await fetch(`/api/studygroup`, {
        method: 'POST',
        body: JSON.stringify({ url, date, time, studyPreference, subject_name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/studygroup');
      } else {
        alert('Failed to create a study group');
      }
    }
  };

  


  document
  .getElementById('todoForm')
  .addEventListener('submit', newToDo);

  document
  .getElementById('deleteToDo')
  .addEventListener('click', delToDO);

  document
  .getElementById('addNote')
  .addEventListener('click', newNote);

  document
  .getElementById('deleteNote')
  .addEventListener('click', delNotes);

  document
  .getElementById('submitSG')
  .addEventListener('click', createSG);

