import { useState } from 'react'
import './App.css'

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

const tabHeaders = [
  { label: "Hair", value: "hair" },
  { label: "Eye", value: "eye" },
  { label: "Mouth", value: "mouth" },
  { label: "Outfit", value: "outfit" },
  { label: "Accessory", value: "accessory" },
];



const Tabs = ({ activeTab, setActiveTab, selectedEye, setSelectedEye }) => {
  return (
    <div className="App">
      <ul className="tabs-wrapper">

        {tabHeaders.map((e) => (
          <li onClick={() => setActiveTab(e.value)} className={ activeTab === e.value ? 'tab-active' : ''}> {e.label} </li>
        ))}
      </ul>

      <div className="features-list-wrapper">
        <div className="features-list">

          <div className="tabs-content">
            {activeTab === "hair" && (
              <div className="tab">
                <h1>hair</h1>
              </div>
            )}

            {activeTab === "eye" && (
              <div className="tab">
                {eyes.map((eye) => {
                  return <button> <img src={eye.thumbnailEye} alt="eye" onClick={() => setSelectedEye(eye.previewEye)} style={{ height: `40px`, width: `40px` }} /> </button>
                })}
              </div>
            )}

            {activeTab === "mouth" && (
              <div className="tab">
                <h1>mouth</h1>
              </div>
            )}
          </div>

        </div>
      </div>


    </div>
  );
}



function App() {
  const [activeTab, setActiveTab] = useState("hair");
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
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} selectedEye={selectedEye} setSelectedEye={setSelectedEye} />
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
