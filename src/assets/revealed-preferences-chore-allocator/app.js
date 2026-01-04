// 1. Define your chores here:
const chores = [
  'Clean counter',
  'Sweep',
  'Do dishes',
  // you can add more chores to this list
];

window.addEventListener('DOMContentLoaded', () => {
  const formArea = document.getElementById('form-area');

  // 2. Render inputs for each chore and each person
  chores.forEach((chore, idx) => {
    const row = document.createElement('div');
    row.className = 'task-row';

    row.innerHTML = `
      <label>${chore}</label>
      You:      <input type="number" min="0" max="100" data-person="you"      data-index="${idx}" placeholder="0">
      Roommate:<input type="number" min="0" max="100" data-person="roommate" data-index="${idx}" placeholder="0">
    `;
    formArea.appendChild(row);
  });

  // 3. Handle form submission
  document.getElementById('bids-form').addEventListener('submit', e => {
    e.preventDefault();

    // Collect bids
    const inputs = document.querySelectorAll('input');
    const bids = { you: [], roommate: [] };
    inputs.forEach(input => {
      const p = input.dataset.person;
      const i = input.dataset.index;
      bids[p][i] = Number(input.value) || 0;
    });

    // Validate sums
    const sum = arr => arr.reduce((a, b) => a + b, 0);
    if (sum(bids.you) !== 100 || sum(bids.roommate) !== 100) {
      showError('Each person must allocate exactly $100 across all chores.');
      return;
    }
    clearError();

    // Allocate chores
    const assignment = chores.map((chore, i) => {
      return bids.you[i] < bids.roommate[i]
        ? `You do "${chore}" ($${bids.you[i]} vs $${bids.roommate[i]})`
        : `Roommate does "${chore}" ($${bids.roommate[i]} vs $${bids.you[i]})`;
    });

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h2>Chore Assignment</h2>
      <ul>
        ${assignment.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  });
});

function showError(msg) {
  let err = document.getElementById('error');
  if (!err) {
    err = document.createElement('div');
    err.id = 'error';
    document.querySelector('form').after(err);
  }
  err.textContent = msg;
}

function clearError() {
  const err = document.getElementById('error');
  if (err) err.remove();
}
