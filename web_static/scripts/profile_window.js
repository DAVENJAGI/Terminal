/*document.addEventListener('DOMContentLoaded', function() {*/

function toggleWindow() {
  const profileWindow = document.getElementById('profileWindow');
  if (profileWindow.style.display === 'none') {
    profileWindow.style.display = 'block';
  } else {
    profileWindow.style.display = 'none';
  }
}
function displayFollowers() {
  const followersNumber = document.getElementById('followers_number');

  async function fetchFollowers() {
    /*const response = await fetch('https://api.github.com/users/davenjagi');*/
    const data = await response.json();

    followersNumber.textContent = data.following;
  }
  fetchFollowers();
}
displayFollowers();

function showUserInfo() {
  const aboutInfo = document.getElementById('aboutInfo');
  if (aboutInfo.style.display === 'none') {
    aboutInfo.style.display = 'block';
  } else {
    aboutInfo.style.display = 'none';
  }
}

function showUserDetails() {
  const detailsInfo = document.getElementById('otherInformation');
  if (detailsInfo.style.display === 'none') {
    detailsInfo.style.display = 'block';
  } else {
    detailsInfo.style.display = 'none';
  }
}

function showCompanyName() {
  const companyOrganization = document.getElementById('companyOrganization');
  if (companyOrganization.style.display === 'none') {
    companyOrganization.style.display = 'block';
  } else {
    companyOrganization.style.display = 'none';
  }
}

function showPortfolioLink() {
  const portfolioLink = document.getElementById('portfolioLink');
  if (portfolioLink.style.display === 'none') {
    portfolioLink.style.display = 'block';
  } else {
    portfolioLink.style.display = 'none';
  }
}

function showSocialPrescence() {
  const socialmediaLinks = document.getElementById('socialmediaLinks');
  if (socialmediaLinks.style.display === 'none') {
    socialmediaLinks.style.display = 'block';
  } else {
    socialmediaLinks.style.display = 'none';
  }
}