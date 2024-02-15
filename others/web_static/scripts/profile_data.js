async function getFollowersNumber() {
    //let data = fetch('scripts/stats/data.json');

    try {
        const response = await fetch('scripts/data/user.json')
        const parsedData = await response.json();
    
        const followers = parsedData.followers;
        const following = parsedData.following;
        const ownerName = parsedData.login;
        const repoNumber = parsedData.public_repos;
        const createdAt = parsedData.created_at;
        const updatedAt = parsedData.updated_at;
        const privateRepos = parsedData.private_repos;
        const publicRepos = parsedData.public_repos;
        const email = parsedData.email;
        const location = parsedData.location;

        //Appending the data to followers
        const selectElementFollowers = document.getElementById('followers_number');
        selectElementFollowers.textContent = followers;

        //appending data to folowing
        const selectElementFollowing = document.getElementById('following_number');
        selectElementFollowing.textContent = following;


        console.log("followers: ", followers);
        console.log('following:', following);

        //appending data to ownner's name
        const selectElementOwnerName = document.getElementById('ownerName');
        selectElementOwnerName.textContent = ownerName;

        //appending data to repos number
        const selectElementRepoNumber = document.getElementById('repoNumber');
        selectElementRepoNumber.textContent = repoNumber;

        //appending data to created at
        const selectElementCreatedAt = document.getElementById('createdAt');
        selectElementCreatedAt.textContent = createdAt;

        //appending data to updated at
        const selectElementUpdatedAt = document.getElementById('updatedAt');
        selectElementUpdatedAt.textContent = updatedAt;

        //appending data to privaterepos
        const selectElementPrivateRepos = document.getElementById('privateRepos');
        if (!privateRepos) {
            selectElementPrivateRepos.textContent = '-';
        }

        // appending public repos data
        const selectElementPublicRepo = document.getElementById('publicRepos');
        selectElementPublicRepo.textContent = publicRepos;

        // appending public repos data
        const selectElementEmail = document.getElementById('emailDisplay');
        if (email === null) {
            selectElementEmail.textContent = '-';
        } else {
            selectElementEmail.textContent = email;
        }

        //appending data to location
        const selectElementLocation = document.getElementById('location');
        selectElementLocation.textContent = location;


    } catch(error) {
        console.error("the error is: ", error);
    }
}
window.onload = getFollowersNumber();