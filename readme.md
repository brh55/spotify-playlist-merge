# spotify-playlist-merge [![Build Status](https://travis-ci.org/brh55/spotify-playlist-merge.svg?branch=master)](https://travis-ci.org/brh55/spotify-playlist-merge)

> A barebones CLI app to copy over tracks from another Spotify playlist

![image](https://user-images.githubusercontent.com/6020066/27460098-5fa1b03c-5777-11e7-803c-b41ad68dae5d.png)

## Install

```
$ npm install --global spotify-playlist-merge
```

## Usage
After the package is installed globally, execute the bin.

```
$ spotify-playlist-merge
```

### 1. Grab a OAuth Token
`spotify-playlist-merge` currently uses a temporary OAuth token to keep things simple. This token can be generated from the [Spotify Interactive Console](https://developer.spotify.com/web-api/console/get-playlist/) and hitting the "GET OAUTH TOKEN" button. In addition, you will need to grant basic scope permissions as seen below:

![Permissions](https://user-images.githubusercontent.com/6020066/27460166-c527830a-5777-11e7-91d5-7c44bcdd780d.png)

### 2. Getting the playlist ID & Spotify ID
1. Open the [Spotify Web Player](https://play.spotify.com), and navigate to your playlist or the desired playlist to copy
2. Your URL should look the following: 
`https://open.spotify.com/user/janedoe/playlist/37i9dQZF1DX4WYpdgoIcn6` or `https://open.spotify.com/user/1234819/playlist/37i9dQZF1DX4WYpdgoIcn6`
3. The `37i9dQZF1DX4WYpdgoIcn6` in the URL is your playlist ID
4. The `jandoe` or `1234819` are the Spotify IDs to enter when prompted

## License

MIT © [Brandon Him](https://github.com/brh55/spotify-playlist-merge)
