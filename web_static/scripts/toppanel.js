
function displayName() {
  const ownerName = document.getElementById('ownerName');
  const ownerButton = document.getElementById('topPanelHeaderButton1');

  ownerButton.addEventListener('mouseover', () => {
    ownerName.style.transform = 'scale(1.05)';
  });
  
  ownerButton.addEventListener('mouseout', () => {
    ownerName.style.transform = 'scale(1)';
  });
}



function displayNoRepos() {
  const repoNumber = document.getElementById('repoNumber');
  const reposButton = document.getElementById('topPanelHeaderButton2');

  reposButton.addEventListener('mouseover', () => {
    repoNumber.style.transform = 'scale(1.05)';
  });
  
  reposButton.addEventListener('mouseout', () => {
    repoNumber.style.transform = 'scale(1)';
  });  
}

function displayTotalCommits() {
  const totalCommits = document.getElementById('totalCommits');
  const commitsButton = document.getElementById('topPanelHeaderButton3');

  commitsButton.addEventListener('mouseover', () => {
    totalCommits.style.transform = 'scale(1.05)';
  });
  
  commitsButton.addEventListener('mouseout', () => {
    totalCommits.style.transform = 'scale(1)';
  });  
}

function displayPrivateRepos() {
  const privateRepos = document.getElementById('privateRepos');
  const privateRepoButton = document.getElementById('topPanelHeaderButton4');

  privateRepoButton.addEventListener('mouseover', () => {
    privateRepos.style.transform = 'scale(1.05)';
  });
  
  privateRepoButton.addEventListener('mouseout', () => {
    privateRepos.style.transform = 'scale(1)';
  });  
}

function displayPublicRepos() {
  const publicRepos = document.getElementById('publicRepos');
  const publicRepoButton = document.getElementById('topPanelHeaderButton5');

  publicRepoButton.addEventListener('mouseover', () => {
    publicRepos.style.transform = 'scale(1.05)';
  });
  
  publicRepoButton.addEventListener('mouseout', () => {
    publicRepos.style.transform = 'scale(1)';
  });
}

function displayContributions() {
  const contributions = document.getElementById('contributions');
  const contributionsButton = document.getElementById('topPanelHeaderButton6');

  contributionsButton.addEventListener('mouseover', () => {
    contributions.style.transform = 'scale(1.05)';
  });
  
  contributionsButton.addEventListener('mouseout', () => {
    contributions.style.transform = 'scale(1)';
  });
}

function displayEmail() {
  const email = document.getElementById('emailDisplay');
  const emailButton = document.getElementById('topPanelHeaderButton7');

  emailButton.addEventListener('mouseover', () => {
    email.style.transform = 'scale(1.05)';
  });
  
  emailButton.addEventListener('mouseout', () => {
    email.style.transform = 'scale(1)';
  });
}

function displayInfoDiv() {
  const infoDiv = document.getElementById('infoDiv');
  if (infoDiv.style.display === 'none') {
    infoDiv.style.display = 'block';
  } else {
    infoDiv.style.display = 'none';
  }
  topPanelHeaderDropdown.style.transform = infoDiv.style.display === 'block' ? 'rotate(180deg)' : 'none';
}

