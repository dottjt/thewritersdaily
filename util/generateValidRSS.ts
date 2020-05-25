// import { EpisodeData, Segment } from './types/data';
import path from 'path';
import fse from 'fs-extra';
import fetch from 'node-fetch';
import { episodeList } from './data/episodes';
import { create, convert } from 'xmlbuilder2';

function escapeRegExp(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&');
}

const modifyRSS = (text: string): string => {
  // [a-zA-Z0-9!@#$&()-`.+,/\"]
  // .replace(escapeRegExp('<author_picture></author_picture>'), '<author_picture>https://thewritersdaily.juliusreade.com/images/twd/logo_512_non_transparent.png</author_picture>')
  // .replace(escapeRegExp('copy;'), '#169')
  // .replace(/<!\[CDATA\[/g, 'arstarst arst rs t')
  // .replace(/\[/g, '')

  // logo_3000_non_transparent.png

  const newText = text
    .replace(/(http|https):\/\/rss(.*)\.xml/g, 'https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml')
    .replace(/<guid/g, '<guid isPermaLink="false"')
    .replace(/<author><\/author>/g, '<author>thewritersdailypodcast@gmail.com (Julius Reade)</author>')
    .replace(/<author_picture><\/author_picture>/g, '')
    .replace(/<!\[CDATA\[((.|\n)*?)\]\]>/g, '$1' )
    .replace(/&amp;/g, '')
    .replace(/copy; /g, '')
    .replace(/copy;/g, '')
    .replace(/&#39;/g, '\'')
    .replace(/  <p>/g, '')
    .replace(/<\/p>  /g, '')
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')

  let feed: any = convert(newText, { format: "object" });
  // console.log(feed.rss.channel.item);
  // console.log(feed.rss.channel);

  if (feed.rss.channel.item.length !== undefined) {
    feed.rss.channel.item = feed.rss.channel.item.reverse().map((item: any, index: number) => {
      // so this needs to make sure that there's items in here.
      const link = episodeList[index]?.castboxLink;
      if (link === undefined) {
        return undefined;
      }
      return {
        ...item,
        link,
      };
    });

    feed.rss.channel.item = feed.rss.channel.item.filter(Boolean);
  } else {
    feed.rss.channel.item = { ...feed.rss.channel.item, link: episodeList[0]?.castboxLink };
  }

  const xml = convert(feed, { format: "xml" });
  return xml;
}

export const generateValidRSS = async (): Promise<void> => {
  try {
    // const TWD_RSS_URL = "http://rss.castbox.fm/everest/aab82e46f0cd4791b1c8ddc19d5158c3.xml"; // (this is the NFD one.)
    const TWD_RSS_URL = "http://rss.castbox.fm/everest/3f65d126b7e5499a8957e515501bb203.xml";

    const response = await fetch(TWD_RSS_URL);
    const text = await response.text();
    const newText = await modifyRSS(text);

    fse.outputFileSync(
      path.join(__dirname, '..', 'themes', 'reade', 'static', 'thewritersdaily_podcast.xml'),
      newText
    );

    console.log('create podcast.xml');
  } catch(error) {
    throw new Error(`generateValidRSS - ${error}`);
  }
};
