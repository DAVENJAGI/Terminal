async function fetchUserData() {
    const fs = require('fs');
    // const userName = process.argv[2];
    const repositories = ["0x07-python-test_driven_development", "AirBnB_clone", "AirBnB_clone_v2", "AirBnB_clone_v3", "alx-higher_level_programming", "alx-low_level_programming", "alx-system_engineering-devops", "alx-zero_day", "binary_trees", "From-zero-to-Hero-in-c-Programming", "HBnB_clone", "monty", "printf", "Python_4_Everyone", "Shell_practical", "sorting_algorithms", "Terminal", "zero_day"]
  
    try {
        for (const repository of repositories) {
            const url = `https://api.github.com/repos/davenjagi/${repository}/contents`;
            
            
            const response = await fetch(url);
  
        if (!response.ok) {
            throw new Error(`Github user couldn't be found (status: ${response.status})`);
        }
  
        const data = await response.json();

        const fileName = `${repository}.json`;
        await fs.promises.writeFile(fileName, JSON.stringify(data, null, 2)); // Serialize to JSON
        console.log(`Data exported to ${fileName}`); // Use the correct filename
        }
    } catch (error) {
      console.error(error.message);
    }
}
;fetchUserData();