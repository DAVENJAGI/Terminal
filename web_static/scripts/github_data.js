const userData = {
    githubUserToken: "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",
    githubUserName: "davenjagi",
};

import("node-fetch");
var fs = require("fs");

const queryUserData = {
    query:`
        query{
            user(login: "${userData.githubUserName}") {
                repositories{
                    totalCount
                }
                followers{
                    totalCount
                }
                following{
                    totalCount
                }
                organizations{
                    totalCount
                }
                contributions{
                    totalCount
                }
            }
        }`
}
const fetchUserData = async() => {
    try{
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization: Bearer ${userData.githubUserToken}",
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
