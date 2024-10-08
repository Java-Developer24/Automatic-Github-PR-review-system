import dotenv from "dotenv"
dotenv.config();

const GITHUB_CLIENT_ID="Ov23liUc212oQckd6RDF"

const redirectUri=`${process.env.APP_URL}/auth/github/callback`

document.getElementById("githubLoginButton").addEventListener("click",()=>{
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo%20user&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = githubOAuthUrl;

});