
module.exports = {
  title: 'StreamSuites™',
  tagline: 'Documentation hub for StreamSuites.',
  url: 'https://docs.streamsuites.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'StreamSuites',
  projectName: 'StreamSuites-Docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: ['/'],
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'StreamSuites™',
      logo: {
        alt: 'StreamSuites',
        src: 'assets/logos/logoshield-white.png',
        srcDark: 'assets/logos/logoshield-white.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/installation',
          label: 'Getting started',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'creator-guide/creator-dashboard',
          label: 'Creator guide',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'runtime/runtime-overview',
          label: 'Runtime',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'integrations/youtube',
          label: 'Integrations',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'support/faq',
          label: 'Support',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: '/EULA.md',
          label: 'EULA',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: 'StreamSuites documentation hub for docs.streamsuites.app.',
    },
  },
};
