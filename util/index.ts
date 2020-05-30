import { config } from 'dotenv';
config();

import path from 'path';
import { data, media, website } from '@dottjt/datareade';

const main = async () => {
  const { generateHugoMDFilesTWD } = website;
  const { generateModifiedRSS } = media
  const { episodesTWD } = data;

  // const TWD_RSS_URL = "http://rss.castbox.fm/everest/aab82e46f0cd4791b1c8ddc19d5158c3.xml"; // (this is the NFD one.)
  const TWD_RSS_URL = "http://rss.castbox.fm/everest/3f65d126b7e5499a8957e515501bb203.xml";
  const NEW_RSS_URL = "https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml";
  const OUTPUT_RSS_FILE = path.join(__dirname, '..', 'themes', 'reade', 'static', 'thewritersdaily_podcast.xml');

  const contentDirectory = path.join(__dirname, '../', 'content');

  const PODCAST_WEBSITE = 'https://thewritersdaily.juliusreade.com/';

  await generateHugoMDFilesTWD({
    episodes: episodesTWD,
    contentDirectory
  });

  await generateModifiedRSS({
    inputRSSURL: TWD_RSS_URL,
    newRSSURL: NEW_RSS_URL,
    outputRSSFile: OUTPUT_RSS_FILE,
    authorRSSField: '<author>thewritersdailypodcast@gmail.com (Julius Reade)</author>',
    episodeList: episodesTWD,
    podcastWebsite: PODCAST_WEBSITE
  });
};

main();