import { EpisodeData, Segment } from './types/data';
import path from 'path';
import fse from 'fs-extra';

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
    contentString += `${segment.notes}\n\n`;
  });

  return contentString;
};

export const generateHugoMDFiles = async (episodeDataList: EpisodeData[]): Promise<void> => {
  try {
    const todayDate = new Date();

    fse.removeSync(path.join(__dirname, '..', 'content', 'episodes'));
    console.log('removed /content/episodes folder.');
    fse.removeSync(path.join(__dirname, '..', 'content', 'episodes_notes'));
    console.log('removed /content/episodes notes folder.');

    for (const episodeData of episodeDataList) {
      const episodePublicDate = new Date(episodeData.publishDate);
      // if (episodePublicDate < todayDate) {
        fse.outputFileSync(
          getFilePath(episodeData, "episodes"),
          `${getHeaderContents(episodeData)}\n${episodeData.content}`
        );
      // }

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
