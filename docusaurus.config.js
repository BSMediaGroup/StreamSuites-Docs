
module.exports = {
  title: 'StreamSuites™',
  tagline: 'Current documentation for the StreamSuites Studio product family and Runtime/Auth authority.',
  url: 'https://docs.streamsuites.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'favicon.ico',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v0.x (current)',
              path: '',
            },
          },
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
        docsRouteBasePath: '/docs',
      },
    ],
  ],
  themeConfig: {
    docs: {
      versionPersistence: 'none',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'StreamSuites™',
      logo: {
        alt: 'StreamSuites',
        src: 'assets/logos/logoshield-whitex.webp',
        srcDark: 'assets/logos/logoshield-whitex.webp',
      },
      items: [
        {
          type: 'doc',
          docId: 'product-family',
          label: 'Products',
          position: 'left',
        },
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
          label: 'Runtime / Auth',
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
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: '/docs/legal/eula',
          label: 'EULA',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Production products',
          items: [
            { label: 'Browser Studio', href: 'https://studio.streamsuites.app' },
            { label: 'StudioApp', href: 'https://streamsuites.app/downloads/studioapp/' },
            { label: 'Studio for OBS', href: 'https://streamsuites.app/downloads/obs-plugin/' },
          ],
        },
        {
          title: 'Documentation',
          items: [
            { label: 'Product family', to: '/docs/product-family' },
            { label: 'Authority boundaries', to: '/docs/architecture/product-boundaries' },
            { label: 'Support', to: '/docs/support/faq' },
          ],
        },
      ],
      copyright: 'StreamSuites™ Documentation Hub',
    },
  },
};
