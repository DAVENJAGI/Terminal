async function fetchUserData() {
  const fs = require('fs');
  const userName = process.argv[2];
  const url = `https://api.github.com/users/${userName}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Github user couldn't be found (status: ${response.status})`);
    }

    const data = await response.json();

    await fs.promises.writeFile("data.json", JSON.stringify(data)); // Serialize to JSON

    console.log("Data exported to data.json"); // Use the correct filename
  } catch (error) {
    console.error(error.message);
  }
}

fetchUserData();