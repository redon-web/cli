import { readFileSync } from 'fs';
import { bgRed, green, red } from 'kolorist';
import { types } from './config';

export function verifyGitCommit() {
  const gitMsgPath = './.git/COMMIT_EDITMSG';

  const commitMsg = readFileSync(gitMsgPath, 'utf-8').trim();

  const REG_EXP = new RegExp(`^(${types.map(item => item.value).join('|')})(\\(.+\\))?:\\s.{1,50}`);

  if (!REG_EXP.test(commitMsg)) {
    throw new Error(
      `${bgRed(' ERROR ')} ${red('Git 提交信息不符合规范!\n\n')}${green(
        '推荐使用命令 pnpm commit 生成符合规范的Git提交信息'
      )}`
    );
  }
}
