const userData = {
    githubUserToken: "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",
    githubUserName: "DAVENJAGI"
};

const fetch = require("node-fetch");
var fs = require("fs");

const queryUserData = {
    query:`
        query{
            user(login: "${userData.githubUserName}") {
                repositories
                followers
                followers
                organizations
                contributions
            }
        }`
}
const fetchUserData = async() => {
    try{
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userData.githubUserToken}`,
            },
            body: JSON.stringify(queryUserData),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
fetchUserData();
