import type { NextPage } from 'next'
import { Coaching } from '../components/Coaching'
import { AboutMe } from '../components/AboutMe'
import { Page } from '../components/Page'
import { Place } from '../components/Place'

const Home: NextPage = () => {
  return (
    <Page>
      <AboutMe />
      <Coaching />
      <Place />
    </Page>
  )
}

export default Home
