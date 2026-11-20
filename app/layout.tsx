'use client'

import { Background, Header, Sidebar } from 'components'
import { MenuContextProvider, ThemeContextProvider } from 'contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
    <head>
      <link rel="alternate" type="application/rss+xml" title="rss" href="/feed/rss" />
      <link rel="alternate" type="application/atom+xml" title="atom" href="/feed/atom" />
      <link rel="alternate" type="application/feed+json" title="json" href="/feed/json" />
    </head>
    <body>
      <ThemeContextProvider>
        <MenuContextProvider>
          <Background />
          <Header
            title={{
              link: '/',
            }}
            items={[
              {
                link: '/artifacts',
                title: 'artifacts',
                target: '',
              },
              'divider',
              {
                link: 'https://git.chora.io/explore/repos',
                title: 'git',
                target: '_blank',
              },
              {
                link: '/feed/rss',
                title: 'rss',
                target: '_blank',
              }
            ]}
            showMenuButton={true}
            showMobileTitle={true}
          />
          <Sidebar
            items={[
              {
                link: '.',
                target: '',
                title: 'home',
              },
              {
                link: 'artifacts',
                target: '',
                title: 'artifacts',
              },
              {
                link: 'https://git.chora.io/explore/repos',
                title: 'git',
                target: '_blank',
              },
              {
                link: '/feed/rss',
                title: 'rss',
                target: '_blank',
              }
            ]}
            mobileOnly={true}
          />
          <main>{children}</main>
        </MenuContextProvider>
      </ThemeContextProvider>
    </body>
  </html>
)

export default Layout
