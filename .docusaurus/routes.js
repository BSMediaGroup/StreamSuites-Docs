import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f98'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '98e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '24d'),
            routes: [
              {
                path: '/docs',
                component: ComponentCreator('/docs', 'd78'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/changelog',
                component: ComponentCreator('/docs/changelog', '7b8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/changelog/v0.3',
                component: ComponentCreator('/docs/changelog/v0.3', '9bf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/creator-guide/automation-basics',
                component: ComponentCreator('/docs/creator-guide/automation-basics', '9cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/creator-guide/clips-scoreboards',
                component: ComponentCreator('/docs/creator-guide/clips-scoreboards', '3a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/creator-guide/creator-dashboard',
                component: ComponentCreator('/docs/creator-guide/creator-dashboard', '3bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/account-types',
                component: ComponentCreator('/docs/getting-started/account-types', '74a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/first-run',
                component: ComponentCreator('/docs/getting-started/first-run', 'ff4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '71d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/guides/creator-workspace',
                component: ComponentCreator('/docs/guides/creator-workspace', '5da'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/guides/getting-started',
                component: ComponentCreator('/docs/guides/getting-started', '5be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/integrations/discord',
                component: ComponentCreator('/docs/integrations/discord', 'c2b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/integrations/kick',
                component: ComponentCreator('/docs/integrations/kick', 'a4c'),
                exact: true
              },
              {
                path: '/docs/integrations/pilled',
                component: ComponentCreator('/docs/integrations/pilled', 'cb4'),
                exact: true
              },
              {
                path: '/docs/integrations/rumble',
                component: ComponentCreator('/docs/integrations/rumble', 'c8e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/integrations/stripe',
                component: ComponentCreator('/docs/integrations/stripe', '1f2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/integrations/twitch',
                component: ComponentCreator('/docs/integrations/twitch', '198'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/integrations/youtube',
                component: ComponentCreator('/docs/integrations/youtube', '0cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/legal/commercial-license',
                component: ComponentCreator('/docs/legal/commercial-license', 'fc2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/legal/eula',
                component: ComponentCreator('/docs/legal/eula', '8aa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/legal/license',
                component: ComponentCreator('/docs/legal/license', 'c0f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/runtime-overview',
                component: ComponentCreator('/docs/reference/runtime-overview', '05f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/runtime/api-authentication',
                component: ComponentCreator('/docs/runtime/api-authentication', 'c75'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/runtime/api-keys',
                component: ComponentCreator('/docs/runtime/api-keys', '7c6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/runtime/automation-states',
                component: ComponentCreator('/docs/runtime/automation-states', 'bcc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/runtime/exports-and-versioning',
                component: ComponentCreator('/docs/runtime/exports-and-versioning', '782'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/runtime/runtime-overview',
                component: ComponentCreator('/docs/runtime/runtime-overview', '4d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/support/faq',
                component: ComponentCreator('/docs/support/faq', 'c84'),
                exact: true
              },
              {
                path: '/docs/support/support-model',
                component: ComponentCreator('/docs/support/support-model', '02f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/support/troubleshooting',
                component: ComponentCreator('/docs/support/troubleshooting', '368'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '070'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
