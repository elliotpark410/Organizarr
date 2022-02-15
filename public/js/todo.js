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
// event listener to run delToDo func
  var deleteTodo = document.querySelectorAll('.deleteToDo')
  for (let i = 0; i < deleteTodo.length; i++) {
    deleteTodo[i].addEventListener('click', delToDO);
  };

// event listener to run newToDo
document.getElementById('todoForm').addEventListener('submit', newToDo);

   // const displayToDo = () => {
  //   const response = await fetch(`/api/todo`, {
  //     method: 'GET',
  //     body: JSON.stringify({ description: desc }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }