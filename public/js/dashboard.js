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
  
      const response = await fetch(`/"filler"/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/"filler"');
      } else {
        alert('Failed to delete Note');
      }
    }
  };
  
  document
  .getElementById('#deleteToDo')
  .addEventListener('click', delToDO);

  document
  .getElementById('#deleteNote')
  .addEventListener('click', delNotes);