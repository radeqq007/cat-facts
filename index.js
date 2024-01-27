document.getElementById('new-fact').addEventListener('click', () => {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to retrieve data from website.');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data[0].text);
      document.getElementById('fact').textContent = data[0].text;
    })
    .catch((err) => {
      console.log(err);
    });
});
