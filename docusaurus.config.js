// @ts-check
// Note: 

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jerry - Docs',
  tagline: '有关 Jerry 站点的使用文档',
  url: 'https://docs.jerry.ink/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'Jerry12228', // Usually your GitHub org/user name.
  // projectName: 'jerry-docs', // Usually your repo name.

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
          // "Artplayer": ["artplayer"],
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
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: false,
      }),
    ],
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
          src: 'img/logo-stroke-white.svg',
          // srcDark: 'img/logo-stroke-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'jerry-mc-skin/mc-skin-intro',
            positionL: 'left',
            label: 'Jerry - MC皮肤站',
          },
          {
            type: 'doc',
            docId: 'hitokoto-api/hitokoto-api',
            position: 'left',
            label: '一言 API',
          },
          {
            type: 'doc',
            docId: 'Jerry-MC-Server/jerry-mc-server',
            position: 'left',
            label: 'Scapegoat',
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
                label: 'Jerry - M皮肤站',
                to: '/docs/jerry-mc-skin/mc-skin-intro',
              },
              {
                label: '一言语句接口',
                to: '/docs/hitokoto-api',
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
              {
                label: 'Jerry MC服KOOK',
                to: 'docs/Jerry-MC-Server/Jerry-MC-Server#社区'
              },
            ],
          },
          {
            title: '关于',
            items: [
              {
                label: '联系方式',
                href: '/contact',
              },
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
      headTags: [
        {
          tagName: 'script',
          attributes: {
            innerHTML: `
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://tongji.jerry.ink/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '10']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `
          },
        },
        // {
        //   tagName: 'img',
        //   attributes: {
        //     referrerpolicy: "no-referrer-when-downgrade",
        //     src: "https://tongji.jerry.ink/matomo.php?idsite=10&amp;rec=1",
        //     style: "border:0",
        //     alt: "",
        //   },
        // },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
