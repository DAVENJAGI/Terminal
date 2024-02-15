function displayNoDirs() {
    const elementId1 = document.getElementById('directoryNumber');
    const noOfFilesButton = document.getElementById('topPanelRepoButton2');
   
    noOfFilesButton.addEventListener('mouseover', () => {
      elementId1.style.transform = 'scale(1.05)';
    });
    
   noOfFilesButton.addEventListener('mouseout', () => {
        elementId1.style.transform = 'scale(1)';
    });
  }
  window.onload = displayNoDirs;
  
function displayNoFiles() {
    const fileNumber = document.getElementById('fileNumber');
    const fileNoButton = document.getElementById('topPanelRepoButton3');
    
    fileNoButton.addEventListener('mouseover', () => {
      fileNumber.style.transform = 'scale(1.05)';
    });
    
    fileNoButton.addEventListener('mouseout', () => {
      fileNumber.style.transform = 'scale(1)';
    });  
}
window.onload = displayNoFiles;
  
function displayVisibility() {
    const visibility = document.getElementById('visibility');
    const visibilityButton = document.getElementById('topPanelRepoButton4');
     
    visibilityButton.addEventListener('mouseover', () => {
      visibility.style.transform = 'scale(1.05)';
    });
    
    visibilityButton.addEventListener('mouseout', () => {
      visibility.style.transform = 'scale(1)';
    });  
}
window.onload = displayVisibility;
  
function displayCreatedAtRepo() {
    const createdAt = document.getElementById('createdAt1');
    const createdAtButton = document.getElementById('topPanelRepoButton4');
      
    createdAtButton.addEventListener('mouseover', () => {
      createdAt.style.transform = 'scale(1.05)';
    });
    
    createdAtButton.addEventListener('mouseout', () => {
      createdAt.style.transform = 'scale(1)';
    });  
}
window.onload = displayCreatedAtRepo;
  
  function displayUpdatedAtRepo() {
    const updatedAt = document.getElementById('updatedAt1');
    const updatedAtButton = document.getElementById('topPanelRepoButton5');
  
    
    updatedAtButton.addEventListener('mouseover', () => {
      updatedAt.style.transform = 'scale(1.05)';
    });
    
    updatedAtButton.addEventListener('mouseout', () => {
      updatedAt.style.transform = 'scale(1)';
    });
}
window.onload = displayUpdatedAtRepo;

function displayOpenIssues() {
    const openIssues = document.getElementById('openIssues');
    const openIssuesButton = document.getElementById('topPanelRepoButton6');
      
  
    openIssuesButton.addEventListener('mouseover', () => {
      openIssues.style.transform = 'scale(1.05)';
    });
    
    openIssuesButton.addEventListener('mouseout', () => {
      openIssues.style.transform = 'scale(1)';
    });
}
window.onload = displayOpenIssues;
  
function displayRepoInfoDiv() {
    const infoDiv = document.getElementById('repoInfoDiv');
    if (infoDiv.style.display === 'none') {
      infoDiv.style.display = 'block';
    } else {
      infoDiv.style.display = 'none';
    }
    topPanelRepoDropdown.style.transform = infoDiv.style.display === 'block' ? 'rotate(180deg)' : 'none';
}