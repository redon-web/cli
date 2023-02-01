export const types = [
  { value: 'feat', title: 'feat: 新特性或功能' },
  { value: 'chore', title: 'chore: 缺陷修复' },
  { value: 'fix', title: 'fix: 缺陷修复' },
  { value: 'docs', title: 'docs: 文档更新' },
  { value: 'style', title: 'style: 代码风格或者组件样式更新' },
  { value: 'refactor', title: 'refactor: 代码重构，不引入新功能和缺陷修复' },
  { value: 'perf', title: 'perf: 性能优化' },
  { value: 'test', title: 'test: 单元测试' }
];

export const scopes = [
  ['common', '项目搭建'],
  ['components', '组件相关'],
  ['hooks', 'hook 相关'],
  ['utils', 'utils 相关'],
  ['types', 'ts类型相关'],
  ['styles', '样式相关'],
  ['deps', '项目依赖'],
  ['release', '版本发布'],
  ['other', '其他修改']
].map(([value, description]) => {
  return {
    value,
    title: `${value.padEnd(30)} (${description})`
  };
});
