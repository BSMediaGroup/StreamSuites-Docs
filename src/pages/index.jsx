import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const cards = [
  {
    title: 'Product family',
    description: 'See the current role and Alpha posture of Browser Studio, StudioApp, Studio for OBS, and the connected web surfaces.',
    href: '/docs/product-family',
    cta: 'Explore products',
  },
  {
    title: 'Authority and media boundaries',
    description: 'Understand what Runtime/Auth owns and why each production product keeps its own media pipeline.',
    href: '/docs/architecture/product-boundaries',
    cta: 'Read architecture',
  },
  {
    title: 'Getting started',
    description: 'Install the implemented components, run first checks, and understand the existing account types.',
    href: '/docs/getting-started/installation',
    cta: 'Start setup',
  },
  {
    title: 'Runtime / Auth',
    description: 'Review canonical identity, permissions, rooms, destinations, exports, alerts, automation, and version authority.',
    href: '/docs/runtime/runtime-overview',
    cta: 'Explore authority',
  },
  {
    title: 'Creator operations',
    description: 'Use Creator as the operational companion for integrations, automation, audience tools, analytics, and settings.',
    href: '/docs/creator-guide/creator-dashboard',
    cta: 'Open creator guide',
  },
  {
    title: 'Support',
    description: 'Find current troubleshooting guidance, frequently asked questions, and the documented support model.',
    href: '/docs/support/faq',
    cta: 'Get support',
  },
];

const quicklinks = [
  {
    label: 'Browser Studio',
    href: 'https://studio.streamsuites.app',
  },
  {
    label: 'StudioApp',
    href: 'https://streamsuites.app/downloads/studioapp/',
  },
  {
    label: 'Studio for OBS',
    href: 'https://streamsuites.app/downloads/obs-plugin/',
  },
  {
    label: 'Runtime / Auth',
    href: '/docs/runtime/runtime-overview',
  },
  {
    label: 'Creator operations',
    href: '/docs/creator-guide/creator-dashboard',
  },
];

export default function Home() {
  const logoSrc = useBaseUrl('assets/logos/docsnew.webp');

  return (
    <Layout
      title="StreamSuites Documentation"
      description="Documentation for the StreamSuites Studio product family, Runtime/Auth authority, connected capabilities, and current Alpha boundaries."
    >
      <main className={styles.page}>
        <div className={styles.backdrop} aria-hidden="true" />
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <p className={styles.eyebrow}>StreamSuites Docs · Current Alpha reality</p>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>
                <img
                  className={styles.titleLogo}
                  src={logoSrc}
                  alt="StreamSuites"
                  aria-hidden="true"
                />
                <span>Production products. One authority.</span>
              </span>
            </h1>
            <p className={styles.description}>
              Current guidance for Browser Studio, native StudioApp, StreamSuites Studio for OBS,
              Runtime/Auth, and the connected creator, admin, developer, and audience surfaces.
              Planned work stays clearly separated from what is implemented today.
            </p>
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>Browser Studio</span>
              <span className={styles.metaPill}>Native StudioApp</span>
              <span className={styles.metaPill}>Studio for OBS</span>
              <span className={styles.metaPill}>Runtime/Auth authority</span>
            </div>
          </div>
        </section>

        <section className={styles.quicklinks} aria-label="Platform quicklinks">
          <div className={styles.quicklinksCard}>
            <div className={styles.quicklinksInner}>
              {quicklinks.map((link) => (
                <Link className={styles.quicklink} to={link.href} key={link.label}>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cardGrid} aria-label="Documentation sections">
          {cards.map((card, index) => (
            <Link className={styles.card} to={card.href} key={card.title}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2>{card.title}</h2>
              </div>
              <p>{card.description}</p>
              <span className={styles.cardLink}>{card.cta}</span>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
