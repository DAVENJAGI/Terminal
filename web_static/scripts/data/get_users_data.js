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

    await fs.promises.writeFile("stats/user.json", JSON.stringify(data, null, 2)); // Serialize to JSON

    console.log("Data exported to user.json"); // Use the correct filename
  } catch (error) {
    console.error(error.message);
  }
}

fetchUserData();