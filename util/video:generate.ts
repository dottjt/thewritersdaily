import path from 'path';
import { data } from '@dottjt/datareade';
import { media } from '@dottjt/mediareade';

const main = async () => {
  // const TWD_CHANNEL_ID = 'UCHnPAVZax7_QMufnSF8Pc9w';
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


};

main();


