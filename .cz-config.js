// 提交代码：使用 npx cz 命令
// 相关配置：https://github.com/leoforfree/cz-customizable
module.exports = {
  types: [
      {
          value: 'feat',
          name: '✨ feat（新功能）'
      },
      {
          value: 'fix',
          name: '🐛 fix（Bug 修复）'
      },
      {
          value: 'docs',
          name: '📝 docs（文档更新）'
      },
      {
          value: 'style',
          name: '💄 style（代码样式更改，例如空格、格式、缺少分号等）'
      },
      {
          value: 'refactor',
          name: '💡 refactor（重构代码）'
      },
      {
          value: 'perf',
          name: '⚡️ perf（性能优化）'
      },
      {
          value: 'test',
          name: '✅ test（添加缺失或修正测试代码）'
      },
      {
          value: 'chore',
          name: '🔨 chore（构建相关的代码或工具库，如文档生成等）'
      }
  ],
  messages: {
      type: '请选择提交类型：（必填）',
      subject: '请输入简要描述：（必填）',
      confirmCommit: '请确认此提交信息？'
  },
  subjectLimit: 100,// subject文字长度默认
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'footer'] //默认跳过
};
