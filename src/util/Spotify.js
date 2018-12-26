let accessToken;
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = '973bce2bf0a44737b365960870fa3cb6';
const redirectUrl = 'http://localhost:3000/';

const Spotify ={


getAccessToken(accessToken) {
if(accessToken){
  return accessToken;
}
      const hasAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const hasExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

      if(hasAccessToken && hasExpiresIn) {
        accessToken = hasAccessToken[1];
        const expiresIn = Number(hasExpiresIn[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
}

}


};



export default Spotify;
