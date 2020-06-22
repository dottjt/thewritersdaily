import { media } from '@dottjt/mediareade';
import path from 'path';

const main = async () => {
  const { podcastPreProcessing } = media;

  const audioFolder = path.resolve(__dirname, '..', '..', 'theneverfapdeluxedaily_podcast');

  await podcastPreProcessing({
    inputFolder: audioFolder,
  });
};

main();