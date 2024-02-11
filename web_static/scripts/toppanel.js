function displayName() {
  const ownerName = document.getElementById('ownerName');
  const ownerButton = document.getElementById('topPanelHeaderButton1');

  async function fetchUsernameData() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaggggg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      ownerName.textContent = data.login;
    } catch (error) {
      ownerName.textContent = '-';
    }
  }
  fetchUsernameData();
  
  ownerButton.addEventListener('mouseover', () => {
    ownerName.style.transform = 'scale(1.05)';
  });
  
  ownerButton.addEventListener('mouseout', () => {
    ownerName.style.transform = 'scale(1)';
  });
}
window.onload = displayName;

function displayCreatedAt() {
  const createdAt = document.getElementById('createdAt');
  const commitsButton = document.getElementById('topPanelHeaderButton3');

  async function fetchRepoCreatedAt() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaghg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      createdAt.textContent = data.created_at;
    } catch (error) {
      createdAt.textContent = '-';
    }
  }
  fetchRepoCreatedAt();

  commitsButton.addEventListener('mouseover', () => {
    createdAt.style.transform = 'scale(1.05)';
  });
  
  commitsButton.addEventListener('mouseout', () => {
    createdAt.style.transform = 'scale(1)';
  });  
}
window.onload = displayCreatedAt;

function displayNoRepos() {
  const repoNumber = document.getElementById('repoNumber');
  const reposButton = document.getElementById('topPanelHeaderButton2');

  async function fetchRepoNumber() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaghg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      repoNumber.textContent = data.public_repos;
    } catch (error) {
      repoNumber.textContent = '-';
    }
  }
  fetchRepoNumber();

  reposButton.addEventListener('mouseover', () => {
    repoNumber.style.transform = 'scale(1.05)';
  });
  
  reposButton.addEventListener('mouseout', () => {
    repoNumber.style.transform = 'scale(1)';
  });  
}
window.onload = displayNoRepos;

function displayPrivateRepos() {
  const privateRepos = document.getElementById('privateRepos');
  const privateRepoButton = document.getElementById('topPanelHeaderButton4');

  async function fetchPrivateRepoNumber() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaghg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      privateRepos.textContent = data.public_repos;
    } catch (error) {
      privateRepos.textContent = '-';
    }
  }
  fetchPrivateRepoNumber();

  privateRepoButton.addEventListener('mouseover', () => {
    privateRepos.style.transform = 'scale(1.05)';
  });
  
  privateRepoButton.addEventListener('mouseout', () => {
    privateRepos.style.transform = 'scale(1)';
  });  
}
window.onload = displayPrivateRepos;

function displayPublicRepos() {
  const publicRepos = document.getElementById('publicRepos');
  const publicRepoButton = document.getElementById('topPanelHeaderButton5');

  async function fetchPublicRepoNumber() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaghg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      publicRepos.textContent = data.public_repos;
    } catch (error) {
      publicRepos.textContent = '-';
    }
  }
  fetchPublicRepoNumber();

  publicRepoButton.addEventListener('mouseover', () => {
    publicRepos.style.transform = 'scale(1.05)';
  });
  
  publicRepoButton.addEventListener('mouseout', () => {
    publicRepos.style.transform = 'scale(1)';
  });
}
window.onload = displayPublicRepos;
function displayUpdatedAt() {
  const updatedAt = document.getElementById('updatedAt');
  const contributionsButton = document.getElementById('topPanelHeaderButton6');

  async function fetchUpdatedAt() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaghg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      updatedAt.textContent = data.updated_at;
    } catch (error) {
      updatedAt.textContent = '-';
    }
  }
  fetchUpdatedAt();


  contributionsButton.addEventListener('mouseover', () => {
    updatedAt.style.transform = 'scale(1.05)';
  });
  
  contributionsButton.addEventListener('mouseout', () => {
    updatedAt.style.transform = 'scale(1)';
  });
}
window.onload = displayUpdatedAt;

function displayEmail() {
  const email = document.getElementById('emailDisplay');
  const emailButton = document.getElementById('topPanelHeaderButton7');

  async function fetchEmail() {
    try {
      /*const response = await fetch('https://api.github.com/users/davenjaghg');*/
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      email.textContent = data.email;
    } catch (error) {
      email.textContent = '-';
    }
  }
  fetchEmail();

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

