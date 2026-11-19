import { Metadata } from 'next'
import Link from 'next/link'

import { getArtifacts } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora | artifacts',
}

async function getAllArtifacts() {
  return [
    { group: 'choreography', items: getArtifacts('choreography') },
  ]
}

const ResearchPage = async () => {
  const artifacts = await getAllArtifacts()
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>{'artifacts'}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          {!artifacts.length ? (
            <p>
              <i>{'failed to load artifacts'}</i>
            </p>
          ) : (
            <div>
              {artifacts.map(({ group, items }) => (
                <div key={group} style={{ margin: '1em 0' }}>
                  <h2>{group}</h2>
                  <ul>
                    {items.map(
                      ({ id, title, description, created, updated }) => (
                        <li key={id}>
                          <Link href={`/artifacts/` + group + '/' + id}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>
                              <i>{`created: ${created.toDateString()}`}</i>
                              {' | '}
                              <i>{`updated: ${updated.toDateString()}`}</i>
                            </p>
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResearchPage
