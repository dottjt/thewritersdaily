import { Octokit } from '@octokit/rest';
import { GITHUB_OWNER } from './constants';

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
});

// NOTE: This fundamentally does not make sense, please don't use git for dates.
// export const getProjectFirstLastCommitDates = async () => {
//   const repo = await octokit.repos.get({
//     owner: GITHUB_OWNER,
//     repo: 'juliusv1'
//   });
//   console.log(repo.data);
// };
