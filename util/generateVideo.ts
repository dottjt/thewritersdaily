import path from 'path';
import { data } from '@dottjt/datareade';
import { media, upload } from '@dottjt/mediareade';

const main = async () => {
  // const TWD_CHANNEL_ID = 'UCHnPAVZax7_QMufnSF8Pc9w';
  const credentialsFile = path.join(__dirname, '..', 'client_secrets.json');
  const fakeYouTubeAPIFile = path.join(__dirname, '..', 'fake-youtube-api.txt');

  const rootFolder = path.join(__dirname, '..');
  const audioFolder = path.join(__dirname, '..', '..', 'thewritersdaily_podcast', 'final-audio');
  const videoFolder = path.join(__dirname, '..', '..', 'thewritersdaily_podcast', 'final-video');
  const backgroundImageFolder = path.join(__dirname, '..', 'background-image');
  const podcastLogoFile = path.join(__dirname, '..', 'assets', 'logo_400.png');
  const videoFont = '/System/Library/Fonts/Avenir.ttc';

  await media.generateVideo({
    rootFolder,
    audioFolder,
    videoFolder,
    backgroundImageFolder,
    videoFont,
    podcastLogoFile,
    episodes: data.episodesTWD,
  });

  upload.uploadYouTube({
    showTitle: 'The NeverFap Deluxe Daily',
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

