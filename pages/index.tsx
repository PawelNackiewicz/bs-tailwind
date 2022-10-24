import type { NextPage } from 'next'
import { AboutMe } from '../components/AboutMe'
import { Coaching } from '../components/Coaching'
import { Intro } from '../components/Intro'
import { Offer } from '../components/Offer'
import { Page } from '../components/Page'
import { Portfolio } from '../components/Portfolio'

const Home: NextPage = () => {
  return (
    <Page>
      <Intro />
      <Portfolio />
      <AboutMe />
      <Coaching />
      <Offer/>
    </Page>
  )
}

export default Home
