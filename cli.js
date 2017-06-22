#!/usr/bin/env node
'use strict';
const meow = require('meow');
const prompt = require('prompt');
const SpotifyAPI = require('spotify-web-api-node');
const spotify = new SpotifyAPI();
const ora = require('ora');

prompt.message = '';

const spotifyPlaylistMerge = require('.');

const cli = meow(`
	Usage
	  $ spotify-merge
`);

prompt.start();
const questions = [
	{
		name: 'token',
		description: 'What is your OAuth token?',
		type: 'string',
		hidden: false,
		required: true
	},
	{
		name: 'toPlaylistID',
		description: 'What is YOUR playlist ID for the songs to be copied to?',
		type: 'string',
		hidden: false,
		required: true
	},
	{
		name: 'fromUserID',
		description: 'What is the Spotify ID of the playlist owner?',
		type: 'string',
		hidden: false,
		required: true
	},
	{
		name: 'fromPlaylistID',
		description: 'What is the playlist ID to be copied?',
		type: 'string',
		hidden: false,
		required: true
	},
];

prompt.get(questions, (err, { token, toPlaylistID, fromUserID, fromPlaylistID}) => {
	spotify.setAccessToken(token)
	Promise.all([spotify.getMe(), spotify.getPlaylist(fromUserID, fromPlaylistID)])
		.then(response => {
				const profile = response[0].body;
				const playlist = response[1].body;

				const trackList = playlist.tracks.items.map(item => item.track.uri);
				prompt.get([{
					name: 'confirm',
					description: `${fromUserID}'s ${playlist.name} tracks will be added to ${profile.display_name}'s Playlist (${toPlaylistID}). Confirm? Y/N`,
					required: true,
					pattern: /Y|N/,
					type: 'string'
				}], (err, { confirm }) => {
					if (confirm === 'Y') {
						const spinner = ora(`Copying ${trackList.length} tracks from ${fromUserID}'s ${playlist.name}`);
						spinner.color = 'green';
						spinner.start();

						spotify.addTracksToPlaylist(profile.id, toPlaylistID, trackList)
							.then(resp => {
								spinner.stop();
								console.log(`Successfully added ${trackList.length} tracks`);
							})
							.catch(err => console.log(err.message));

					} else {
						console.log('⚠️ Tracks were not copied, user has cancelled operation.');
					}
				});
		})
		.catch((err) => console.log(err.message));
});
