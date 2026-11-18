import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora | open protocol',
}

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>
            {'chora'}
          </h1>
          <p>
            <i>{'a third thing or perhaps no thing'}</i>
          </p>
          <p>{'open protocol'}</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
