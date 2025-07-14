// Get saved votes or default to 0
let rcbVotes = parseInt(localStorage.getItem('rcbVotes')) || 0;
let pbksVotes = parseInt(localStorage.getItem('pbksVotes')) || 0;

// Show current votes
updateVotes();

function vote(team) {
  if (team === 'RCB') {
    rcbVotes++;
    localStorage.setItem('rcbVotes', rcbVotes);
  } else if (team === 'PBKS') {
    pbksVotes++;
    localStorage.setItem('pbksVotes', pbksVotes);
  }
  updateVotes();
}

function updateVotes() {
  document.getElementById('rcb-votes').textContent = rcbVotes;
  document.getElementById('pbks-votes').textContent = pbksVotes;

  let total = rcbVotes + pbksVotes;
  let rcbPercent = total ? (rcbVotes / total) * 100 : 0;
  let pbksPercent = total ? (pbksVotes / total) * 100 : 0;

  document.getElementById('rcb-bar').style.width = rcbPercent + '%';
  document.getElementById('pbks-bar').style.width = pbksPercent + '%';

  // Optional: Show % text inside bars
  document.getElementById('rcb-bar').textContent = Math.round(rcbPercent) + '%';
  document.getElementById('pbks-bar').textContent = Math.round(pbksPercent) + '%';
}
