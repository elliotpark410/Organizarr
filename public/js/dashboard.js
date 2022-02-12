// Delete Todo List
const delToDO = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/"filler"/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/"filler"');
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
        document.location.replace('/BLANK');
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
        document.location.replace('/BLANK');
      } else {
        alert('Failed to create toDO');
      }
    }
  };
  // Create Note
  const newNote = async (event) => {
    event.preventDefault();
    const title = document.querySelector('NEED INPUT FORM').value.trim();
    const desc = document.querySelector('NEED INPUT FORM').value.trim();
    if (title, desc) {
      const response = await fetch(`/BLANK`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/BLANK');
      } else {
        alert('Failed to create a notes');
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
  .querySelector('NEED CLASS')
  .addEventListener('submit', newNote);