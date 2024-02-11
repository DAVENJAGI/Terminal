fetch('stats/data.json')
  .then(response => response.json())
  .then(data => {
    const repositorySize = [];
    const repositoryNumber = [];
    const repositoryName = [];

    // Process the data here
    for (const repository of data) {
      repositorySize.push(repository["size"]);
      repositoryNumber.push(repository["name"]);
      // Handle duplicate names by checking if already added
      if (!repositoryName.includes(repository["name"])) {
        repositoryName.push(repository["name"]);
      }
    }

    const uniqueRepoNames = Array.from(new Set(repositoryName)); // Eliminate duplicates

    console.log("no of repos: ", uniqueRepoNames.length);
    console.log("size of repos: ", repositorySize);
    console.log("repo names: ", uniqueRepoNames);

    // Use the processed data for visualization, calculations, etc.
  })
  .catch(error => console.error(error));