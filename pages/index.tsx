import type { NextPage } from 'next'
import { AboutMe } from '../components/AboutMe'
import { Coaching } from '../components/Coaching'
import { Intro } from '../components/Intro'
import { Offer } from '../components/Offer'
import { Page } from '../components/Page'
import { Place } from '../components/Place'
import { Portfolio } from '../components/Portfolio'
import { Reviews } from '../components/Review'

const Home: NextPage = () => {
  return (
    <Page>
      <Intro />
      <Portfolio />
      <AboutMe />
      <Coaching />
      <Offer/>
      <Reviews />
      <Place />
    </Page>
  )
}

export default Home
