import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Menu, Header } from '../components'
import Cookbook from '../components/Cookbook'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook function" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.header}>
        <Header />
      </main>

      <main className={styles.main}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.cookbook}>
          <Cookbook />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Rice-Rolls"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by FanTuan
        </a>
      </footer>
    </div>
  )
}

export default Home
