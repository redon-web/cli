import prompts from 'prompts';
import execa from 'execa';
import { types } from './config';

export async function gitCommit() {
  const result = await prompts([
    {
      name: 'types',
      type: 'select',
      message: '请选择提交的类型',
      choices: types
    },
    {
      name: 'scopes',
      type: 'text',
      message: '请输范围'
    },
    {
      name: 'description',
      type: 'text',
      message: '请输入提交描述'
    }
  ]);

  const scopesString = typeof result.scopes === 'string' && result.scopes !== '' ? `(${result.scopes})` : '';

  const commitMsg = `${result.types}${scopesString}: ${result.description}`;

  execa('git', ['commit', '-m', commitMsg], { stdio: 'inherit' });
}
