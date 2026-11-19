'use client'

import { Background, Header, Sidebar } from 'components'
import { MenuContextProvider, ThemeContextProvider } from 'contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
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
                link: 'https://git.chora.io',
                title: 'git',
                target: '_blank',
              },
              {
                link: '/artifacts/feed',
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
