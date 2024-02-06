function toggleWindow() {
  const profileWindow = document.getElementById('profileWindow');
  if (profileWindow.style.display === 'none') {
    profileWindow.style.display = 'block';
  } else {
    profileWindow.style.display = 'none';
  }
}
function showUserInfo() {
  const aboutInfo = document.getElementById('aboutInfo');
  if (aboutInfo.style.display === 'none') {
    aboutInfo.style.display = 'block';
  } else {
    aboutInfo.style.display = 'none';
  }
}

function showUserDetails() {
  const detailsButton = document.getElementById('#organization, #portfolio, #socials');
  detailsButton.forEach(button => {
    if (otherInfo.style.display === 'none') {
      otherInfo.style.display = 'block';
    } else {
      otherInfo.style.display = 'none';
    }
  })
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