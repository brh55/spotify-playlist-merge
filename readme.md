# spotify-playlist-merge [![Build Status](https://travis-ci.org/brh55/spotify-playlist-merge.svg?branch=master)](https://travis-ci.org/brh55/spotify-playlist-merge)

> A CLI app to merge Spotify playlist


## Install

```
$ npm install --save spotify-playlist-merge
```


## Usage

```js
const spotifyPlaylistMerge = require('spotify-playlist-merge');

spotifyPlaylistMerge('unicorns');
//=> 'unicorns & rainbows'
```


## API

### spotifyPlaylistMerge(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global spotify-playlist-merge
```

```
$ spotify-playlist-merge --help

  Usage
    spotify-playlist-merge [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ spotify-playlist-merge
    unicorns & rainbows
    $ spotify-playlist-merge ponies
    ponies & rainbows
```


## License

MIT © [Brandon Him](https://github.com/brh55/spotify-playlist-merge)
