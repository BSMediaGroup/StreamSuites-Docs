import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '61e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '925'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '241'),
            routes: [
              {
                path: '/creator-guide/automation-basics.html',
                component: ComponentCreator('/creator-guide/automation-basics.html', 'b95'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/creator-guide/clips-scoreboards.html',
                component: ComponentCreator('/creator-guide/clips-scoreboards.html', 'f72'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/creator-guide/creator-dashboard.html',
                component: ComponentCreator('/creator-guide/creator-dashboard.html', '49e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/account-types.html',
                component: ComponentCreator('/getting-started/account-types.html', 'b3d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/first-run.html',
                component: ComponentCreator('/getting-started/first-run.html', '75e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/installation.html',
                component: ComponentCreator('/getting-started/installation.html', '117'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/creator-workspace.html',
                component: ComponentCreator('/guides/creator-workspace.html', '1f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/getting-started.html',
                component: ComponentCreator('/guides/getting-started.html', '59c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/integrations/discord.html',
                component: ComponentCreator('/integrations/discord.html', 'e91'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/integrations/rumble.html',
                component: ComponentCreator('/integrations/rumble.html', '33d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/integrations/twitch.html',
                component: ComponentCreator('/integrations/twitch.html', '702'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/integrations/youtube.html',
                component: ComponentCreator('/integrations/youtube.html', 'a0f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/reference/runtime-overview.html',
                component: ComponentCreator('/reference/runtime-overview.html', '5fa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/runtime/automation-states.html',
                component: ComponentCreator('/runtime/automation-states.html', 'd9f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/runtime/exports-and-versioning.html',
                component: ComponentCreator('/runtime/exports-and-versioning.html', '358'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/runtime/runtime-overview.html',
                component: ComponentCreator('/runtime/runtime-overview.html', 'dd1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/faq.html',
                component: ComponentCreator('/support/faq.html', 'ca1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/support-model.html',
                component: ComponentCreator('/support/support-model.html', '954'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/troubleshooting.html',
                component: ComponentCreator('/support/troubleshooting.html', '01e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'bea'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
