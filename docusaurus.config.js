// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jerry - Docs',
  tagline: '有关 Jerry 站点的使用文档',
  url: 'https://docs.jerry.ink/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jerry12228', // Usually your GitHub org/user name.
  projectName: 'jerry-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Jerry12228/jerry-docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        indexBlog: false,
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],

  stylesheets: [
    {
      // href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      href: './src/css/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jerry - Docs',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-stroke-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'hitokoto-api/hitokoto-api',
            position: 'left',
            label: '一言语句接口',
          },
          {
            type: 'doc',
            docId: 'Jerry-MC-Server/jerry-mc-server',
            position: 'left',
            label: 'Jerry MC服',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '一言语句接口',
                to: '/docs/hitokoto-api'
              },
              {
                label: 'Jerry-MC服务器',
                to: '/docs/Jerry-MC-Server/Jerry-MC-Server',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '论坛',
                href: 'https://bbs.jerry.ink/',
              },
              {
                label: 'Jerry MC服交流群',
                href: 'https://jq.qq.com/?_wv=1027&k=6K1nn4ud',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Jerry - Blog',
                href: 'https://blog.jerry.ink/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Jerry12228/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jerry - Docs, Inc. 由 Docusaurus 强力驱动`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
