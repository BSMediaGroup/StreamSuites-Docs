module.exports = {
  // All new docs pages must be added here.
  docs: [
    'index',
    {
      type: 'category',
      label: 'Changelog',
      items: ['changelog/index', 'changelog/v0.3'],
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/installation',
        'getting-started/first-run',
        'getting-started/account-types',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/getting-started', 'guides/creator-workspace'],
    },
    {
      type: 'category',
      label: 'Creator guide',
      items: [
        'creator-guide/creator-dashboard',
        'creator-guide/automation-basics',
        'creator-guide/clips-scoreboards',
      ],
    },
    {
      type: 'category',
      label: 'Runtime',
      items: [
        'runtime/runtime-overview',
        'runtime/exports-and-versioning',
        'runtime/automation-states',
        'runtime/api-authentication',
        'runtime/api-keys',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/youtube',
        'integrations/rumble',
        'integrations/twitch',
        'integrations/discord',
        { type: 'doc', id: 'integrations/stripe', label: 'Stripe & Billing' },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/runtime-overview'],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/support-model',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/eula',
        'legal/commercial-license-notice',
        'legal/license',
      ],
    },
  ],
};
