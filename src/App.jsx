import { useState } from 'react'
import './App.css'

// components

import face from './assets/character_pics/face.png'
import eye1 from './assets/character_pics/eye1.png'
import eye2 from './assets/character_pics/eye2.png'
import teye2 from './assets/character_pics/teye2.png'
import teye1 from './assets/character_pics/teye1.png'


const eyes = [{ previewEye: eye1, thumbnailEye: teye1 }, { previewEye: eye2, thumbnailEye: teye2 }]

const Title = () => {
  return (
      <div class="text-container">
          <h1>sketchy chibis</h1>
          <p>make your own silly sketchy characters</p>
      </div>
  )
}

function App() {
  const [selectedEye, setSelectedEye] = useState(eye1)

  return (
    <>

      <div class="container">

        <Title />

        <div class="character-studio">

          <div class="character-preview">
            <img src={face} alt="body" class="image-body" />
            <img src={selectedEye} alt="eye" class="image-eye" />
          </div>

          <div className="actions">

            <div class="asset-selection-panel">


              <div className="tabs-container">
                {/* need to add here */}
              </div>

              <div className="features-list-wrapper">
                <div className="features-list">

                  {eyes.map((eye) => {
                    return <button> <img src={eye.thumbnailEye} alt="eye" onClick={() => setSelectedEye(eye.previewEye)} style={{ height: `40px`, width: `40px` }} /> </button>
                  })}

                </div>
              </div>

            </div>

            <div className="actions-container">
              <button>Randomize</button>
              <button>Download Image</button>
            </div>
          </div>

        </div>
      </div>



    </>
  )
}

export default App
