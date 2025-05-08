import express from 'express';
import axios from 'axios';
const app = express();
const port = 8080;

// Your Spotify credentials
const CLIENT_ID = 'fed118c53bb44b91b0c6d52f247be413';
const CLIENT_SECRET = '14e161789df04550834f0e3026bd1128';
const REDIRECT_URI = 'http://localhost:8080/callback';

app.get('/', (req, res) => {
  res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read`);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    // Display the tokens
    res.send(`
      <h1>Authentication Successful!</h1>
      <p>Add these to your .env file:</p>
      <pre>
VITE_SPOTIFY_CLIENT_ID=${CLIENT_ID}
VITE_SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}
VITE_SPOTIFY_REFRESH_TOKEN=${response.data.refresh_token}
      </pre>
    `);
    
  } catch (error) {
    res.send('Error: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Auth server running at http://localhost:${port}`);
});