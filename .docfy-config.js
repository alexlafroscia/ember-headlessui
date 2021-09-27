/**
 * @type {import('@docfy/core/lib/types').DocfyConfig}
 */
module.exports = {
  repository: {
    url: 'https://github.com/GavinJoyce/ember-headlessui',
    editBranch: 'master',
  },
  remarkPlugins: [
    // Provide highlighting of code snippets
    require('remark-highlight.js'),
  ],
  rehypePlugins: [
    [
      require('rehype-add-classes'),
      {
        a: 'text-blue-600',
        h1: 'font-bold text-3xl',
        h2: 'font-bold text-2xl',
        h3: 'font-bold text-xl',
        blockquote: 'bg-gray-200 border-l-4 border-gray-300 p-2',
      },
    ],
  ],
  labels: {
    components: 'Components',
  },
};
