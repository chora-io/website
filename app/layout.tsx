'use client'

import { Background, Header, Sidebar } from 'chora/components'
import { MenuContextProvider, ThemeContextProvider } from 'chora/contexts'

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
