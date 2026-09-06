import React from 'react'
import Flipbook from '../components/Flipbook';


  

const Page36 = () => {

  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh',overflow:'hidden' }}>
      <iframe
        style={{ position: 'absolute', border: 'none', width: '100%', height: '120%', left: 0, top: 0 }}
        src="https://online.pubhtml5.com/qdxdi/scdu/"
        seamless="seamless"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allowFullScreen={true}
        title="PubHtml5 FlipBook"
      />
    </div>

  )
}

export default Page36