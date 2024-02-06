/*function displayName() {
  const ownerName = document.getElementById('ownerName');
  if (ownerName.style.display === 'none') {
    ownerName.style.display = 'block';
  } else {
    ownerName.style.display = 'none';
  }
}

function displayNoRepos() {
  const repoNumber = document.getElementById('repoNumber');
  if (repoNumber.style.display === 'none') {
    repoNumber.style.display = 'block';
  } else {
    repoNumber.style.display = 'none';
  }
}

function displayTotalCommits() {
  const totalCommits = document.getElementById('totalCommits');
  if (totalCommits.style.display === 'none') {
    totalCommits.style.display = 'block';
  } else {
    totalCommits.style.display = 'none';
  }
}

function displayPrivateRepos() {
  const privateRepos = document.getElementById('privateRepos');
  if (privateRepos.style.display === 'none') {
    privateRepos.style.display = 'block';
  } else {
    privateRepos.style.display = 'none';
  }
}

function displayPublicRepos() {
  const publicRepos = document.getElementById('publicRepos');
  if (publicRepos.style.display === 'none') {
    publicRepos.style.display = 'block';
  } else {
    publicRepos.style.display = 'none';
  }
}

function displayContributions() {
  const contributions = document.getElementById('contributions');
  if (contributions.style.display === 'none') {
    contributions.style.display = 'block';
  } else {
    contributions.style.display = 'none';
  }
}

function displayEmail() {
  const email = document.getElementById('email');
  if (email.style.display === 'none') {
    email.style.display = 'block';
  } else {
    email.style.display = 'none';
  }
}
*/

function displayInfoDiv() {
  const infoDiv = document.getElementById('infoDiv');
  if (infoDiv.style.display === 'none') {
    infoDiv.style.display = 'block';
  } else {
    infoDiv.style.display = 'none';
  }
  topPanelHeaderDropdown.style.transform = infoDiv.style.display === 'block' ? 'rotate(180deg)' : 'none';
}

