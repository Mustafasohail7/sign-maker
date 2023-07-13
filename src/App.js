import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import { Element } from 'react-scroll'

//stylesheet
import './styles/App.css'

//images
import coffee from './assets/coffee.avif'

//components
import Header from './components/Header'
import NavBar from './components/NavBar'
import TagLine from './components/TagLine'
import DropDown from './components/DropDown'
import TextPreviewer from './components/TextPreviewer'
import ImageComponent from './components/ImageComponent'
import ImageSelector from './components/ImageSelector'
import Options from './components/Options'
import TagLine2 from './components/TagLine2'
import VideoPlayer from './components/VideoPlayer'
import ProcessModel from './components/ProcessModel'
import PortfolioGrid from './components/PortfolioGrid'
import FeatureGrid from './components/FeatureGrid'
import TagLine3 from './components/TagLine3'
import DescriptionText from './components/DescriptionText'
import Graphic from './components/Graphic'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  const [dropDown,setDropDown] = useState(false)
  const [selectedImage,setSelectedImage] = useState({id: 2, title: "Coffee Shop" ,src: coffee})
  const [userText,setUserText] = useState('Drag Me')

  return (
    <ChakraProvider>
      <Header/>
      <NavBar setDropDown={setDropDown} />
      {/* {dropDown && <DropDown dropDown={dropDown}/>} */}
      <DropDown dropDown={dropDown}/>
      <TagLine/>
      <TextPreviewer setUserText={setUserText} />
      <div className="function-container">
        <div className='component-left' >
          <ImageComponent userText={userText} selectedImage={selectedImage}/>
          <ImageSelector selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </div>
        <div className='component-right' >
          <Options/>
        </div>
      </div>
      <TagLine2/>
      <VideoPlayer/>
      <ProcessModel/>
      <Element name='portfolio'>
        <PortfolioGrid/>
      </Element>
      <Element name='features'>
        <FeatureGrid/>
      </Element>
      <div className="static-bg-1"/>
      <Element name='description'>
        <TagLine3/>
        <DescriptionText/>
      </Element>
      <Graphic/>
      <div className="static-bg-1"/>
      <Element name='faq'>
        <FAQ/>
      </Element>
      <Element name='about'>
        <Footer/>
      </Element>
    </ChakraProvider>
  );
}

export default App;
