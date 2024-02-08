const userData = {
    githubUserToken: "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",
    githubUserName: "DAVENJAGI",
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
