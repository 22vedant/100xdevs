var player = videojs(
	'my-video',
	{
		controls: true,
		fluid: true,
		html5: {
			vhs: {
				overrideNative: true,
			},
		},
	},
	function () {
		var player = this;
		player.eme();
		player.src({
			// src: 'https://pub-eae8906a1335486dafc5adbf3343c65b.r2.dev/drm/100x/230369/8c48bd71-6184-45ac-b946-599cd7f37e91/1080p/drm/stream.mpd',
			type: 'application/dash+xml',
			keySystems: {
				'com.widevine.alpha':
					'https://widevine-dash.ezdrm.com/proxy?pX=288FF5&user_id=MTAwMA==',
			},
		});

		player.ready(function () {
			player.tech(true).on('keystatuschange', function (event) {
				console.log('event: ', event);
			});
		});
	}
);
