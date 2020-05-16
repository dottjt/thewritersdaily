import { EpisodeData } from './types/data';
import path from 'path';
import fse from 'fs-extra';
// import fetch from 'node-fetch';

const episodeIndexFile = {
  "slug":"episodes",
  "title": "Episodes",
  "description": "A list of all the episodes I've created.",
  "draft": false
}

// const validateEpisodeUrls = async (episodeData: EpisodeData): Promise<void> => {
//   const links =
//     episodeData.links
//       .concat(episodeData.socials)
//       .map((obj: any) => obj.link);

//   for (const link of links) {
//     const response = await fetch(link);
//     if (response?.status !== 200) {
//       console.log(`${link} does not seem to be returning a 200.`);
//     }
//   }
// };

const getFilePath = (episodeData: EpisodeData): string => {
  const category: string = episodeData.categories[0];
  const slug: string = episodeData.slug;
  return path.join(__dirname, '..', `/content/episodes/${category}/${slug}.md`);
};

const getFileContents = (episodeData: EpisodeData): string => {
  return JSON.stringify(episodeData);
};

export const generateHugoMDFiles = async (episodeDataList: EpisodeData[]): Promise<void> => {
  try {
    fse.removeSync(path.join(__dirname, '..', 'content', 'episodes'));
    console.log('removed /content/episodes folder.');


    for (const episodeData of episodeDataList) {
      // await validateEpisodeUrls(episodeData);

      const filePath = getFilePath(episodeData);
      console.log(filePath);
      const fileContents = getFileContents(episodeData);
      fse.outputFileSync(filePath, fileContents);
    }

    // create episode _index.md
    const episodeFilePath = path.join(__dirname, '..', 'content/episodes/_index.md');
    const episodeFileContents = JSON.stringify(episodeIndexFile);
    fse.outputFileSync(episodeFilePath, episodeFileContents);

    console.log('finished template creation.')
  } catch(error) {
    throw new Error(`generateHugoMDFiles - ${error}`);
  }
};
