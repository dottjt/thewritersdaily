// import { EpisodeData, Segment } from './types/data';
import path from 'path';
import fse from 'fs-extra';
import fetch from 'node-fetch';

function escapeRegExp(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&');
}

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

  // [a-zA-Z0-9!@#$&()-`.+,/\"]

  const newText = text
    .replace(/(http|https):\/\/rss(.*).xml$/g, 'https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml')
    .replace(escapeRegExp('<guid'), '<guid isPermaLink="false"')
    .replace(escapeRegExp('<author></author>'), '<author>thewritersdailypodcast@gmail.com (Julius Reade)</author>')
    .replace(escapeRegExp('<author_picture></author_picture>'), '<author_picture>https://thewritersdaily.juliusreade.com/images/twd/logo_512_non_transparent.png</author_picture>')
    .replace(escapeRegExp('<author_picture></author_picture>'), '')
    // .replace(escapeRegExp('copy;'), '#169')
    .replace(/<!\[CDATA\[((.|\n)*?)\]\]>/g, '$1' )
    // .replace(/<!\[CDATA\[/g, 'arstarst arst rs t')
    // .replace(/\[/g, '')
    .replace('&amp;', '')
    .replace('copy; ', '')
    .replace('copy;', '')
    .replace(/&#39;/g, '\'')
    .replace(/  <p>/g, '')
    .replace(/<\/p>  /g, '')
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    // .replace();


    console.log(newText);
    console.log(escapeRegExp('[[>'))
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
