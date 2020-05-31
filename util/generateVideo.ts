import path from 'path';
import { data, media } from '@dottjt/datareade';

const main = async () => {
  // const TWD_CHANNEL_ID = 'UCHnPAVZax7_QMufnSF8Pc9w';
  const credentialsFile = path.join(__dirname, '..', 'client_secrets.json');
  const fakeYouTubeAPIFile = path.join(__dirname, '..', 'fake-youtube-api.txt');

  const rootFolder = path.join(__dirname, '..');
  const audioFolder = path.join(__dirname, '..', '..', 'final-audio');
  const videoFolder = path.join(__dirname, '..', '..', 'final-video');
  const backgroundImageFolder = path.join(__dirname, '..', 'background-image');
  const podcastLogoFile = path.join(__dirname, '..', 'assets', 'logo_400.png');
  const videoFont = '/System/Library/Fonts/Avenir.ttc';

  // console.log(videoFolder);

  await media.generateVideo({
    rootFolder,
    audioFolder,
    videoFolder,
    backgroundImageFolder,
    videoFont,
    podcastLogoFile,
    episodes: data.episodesTWD,
  });

  media.uploadYouTube({
    videoFolder,
    credentialsFile,
    fakeYouTubeAPIFile,
    episodes: data.episodesTWD
  });
};

main();




