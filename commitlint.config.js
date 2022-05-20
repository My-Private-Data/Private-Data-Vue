// https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci', // 构建流程更新
        'feat', // 新功能（feature）
        'update', // 功能更新（不是 feature 或 fix）
        'fix', // bug 修复
        'refactor', // 重构（不是 feature 或 fix）
        'optimize', // 代码优化
        'style', // 代码格式调整（不影响项目运行的变动）
        'docs', // 文档更新
        'chore', // 构建过程或辅助工具的变动
        'test', // 测试用例更新
      ],
    ],
    'type-case': [0],
    'scope-case': [0],
    'subject-case': [0, 'never'],
    'subject-full-stop': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
