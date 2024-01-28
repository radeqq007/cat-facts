const fact = document.getElementById('fact');
const newFact = document.getElementById('new-fact');

newFact.addEventListener('click', () => {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to retrieve data from website.');
      }
      return res.json();
    })
    .then((data) => {
      fact.textContent = data.text;
    })
    .catch((err) => {
      fact.textContent = 'An error occurred';
    });
});
