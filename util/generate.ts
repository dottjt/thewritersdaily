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
  "slug":"epnotes",
  "title": "Episodes Notes",
  "description": "Episode Notes so I can look them up on my phone",
  "draft": false
}

const getFilePath = (episodeData: EpisodeData, type: string): string => {
  const slug: string | number = type === 'epnotes' ? episodeData.episode_number : episodeData.slug;
  return path.join(__dirname, '..', `/content/${type}/${slug}.md`);
};

const getHeaderContents = (episodeData: EpisodeData, type: string): string => {
  if (type === 'epnotes') {
    episodeData.publishDate = '2019-05-25T07:00:00+10:00';
    return JSON.stringify(episodeData, null, "\t");
  }
  return JSON.stringify(episodeData, null, "\t");
};

const getBelowHeaderContents = (episodeData: EpisodeData): string => {
  let contentString = "\n";
  episodeData.segments.forEach((segment: Segment): void => {
    contentString += `### ${segment.title}\n\n`;
    contentString += `${segment.notes}\n`;
  });

  return contentString;
};

const breakUpContent = (content: string): string => {
  let splitArray = content.split(/\d/).slice(1);
  splitArray[2] = splitArray[2].replace('Email: thewritersdailypodcast@gmail.com','');
  return splitArray.map((val: string, index: number) => `${index+1}${val}`).join('\n');
}

export const generateHugoMDFiles = async (episodeDataList: EpisodeData[]): Promise<void> => {
  try {
    const todayDate = new Date();

    fse.removeSync(path.join(__dirname, '..', 'content', 'episodes'));
    console.log('removed /content/episodes folder.');
    fse.removeSync(path.join(__dirname, '..', 'content', 'epnotes'));
    console.log('removed /content/episodes notes folder.');

    for (const episodeData of episodeDataList) {
      const episodePublicDate = new Date(episodeData.publishDate);
      // if (episodePublicDate < todayDate) {
        fse.outputFileSync(
          getFilePath(episodeData, "episodes"),
          `${getHeaderContents(episodeData, "episodes")}\n\n${breakUpContent(episodeData.content)}`
        );
      // }

      fse.outputFileSync(
        getFilePath(episodeData, "epnotes"),
        `${getHeaderContents(episodeData, "epnotes")}\n${getBelowHeaderContents(episodeData)}`
      );
    }

    // create episode + episode_notes _index.md
    fse.outputFileSync(
      path.join(__dirname, '..', 'content/episodes/_index.md'),
      JSON.stringify(episodeIndexFile)
    );

    fse.outputFileSync(
      path.join(__dirname, '..', 'content/epnotes/_index.md'),
      JSON.stringify(episodesNotesIndexFile)
    );

    console.log('finished template creation.')
  } catch(error) {
    throw new Error(`generateHugoMDFiles - ${error}`);
  }
};
