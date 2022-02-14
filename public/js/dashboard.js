
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


  


  document
  .getElementById('todoForm')
  .addEventListener('submit', newToDo);

  var deleteTodo = document.querySelectorAll('.deleteToDo')

  for (let i = 0; i < deleteTodo.length; i++) {
    deleteTodo[i].addEventListener('click', delToDO);
  }

  // document
  // .getElementById('addNote')
  // .addEventListener('click', newNote);

  // document
  // .getElementById('deleteNote')
  // .addEventListener('click', delNotes);




