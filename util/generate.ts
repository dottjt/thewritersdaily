import { EpisodeData, Segment } from './types/data';
import path from 'path';
import fse from 'fs-extra';
// import fetch from 'node-fetch';

const episodeIndexFile = {
  "slug":"episodes",
  "title": "Episodes",
  "description": "A list of all the episodes I've created.",
  "draft": false
}

const episodesNotesIndexFile = {
  "slug":"episodes-notes",
  "title": "Episodes Notes",
  "description": "Episode Notes so I can look them up on my phone",
  "draft": false
}

const getFilePath = (episodeData: EpisodeData, type: string): string => {
  const slug: string = episodeData.slug;
  return path.join(__dirname, '..', `/content/${type}/${slug}.md`);
};

const getHeaderContents = (episodeData: EpisodeData): string => {
  return JSON.stringify(episodeData);
};

const getBelowHeaderContents = (episodeData: EpisodeData): string => {
  let contentString = "";
  episodeData.segments.forEach((segment: Segment): void => {
    contentString += `${segment.title}\n`;
    contentString += `${segment.notes}\n`;
  });

  return path.join(__dirname, '..', `/content/episodes/${slug}.md`);
};

export const generateHugoMDFiles = async (episodeDataList: EpisodeData[]): Promise<void> => {
  try {
    fse.removeSync(path.join(__dirname, '..', 'content', 'episodes'));
    console.log('removed /content/episodes folder.');
    fse.removeSync(path.join(__dirname, '..', 'content', 'episodes_notes'));
    console.log('removed /content/episodes notes folder.');

    for (const episodeData of episodeDataList) {
      fse.outputFileSync(
        getFilePath(episodeData, "episodes"),
        `${getHeaderContents(episodeData)}\n${episodeData.content}`
      );

      fse.outputFileSync(
        getFilePath(episodeData, "episodes_notes"),
        `${getHeaderContents(episodeData)}\n${getBelowHeaderContents(episodeData)}`
      );
    }

    // create episode + episode_notes _index.md
    fse.outputFileSync(
      path.join(__dirname, '..', 'content/episodes/_index.md'),
      JSON.stringify(episodeIndexFile)
    );

    fse.outputFileSync(
      path.join(__dirname, '..', 'content/episodes_notes/_index.md'),
      JSON.stringify(episodesNotesIndexFile)
    );

    console.log('finished template creation.')
  } catch(error) {
    throw new Error(`generateHugoMDFiles - ${error}`);
  }
};
