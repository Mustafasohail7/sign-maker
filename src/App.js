import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useState } from 'react'
import { Element } from 'react-scroll'

//stylesheet
import './styles/App.css'

//images
import Xmas from './assets/Xmas.jpg'

//components
import NavBar from './components/NavBar'
import TagLine from './components/TagLine'
import DropDown from './components/DropDown'
import TextPreviewer from './components/TextPreviewer'
import ImageComponent from './components/ImageComponent'
// import ImageSelector from './components/ImageSelector'
import Options from './components/Options'
import TagLine2 from './components/TagLine2'
import VideoPlayer from './components/VideoPlayer'
import ProcessModel from './components/ProcessModel'
import PortfolioGrid from './components/PortfolioGrid'
import FeatureGrid from './components/FeatureGrid'
import TagLine3 from './components/TagLine3'
import DescriptionText from './components/DescriptionText'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'
import ChatHead from './components/ChatHead' 
import ProcessText from './components/ProcessText'
import HomeIcon from './components/HomeIcon'
import ProcessModelList from './components/ProcessModelList'

function App() {

  const [dropDown,setDropDown] = useState(false)
  const [shrink,setShrink] = useState(false)
  // const [selectedImage,setSelectedImage] = useState({id: 2, title: "Coffee Shop" ,src: coffee})
  const selectedImage = {id: 2, title: "Coffee Shop" ,src: Xmas}
  const [userText,setUserText] = useState('Drag Me')
  const [size, setSize] = useState('small');
  const [color,setColor] = useState('red');
  
  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: {
          body: {
            bg: 'white',
          }
        }
      },
    })}>
      <SocialLinks/>
      <ChatHead/>
      <HomeIcon/>
      <Element name='home'>
        <NavBar setDropDown={setDropDown} />
      </Element>
      <DropDown dropDown={dropDown} setDropDown={setDropDown}/>
      <div className="component">
        <TagLine/>
        <TextPreviewer setUserText={setUserText} />
      </div>
      <div className="function-container">
        <div className="component-left">
          <ImageComponent userText={userText} selectedImage={selectedImage} size={size} color={color}/>
        </div>
        <div className='component-right' >
          <Options size={size} setSize={setSize} color={color} setColor={setColor}/>
        </div>
      </div>
      <TagLine2/>
      <VideoPlayer/>
      <div className='process-container'>
        <ProcessModel shrink={shrink} setShrink={setShrink} />
        <ProcessText/>
        {shrink && <ProcessModelList shrink={shrink} />}
      </div>
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
      {/* <Graphic/> */}
      <div className="static-bg-2"/>
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
