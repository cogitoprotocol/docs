// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cogito Protocol",
  tagline: "Documentation for Cogito Protocol",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://cogitoprotocol.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cogitoprotocol", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/cogitoprotocol/docs/blob/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Cogito Protocol",
        logo: {
          alt: "Cogito Protocol",
          src: "img/favicon.svg",
        },
        items: [
          {
            href: "https://github.com/cogitoprotocol/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/cogitoprotocol",
              },
              {
                label: "Discord",
                href: "https://discord.gg/8xMJeGQayG",
              },
              {
                label: "Telegram",
                href: "https://t.me/joincogito",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Home",
                href: "https://cogitoprotocol.com",
              },
              {
                label: "Medium",
                href: "https://medium.com/@CogitoProtocol",
              },
              {
                label: "GitHub",
                href: "https://github.com/cogitoprotocol",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cogito Protocol`,
      },
      prism: {
        additionalLanguages: ["solidity"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
