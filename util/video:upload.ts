import path from 'path';
import { data } from '@dottjt/datareade';
import { media, upload } from '@dottjt/mediareade';

const main = async () => {
  // const TWD_CHANNEL_ID = 'UCHnPAVZax7_QMufnSF8Pc9w';
  const credentialsFile = path.join(__dirname, '..', 'client_secrets.json');
  const fakeYouTubeAPIFile = path.join(__dirname, '..', 'fake-youtube-api.txt');
  const videoFolder = path.join(__dirname, '..', '..', 'thewritersdaily_podcast', 'final-video');

  upload.uploadYouTube({
    showTitle: "The Writer's Daily",
    showDescription: (
`Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://thewritersdaily.juliusreade.com\n
YouTube: https://youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ\n
Twitter: https://twitter.com/thewritersdaily\n
Facebook: https://facebook.com/thewritersdaily\n
Discord: https://discord.gg/7QzqdP7\n
Instagram: https://instagram.com/thewritersdaily\n
`
    ), // TODO
    videoFolder,
    credentialsFile,
    fakeYouTubeAPIFile,
    episodes: data.episodesTWD
  });

};

main();


