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
.getElementById('submitSG')
.addEventListener('click', createSG);