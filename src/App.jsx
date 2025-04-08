import { useState } from 'react'
import './App.css'
import face from './assets/character_pics/face.png'
import eye1 from './assets/character_pics/eye1.png'
import eye2 from './assets/character_pics/eye2.png'
import teye2 from './assets/character_pics/teye2.png'
import teye1 from './assets/character_pics/teye1.png'


const eyes = [{ previewEye: eye1, thumbnailEye: teye1 }, { previewEye: eye2, thumbnailEye: teye2 }]


function App() {
  const [selectedEye, setSelectedEye] = useState(eye1)

  return (
    <>

      <div class="container">
        <div class="text-container">
          <h1>sketchy chibis</h1>
          <p>make your own silly sketchy characters</p>
        </div>


        <div class="character-studio">

          <div class="character-preview">
            <img src={face} alt="body" class="image-body" />
            <img src={selectedEye} alt="eye" class="image-eye" />
          </div>

          <div className="asset-panel-actions">
            <div class="asset-selection-panel">
              <div className="features-selection-container">
                {eyes.map((eye) => {
                  return <button> <img src={eye.thumbnailEye} alt="eye" onClick={() => setSelectedEye(eye.previewEye)} style={{ height: `40px`, width: `40px` }} /> </button>
                })}

                <span>{ "More options coming soon... • ᴗ <  "}</span>
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
