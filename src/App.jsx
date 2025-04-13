import { useState } from 'react'

import face from './assets/character_pics/face.webp'

// eyes preview 
import eye1 from './assets/character_pics/eyes/eye1.webp'
import eye2 from './assets/character_pics/eyes/eye2.webp'
import eye3 from './assets/character_pics/eyes/eye3.webp'
import eye4 from './assets/character_pics/eyes/eye4.webp'


//eyes thumbnail
import teye2 from './assets/character_pics/eyes/teye2.png'
import teye1 from './assets/character_pics/eyes/teye1.png'
import teye3 from './assets/character_pics/eyes/teye3.webp'
import teye4 from './assets/character_pics/eyes/teye4.webp'


//hair preview 
import hair1 from './assets/character_pics/hair/hair1.webp'
import hair2 from './assets/character_pics/hair/hair2.webp'
import hair3 from './assets/character_pics/hair/hair3.webp'
import hair4 from './assets/character_pics/hair/hair4.webp'
import hair5 from './assets/character_pics/hair/hair5.webp'
import hair6 from './assets/character_pics/hair/hair6.webp'
import hair7 from './assets/character_pics/hair/hair7.webp'

//hair thumbnail 
import thair1 from './assets/character_pics/hair/thair1.webp'
import thair2 from './assets/character_pics/hair/thair2.webp'
import thair3 from './assets/character_pics/hair/thair3.webp'
import thair4 from './assets/character_pics/hair/thair4.webp'
import thair5 from './assets/character_pics/hair/thair5.webp'
import thair6 from './assets/character_pics/hair/thair6.webp'
import thair7 from './assets/character_pics/hair/thair7.webp'

//mouth preview 
import mouth1 from './assets/character_pics/mouths/mouth1.webp'
import mouth2 from './assets/character_pics/mouths/mouth2.webp'
import mouth3 from './assets/character_pics/mouths/mouth3.webp'
import mouth4 from './assets/character_pics/mouths/mouth4.webp'
import mouth5 from './assets/character_pics/mouths/mouth5.webp'

//mouth thumbnail
import tmouth1 from './assets/character_pics/mouths/tmouth1.webp'
import tmouth2 from './assets/character_pics/mouths/tmouth2.webp'
import tmouth3 from './assets/character_pics/mouths/tmouth3.webp'
import tmouth4 from './assets/character_pics/mouths/tmouth4.webp'
import tmouth5 from './assets/character_pics/mouths/tmouth5.webp'

//outfits preview 
import outfit1 from './assets/character_pics/outfits/outfit1.webp'
import outfit2 from './assets/character_pics/outfits/outfit2.webp'
import outfit3 from './assets/character_pics/outfits/outfit3.webp'
import outfit4 from './assets/character_pics/outfits/outfit4.webp'
import outfit5 from './assets/character_pics/outfits/outfit5.webp'
import outfit6 from './assets/character_pics/outfits/outfit6.webp'

//outfits thumbnail
import toutfit1 from './assets/character_pics/outfits/toutfit1.webp'
import toutfit2 from './assets/character_pics/outfits/toutfit2.webp'
import toutfit3 from './assets/character_pics/outfits/toutfit3.webp'
import toutfit4 from './assets/character_pics/outfits/toutfit4.webp'
import toutfit5 from './assets/character_pics/outfits/toutfit5.webp'
import toutfit6 from './assets/character_pics/outfits/toutfit6.webp'

//accessories preview 
import accessory1 from './assets/character_pics/accessories/accessory1.webp'
import accessory2 from './assets/character_pics/accessories/accessory2.webp'
import accessory3 from './assets/character_pics/accessories/accessory3.webp'
//import accessory4 from './assets/character_pics/accessories/accessory4.webp'

//accessories thumbnail 
import taccessory1 from './assets/character_pics/accessories/taccessory1.webp'
import taccessory2 from './assets/character_pics/accessories/taccessory2.webp'
import taccessory3 from './assets/character_pics/accessories/taccessory3.webp'
//import taccessory4 from './assets/character_pics/accessories/taccessory4.webp'



const eyes = [
  { previewEye: eye1, thumbnailEye: teye1 },
  { previewEye: eye2, thumbnailEye: teye2 },
  { previewEye: eye3, thumbnailEye: teye3 },
  { previewEye: eye4, thumbnailEye: teye4 },
]

const hairs = [
  { previewHair: hair1, thumbnailHair: thair1 },
  { previewHair: hair2, thumbnailHair: thair2 },
  { previewHair: hair3, thumbnailHair: thair3 },
  { previewHair: hair4, thumbnailHair: thair4 },
  { previewHair: hair5, thumbnailHair: thair5 },
  { previewHair: hair6, thumbnailHair: thair6 },
  { previewHair: hair7, thumbnailHair: thair7 },
]

const outfits = [
  { previewOutfit: outfit1, thumbnailOutfit: toutfit1 },
  { previewOutfit: outfit2, thumbnailOutfit: toutfit2 },
  { previewOutfit: outfit3, thumbnailOutfit: toutfit3 },
  { previewOutfit: outfit4, thumbnailOutfit: toutfit4 },
  { previewOutfit: outfit5, thumbnailOutfit: toutfit5 },
  { previewOutfit: outfit6, thumbnailOutfit: toutfit6 },
]

const accessories = [
  { previewAccessory: accessory1, thumbnailAccessory: taccessory1 },
  { previewAccessory: accessory2, thumbnailAccessory: taccessory2 },
  { previewAccessory: accessory3, thumbnailAccessory: taccessory3 },
  // { previewAccessory: accessory4, thumbnailAccessory: taccessory4 },

]

const mouths = [
  { previewMouth: mouth1, thumbnailMouth: tmouth1 },
  { previewMouth: mouth2, thumbnailMouth: tmouth2 },
  { previewMouth: mouth3, thumbnailMouth: tmouth3 },
  { previewMouth: mouth4, thumbnailMouth: tmouth4 },
  { previewMouth: mouth5, thumbnailMouth: tmouth5 },

]



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



const Tabs = ({
  activeTab, setActiveTab,
  selectedEye, setSelectedEye,
  selectedHair, setSelectedHair,
  selectedOutfit, setSelectedOutfit,
  selectedAccessory, setSelectedAccessory,
  selectedMouth, setSelectedMouth

}) => {
  return (
    <div className="App">
      <ul className="tabs-wrapper">

        {tabHeaders.map((e) => (
          <li onClick={() => setActiveTab(e.value)} className={activeTab === e.value ? 'tab-active' : ''}> {e.label} </li>
        ))}
      </ul>

      <div className="features-list-wrapper">
        <div className="features-list">

          <div className="tabs-content">
            {activeTab === "hair" && (
              <div className="tab">
                {hairs.map((e) => {
                  return <button> <img src={e.thumbnailHair} alt="eye" onClick={() => setSelectedHair(e.previewHair)} /> </button>
                })}
              </div>
            )}

            {activeTab === "eye" && (
              <div className="tab">
                {eyes.map((e) => {
                  return <button> <img src={e.thumbnailEye} alt="eye" onClick={() => setSelectedEye(e.previewEye)} /> </button>
                })}
              </div>
            )}

            {activeTab === "outfit" && (
              <div className="tab">
                {outfits.map((e) => {
                  return <button> <img src={e.thumbnailOutfit} alt="outfit" onClick={() => setSelectedOutfit(e.previewOutfit)} /> </button>
                })}
              </div>
            )}


            {activeTab === "accessory" && (
              <div className="tab">
                {accessories.map((e) => {
                  return <button> <img src={e.thumbnailAccessory} alt="accessory" onClick={() => setSelectedAccessory(e.previewAccessory)} /> </button>
                })}
              </div>
            )}

            {activeTab === "mouth" && (
              <div className="tab">
                {mouths.map((e) => {
                  return <button> <img src={e.thumbnailMouth} alt="mouth" onClick={() => setSelectedMouth(e.previewMouth)} /> </button>
                })}
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
  const [selectedHair, setSelectedHair] = useState(hair1)
  const [selectedOutfit, setSelectedOutfit] = useState(outfit1)
  const [selectedAccessory, setSelectedAccessory] = useState(accessory1)
  const [selectedMouth, setSelectedMouth] = useState(mouth1)


  const RandomizeFeatures = () => {
   
     const index = Math.floor(Math.random() * eyes.length);
     setSelectedEye(eyes[index].previewEye);
   
     const getRandomItem = (items, propertyName) => {
      const index = Math.floor(Math.random() * items.length);
      return items[index][propertyName];
    };

    setSelectedEye(getRandomItem(eyes, 'previewEye'));
    setSelectedHair(getRandomItem(hairs, 'previewHair'));
    setSelectedOutfit(getRandomItem(outfits, 'previewOutfit'));
    setSelectedMouth(getRandomItem(mouths, 'previewMouth'));
    setSelectedAccessory(getRandomItem(outfits, 'previewOutfit'))
  }

  return (
    <>
      <div class="container">

        <Title />

        <div class="character-studio">

          <div class="character-preview">
            <img src={face} alt="body" class="image-body" />
            <img src={selectedEye} alt="eye" class="image-eye" />
            <img src={selectedHair} alt="hair" class="image-hair" />
            <img src={selectedOutfit} alt="outfit" class="image-outfit" />
            <img src={selectedAccessory} alt="accessory" class="image-accessory" />
            <img src={selectedMouth} alt="mouth" class="image-mouth" />
          </div>

          <div className="actions">

            <div class="asset-selection-panel">

              <div className="tabs-container">
                <Tabs
                  activeTab={activeTab} setActiveTab={setActiveTab}
                  selectedEye={selectedEye} setSelectedEye={setSelectedEye}
                  selectedHair={selectedHair} setSelectedHair={setSelectedHair}
                  selectedOutfit={selectedOutfit} setSelectedOutfit={setSelectedOutfit}
                  selectedAccessory={selectedAccessory} setSelectedAccessory={setSelectedAccessory}
                  selectedMouth={selectedMouth} setSelectedMouth={setSelectedMouth}

                />
              </div>

            </div>

            <div className="actions-container">
              <button onClick={() => RandomizeFeatures()} class="primary-btn"> Randomize</button>
              <button class="primary-btn">Download Image</button>
            </div>
          </div>

        </div>
      </div>



    </>
  )
}

export default App
