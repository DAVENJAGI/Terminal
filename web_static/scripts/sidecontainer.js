function dropCommits() {
  const commitPlotGraph = document.getElementById('commitPlotGraph');
  if (commitPlotGraph.style.display === 'none') {
    commitPlotGraph.style.display = 'block';
  } else {
    commitPlotGraph.style.display = 'none';
  }
}
/*
function showUserDetails() {
  const commitPlotGraph = document.getElementById('commitPlotGraph');
  if (commitPlotGraph.style.display === 'none') {
    commitPlotGraph.style.display = 'block';
  } else {
    commitPlotGraph.style.display = 'none';
  }
}
*/

function dropPullRequests() {
  const requestsPlotGraph = document.getElementById('requestsPlotGraph');
  if (requestsPlotGraph.style.display === 'none') {
    requestsPlotGraph.style.display = 'block';
  } else {
    requestsPlotGraph.style.display = 'none';
  }
}

function dropWatchers() {
  const watchersPlotGraph = document.getElementById('watchersPlotGraph');
  if (watchersPlotGraph.style.display === 'none') {
    watchersPlotGraph.style.display = 'block';
  } else {
    watchersPlotGraph.style.display = 'none';
  }
}

function dropCodeFrequency() {
  const codeFrequencyPlotGraph = document.getElementById('codeFrequencyPlotGraph');
  if (codeFrequencyPlotGraph.style.display === 'none') {
    codeFrequencyPlotGraph.style.display = 'block';
  } else {
    codeFrequencyPlotGraph.style.display = 'none';
  }
}

function dropViews() {
  const viewsPlotGraph = document.getElementById('viewsPlotGraph');
  if (viewsPlotGraph.style.display === 'none') {
    viewsPlotGraph.style.display = 'block';
  } else {
    viewsPlotGraph.style.display = 'none';
  }
}

function moreStats() {
  const allStatsButton = document.getElementById('allStatsButton');
  if (allStatsButton.style.display === 'none') {
    allStatsButton.style.display = 'block';
  } else {
    allStatsButton.style.display = 'none';
  }
}

function dropAllGithubStats() {
  const bottomPannel = document.getElementById('bottomPannel');
  if (bottomPannel.style.display === 'none') {
    bottomPannel.style.display = 'block';
  } else {
    bottomPannel.style.display = 'none';
  }
}


