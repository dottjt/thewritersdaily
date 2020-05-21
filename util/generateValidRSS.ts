// import { EpisodeData, Segment } from './types/data';
import path from 'path';
import fse from 'fs-extra';
import fetch from 'node-fetch';

const modifyRSS = (text: string): string => {
  // replace the logo with something higher res, not sure if it's necessary.
  // regex = ~r/https:\/\/s3.castbox.fm(\/*[a-zA-Z0-9])*.png/
  // # does_match = Regex.match?(regex, "https://s3.castbox.fm/89/8f/d7/ab55544abb81506d8240808921.png") |> IO.inspect
  // new_xml =
  //   Regex.replace(
  //     regex,
  //     response.body,
  //     "https://neverfapdeluxe.com/images/logo_podcast.png",
  //     global: true
  //   )
  //

  const newText = text
    .replace('http://rss.castbox.fm/everest/3f65d126b7e5499a8957e515501bb203.xml', 'https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml')
    .replace('<guid', '<guid isPermaLink="false"')
    .replace('<author/>', '<author>Julius Reade<author/>')
    .replace('<author_picture/>', '')
    .replace('copy;', '#169');
    // .replace();

  // https://validator.w3.org/feed/

  return newText;
}

export const generateValidRSS = async (): Promise<void> => {
  try {
    // const NFD_RSS_URL = "http://rss.castbox.fm/everest/aab82e46f0cd4791b1c8ddc19d5158c3.xml";
    const TWD_RSS_URL = "http://rss.castbox.fm/everest/3f65d126b7e5499a8957e515501bb203.xml";

    const response = await fetch(TWD_RSS_URL);
    const text = await response.text();
    const newText = modifyRSS(text);

    fse.outputFileSync(
      path.join(__dirname, '..', 'themes', 'reade', 'static', 'thewritersdaily_podcast.xml'),
      newText
    );

    console.log('create podcast.xml');
  } catch(error) {
    throw new Error(`generateValidRSS - ${error}`);
  }
};
