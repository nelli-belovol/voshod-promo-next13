import About from '@/components/About/About'
import Hero from '@/components/Hero/Hero'
import Map from '@/components/Map/Map'
import Offers from '@/components/Offers/Offers'
import Steps from '@/components/Steps/Steps'
import Contacts from '@/components/Contacts/Contacts'

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <About />
      <Offers />
      <Contacts />
    </>
  )
}
