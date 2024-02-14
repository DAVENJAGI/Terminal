async function getRepositoryData() {
    
    try {
        const response = await fetch('scripts/data/data.json')
        const parsedData = await response.json();
    
        const repositorySize = [];
        const repositoryNumber = [];
        const repositoryName = [];
        
        for (const repository of parsedData) { 
            repositorySize.push(repository["size"]);
            repositoryNumber.push(repository["name"]);
            if (!repositoryName.includes(repository["name"])) {
              repositoryName.push(repository["name"]);
            }
          }
      
           
        const uniqueRepoNames = Array.from(new Set(repositoryName)); // Eliminate duplicates

        const selectElement = document.getElementById('topPanelRepoButton1');
        selectElement.innerHTML = '';
        
        //makes sure that the default value on load on the dropdown is string repositories
        const placeholderOption = document.createElement('option');
        placeholderOption.value = 'repositories';
        placeholderOption.textContent = 'repositories';
        selectElement.appendChild(placeholderOption);
        
        const directoryNumber =document.getElementById('directoryNumber');
        const updatedAt = document.getElementById('updatedAt1');
        const createdAt  = document.getElementById('createdAt1');
        // Sets the div to - on loading
        if (placeholderOption.value == 'repositories') {
            directoryNumber.textContent = '-';
            fileNumber.textContent = '-';
            visibility.textContent = '-';
            createdAt.textContent = '-';
            updatedAt.textContent = '-';
            openIssues.textContent = '-';
        } else{}

        uniqueRepoNames.forEach(repository => {
            
            const option = document.createElement('option');
            option.value = repository;
            option.textContent = repository;
            selectElement.appendChild(option);
        });

        selectElement.addEventListener('change', async (event) => {
            const selectedRepository = event.target.value;

            const directoryNumber =document.getElementById('directoryNumber');
            const fileNumber =document.getElementById('fileNumber');
            // Changes back the divs to - if there'it's repository that's selected.
            if (selectedRepository == 'repositories') {
                directoryNumber.textContent = '-';
                fileNumber.textContent = '-';
                visibility.textContent = '-';
                createdAt.textContent = '-';
                updatedAt.textContent = '-';
                openIssues.textContent = '-';
            }
            
            try{
                
                const response = await fetch(`scripts/data/${selectedRepository}.json`);
                if (!response.ok) {
                    throw new Error(`failed to fetch data for ${selectedRepository}: {response.status}`);
                }
                const parsedData = await response.json();
                
                const repoName = selectedRepository;
                console.log(`repo name: ${repoName}`);

                const count = [];
                var dirCount = 0;
                var fileCount = 0;
                
                for(const dataItem of parsedData) {
                    (count.push(dataItem['type']))
                } console.log(count);
                

                // function to count the number of directories
                for (const item of count) {
                    if (item === 'dir') {
                        dirCount++;
                    }
                }
                directoryNumber.textContent = '-';
                if (dirCount === 0 ) {
                    directoryNumber.textContent = '-';
                } else {
                    directoryNumber.textContent = dirCount;
                }
                 console.log(dirCount);

                // function to count the number of files
                for (const item of count) {
                    if (item === 'file') {
                        fileCount++;
                    }
                }
                if (fileCount === 0) {
                    fileNumber.textContent = '-';
                } else {
                    fileNumber.textContent = fileCount;
                }
                 console.log(fileCount);

            } catch (error){
                console.error("The error is: ", error);
            }
            selectElement.addEventListener('change', async (event) => {
                const selectedRepository = event.target.value;

                const response = await fetch(`scripts/data/data.json`);
                if (!response.ok) {
                    throw new Error(`failed to fetch data from data.json: {response.status}`);
                }

                const parsedData = await response.json();
                const createdAt = document.getElementById('createdAt1');
                const updatedAt = document.getElementById('updatedAt1');
                const repoVisibility = document.getElementById('visibility');
                const openIssues = document.getElementById('openIssues');

                for (const repository of parsedData) {
                    if (repository.name === selectedRepository) {
                        createdAt.textContent = repository.created_at;
                        console.log(repository.created_at)
                        break;
                    }
                }
                for (const repository of parsedData) {
                    if (repository.name === selectedRepository) {
                        updatedAt.textContent = repository.updated_at;
                        console.log(repository.updated_at)
                        break;
                    } else {
                        console.log('repo not found');
                    }
                }
                for (const repository of parsedData) {
                    if (repository.name === selectedRepository) {
                        repoVisibility.textContent = repository.visibility;
                        console.log(repository.visibility)
                        break;
                    } else {
                        console.log('visibility not found');
                    }
                }
                for (const repository of parsedData) {
                    if (repository.name === selectedRepository) {
                        openIssues.textContent = repository.open_issues;
                        console.log(repository.open_issues)
                        break;
                    } else {
                        console.log('open_issues not found');
                    }
                }
                console.log('');
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
window.onload = getRepositoryData();