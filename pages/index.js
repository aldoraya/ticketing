import Head from 'next/head'
import Hero from "../components/Hero";
import Form from "../components/Form";
import FormMobile from "../components/mobile/FormMobile";
import ImageSlider from "../components/ImageSlider";
import Body1 from "../components/Body1";
import Body1Mobile from "../components/mobile/body1Mobile";
import Body2 from "../components/Body2";
import Body2Mobile from "../components/mobile/body2Mobile";
import Body3 from "../components/Body3";
import Body3Mobile from "../components/mobile/Body3Mobile"
import Body4 from "../components/Body4";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div>
    <Head>
      <title>Ticketing</title>
    </Head>  
    <Hero />
    <Form />
    <FormMobile />
    <ImageSlider />
    <Body1 />
    <Body1Mobile />
    <Body2 />
    <Body2Mobile />
    <Body3 />
    <Body3Mobile />
    <Body4 />
    <Footer />
    </div>
  )
}