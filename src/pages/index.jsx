import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const cards = [
  {
    title: 'Getting started',
    description: 'Install StreamSuites, run first checks, and confirm account types.',
    href: '/docs/getting-started/installation',
    cta: 'Start setup',
  },
  {
    title: 'Creator guide',
    description: 'Build creator-ready workflows, automation rules, and live assets.',
    href: '/docs/creator-guide/creator-dashboard',
    cta: 'Open creator hub',
  },
  {
    title: 'Runtime',
    description: 'Understand exports, versioning, and runtime automation states.',
    href: '/docs/runtime/runtime-overview',
    cta: 'Explore runtime',
  },
  {
    title: 'Integrations',
    description: 'Connect YouTube, Twitch, Rumble, Discord, and more.',
    href: '/docs/integrations/youtube',
    cta: 'View integrations',
  },
  {
    title: 'Support',
    description: 'Find answers fast with FAQ, troubleshooting, and support model.',
    href: '/docs/support/faq',
    cta: 'Get support',
  },
  {
    title: 'Legal / EULA',
    description: 'Review licensing terms, usage rights, and commercial notices.',
    href: '/EULA.md',
    cta: 'Read EULA',
  },
];

export default function Home() {
  return (
    <Layout
      title="StreamSuites Documentation"
      description="StreamSuites documentation hub for creators, runtimes, integrations, and support."
    >
      <main className={styles.page}>
        <div className={styles.backdrop} aria-hidden="true" />
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <p className={styles.eyebrow}>StreamSuites Docs Hub</p>
            <h1 className={styles.title}>StreamSuites{'\u2122'} Documentation</h1>
            <p className={styles.description}>
              Everything you need to stand up StreamSuites, craft creator-ready workspaces,
              and understand the runtime surface area. Start here and drill into the guides
              and reference as the platform evolves.
            </p>
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>Creator workflows</span>
              <span className={styles.metaPill}>Runtime automation</span>
              <span className={styles.metaPill}>Platform integrations</span>
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
