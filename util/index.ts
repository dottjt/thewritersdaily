import path from 'path';
import { data, util } from '@dottjt/datareade';

// import generateHugoMDFiles from './generate';
// import { episodeList } from './data/episodes';
// import { generateValidRSS } from './generateValidRSS';

const main = async () => {
  const { theWritersDaily: { generateHugoMDFiles, generateValidRSS } } = util;
  const { episodes } = data;

  const contentDirectory = path.join(__dirname, '../', 'content');

  // console.log(contentDirectory);

  await generateHugoMDFiles(episodes, contentDirectory);
  // await generateValidRSS();
};

main();