document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('[type="submit"]');
    const submitButton = document.getElementById('submitButton');
    
    // Event listener for form submission
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log("Hello");

        // Get the data from the form fields
        const username = document.getElementById('name').value;
        console.log("username: ", username);
        // const token = document.getElementById('token').value;

        const requestUrl = `https://api.github.com/users/${username}`;

        try {
            const response = await fetch(requestUrl);
           
            if (!response.ok) {
                throw new Error(`Github user couldn't be found (status: ${response.status})`);
                console.log("couldn't get data");
            } else {
                const data = await response.json();
               // await fs.promises.writeFile("..landingpage/scripts/user.json", JSON.stringify(data, null, 2));

               sessionStorage.setItem('userData', JSON.stringify(data));
               username.textContet = "";
               const user = data.login;
               console.log(user);
            }

            console.log("your code executed successfuly");
        } catch (error) {
            console.error(error.message);
        }
    });
});

function showEnterUsername() {
    document.getElementById('enterUserData').style.display = 'block';
}