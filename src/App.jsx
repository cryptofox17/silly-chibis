import { useState } from "react";

import face from "./assets/character_pics/face.webp";

// eyes preview
import eye1 from "./assets/character_pics/eyes/eye1.webp";
import eye2 from "./assets/character_pics/eyes/eye2.webp";
import eye3 from "./assets/character_pics/eyes/eye3.webp";
import eye4 from "./assets/character_pics/eyes/eye4.webp";

//eyes thumbnail
import teye2 from "./assets/character_pics/eyes/teye2.webp";
import teye1 from "./assets/character_pics/eyes/teye1.webp";
import teye3 from "./assets/character_pics/eyes/teye3.webp";
import teye4 from "./assets/character_pics/eyes/teye4.webp";

//hair preview
import hair1 from "./assets/character_pics/hair/hair1.webp";
import hair2 from "./assets/character_pics/hair/hair2.webp";
import hair3 from "./assets/character_pics/hair/hair3.webp";
import hair4 from "./assets/character_pics/hair/hair4.webp";
import hair5 from "./assets/character_pics/hair/hair5.webp";
import hair6 from "./assets/character_pics/hair/hair6.webp";
import hair7 from "./assets/character_pics/hair/hair7.webp";

//hair thumbnail
import thair1 from "./assets/character_pics/hair/thair1.webp";
import thair2 from "./assets/character_pics/hair/thair2.webp";
import thair3 from "./assets/character_pics/hair/thair3.webp";
import thair4 from "./assets/character_pics/hair/thair4.webp";
import thair5 from "./assets/character_pics/hair/thair5.webp";
import thair6 from "./assets/character_pics/hair/thair6.webp";
import thair7 from "./assets/character_pics/hair/thair7.webp";

//mouth preview
import mouth1 from "./assets/character_pics/mouths/mouth1.webp";
import mouth2 from "./assets/character_pics/mouths/mouth2.webp";
import mouth3 from "./assets/character_pics/mouths/mouth3.webp";
import mouth4 from "./assets/character_pics/mouths/mouth4.webp";
import mouth5 from "./assets/character_pics/mouths/mouth5.webp";

//mouth thumbnail
import tmouth1 from "./assets/character_pics/mouths/tmouth1.webp";
import tmouth2 from "./assets/character_pics/mouths/tmouth2.webp";
import tmouth3 from "./assets/character_pics/mouths/tmouth3.webp";
import tmouth4 from "./assets/character_pics/mouths/tmouth4.webp";
import tmouth5 from "./assets/character_pics/mouths/tmouth5.webp";

//outfits preview
import outfit1 from "./assets/character_pics/outfits/outfit1.webp";
import outfit2 from "./assets/character_pics/outfits/outfit2.webp";
import outfit3 from "./assets/character_pics/outfits/outfit3.webp";
import outfit4 from "./assets/character_pics/outfits/outfit4.webp";
import outfit5 from "./assets/character_pics/outfits/outfit5.webp";
import outfit6 from "./assets/character_pics/outfits/outfit6.webp";

//outfits thumbnail
import toutfit1 from "./assets/character_pics/outfits/toutfit1.webp";
import toutfit2 from "./assets/character_pics/outfits/toutfit2.webp";
import toutfit3 from "./assets/character_pics/outfits/toutfit3.webp";
import toutfit4 from "./assets/character_pics/outfits/toutfit4.webp";
import toutfit5 from "./assets/character_pics/outfits/toutfit5.webp";
import toutfit6 from "./assets/character_pics/outfits/toutfit6.webp";

//accessories preview
import accessory1 from "./assets/character_pics/accessories/accessory1.webp";
import accessory2 from "./assets/character_pics/accessories/accessory2.webp";
import accessory3 from "./assets/character_pics/accessories/accessory3.webp";

//accessories thumbnail
import taccessory1 from "./assets/character_pics/accessories/taccessory1.webp";
import taccessory2 from "./assets/character_pics/accessories/taccessory2.webp";
import taccessory3 from "./assets/character_pics/accessories/taccessory3.webp";

const eyes = [
  { preview: eye1, thumbnail: teye1 },
  { preview: eye2, thumbnail: teye2 },
  { preview: eye3, thumbnail: teye3 },
  { preview: eye4, thumbnail: teye4 },
];

const hairs = [
  { preview: hair1, thumbnail: thair1 },
  { preview: hair2, thumbnail: thair2 },
  { preview: hair3, thumbnail: thair3 },
  { preview: hair4, thumbnail: thair4 },
  { preview: hair5, thumbnail: thair5 },
  { preview: hair6, thumbnail: thair6 },
  { preview: hair7, thumbnail: thair7 },
];

const outfits = [
  { preview: outfit1, thumbnail: toutfit1 },
  { preview: outfit2, thumbnail: toutfit2 },
  { preview: outfit3, thumbnail: toutfit3 },
  { preview: outfit4, thumbnail: toutfit4 },
  { preview: outfit5, thumbnail: toutfit5 },
  { preview: outfit6, thumbnail: toutfit6 },
];

const accessories = [
  { preview: accessory1, thumbnail: taccessory1 },
  { preview: accessory2, thumbnail: taccessory2 },
  { preview: accessory3, thumbnail: taccessory3 },
];

const mouths = [
  { preview: mouth1, thumbnail: tmouth1 },
  { preview: mouth2, thumbnail: tmouth2 },
  { preview: mouth3, thumbnail: tmouth3 },
  { preview: mouth4, thumbnail: tmouth4 },
  { preview: mouth5, thumbnail: tmouth5 },
];

const tabHeaders = [
  { label: "Hair", value: "hair" },
  { label: "Eye", value: "eye" },
  { label: "Mouth", value: "mouth" },
  { label: "Outfit", value: "outfit" },
  { label: "Accessory", value: "accessory" },
];

const Tabs = ({
  activeTab,
  setActiveTab,
  setSelectedEye,
  setSelectedHair,
  setSelectedOutfit,
  setSelectedAccessory,
  setSelectedMouth,
}) => {
  return (
    <div className="App">
      <ul className="tabs-wrapper">
        {tabHeaders.map((e) => (
          <li
            onMouseEnter={() => {
              let imagesPreload = [];
              if (e.value === "hair") {
                imagesPreload = hairs;
              } else if (e.value === "eye") {
                imagesPreload = eyes;
              } else if (e.value === "mouth") {
                imagesPreload = mouths;
              } else if (e.value === "outfit") {
                imagesPreload = outfits;
              } else {
                imagesPreload = accessories;
              }

              imagesPreload.forEach((image) => {
                const newImage1 = new Image();
                const newImage2 = new Image();
                newImage1.src = image.preview;
                window[image] = newImage1;
                newImage2.src = image.thumbnail;
                window[image] = newImage2;
              });
            }}
            onClick={() => {
              setActiveTab(e.value);
            }}
            className={activeTab === e.value ? "tab-active" : ""}
          >
            {" "}
            {e.label}{" "}
          </li>
        ))}
      </ul>

      <div className="features-list-wrapper">
        <div className="features-list">
          <div className="tabs-content">
            {activeTab === "hair" && (
              <div className="tab">
                {hairs.map((e) => {
                  return (
                    <button>
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="eye"
                        onClick={() => setSelectedHair(e.preview)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "eye" && (
              <div className="tab">
                {eyes.map((e) => {
                  return (
                    <button>
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="eye"
                        onClick={() => setSelectedEye(e.preview)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "outfit" && (
              <div className="tab">
                {outfits.map((e) => {
                  return (
                    <button>
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="outfit"
                        onClick={() => setSelectedOutfit(e.preview)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "accessory" && (
              <div className="tab">
                {accessories.map((e) => {
                  return (
                    <button>
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="accessory"
                        onClick={() => setSelectedAccessory(e.preview)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "mouth" && (
              <div className="tab">
                {mouths.map((e) => {
                  return (
                    <button>
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="mouth"
                        onClick={() => setSelectedMouth(e.preview)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("hair");
  const [selectedEye, setSelectedEye] = useState(eye1);
  const [selectedHair, setSelectedHair] = useState(hair1);
  const [selectedOutfit, setSelectedOutfit] = useState(outfit1);
  const [selectedAccessory, setSelectedAccessory] = useState(accessory1);
  const [selectedMouth, setSelectedMouth] = useState(mouth1);

  const RandomizeFeatures = () => {
    const getRandomItem = (items, propertyName) => {
      const index = Math.floor(Math.random() * items.length);
      return items[index][propertyName];
    };
    let count = 0;
    const interval = setInterval(() => {
      count++; // Increment the counter
      setSelectedEye(getRandomItem(eyes, "preview"));
      setSelectedHair(getRandomItem(hairs, "preview"));
      setSelectedOutfit(getRandomItem(outfits, "preview"));
      setSelectedMouth(getRandomItem(mouths, "preview"));
      setSelectedAccessory(getRandomItem(outfits, "preview"));
      if (count === 5) {
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <>
      <div class="container">
        <div class="text-container">
          <h1>silly chibis</h1>
          <p>make your own sketchy characters</p>
        </div>

        <div class="character-studio">
          <div class="character-preview">
            <img src={face} alt="body" class="image-body" />
            <img src={selectedEye} alt="eye" class="image-eye" />
            <img src={selectedHair} alt="hair" class="image-hair" />
            <img src={selectedOutfit} alt="outfit" class="image-outfit" />
            <img
              src={selectedAccessory}
              alt="accessory"
              class="image-accessory"
            />
            <img src={selectedMouth} alt="mouth" class="image-mouth" />
          </div>

          <div className="actions">
            <div class="asset-selection-panel">
              <div className="tabs-container">
                <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  selectedEye={selectedEye}
                  setSelectedEye={setSelectedEye}
                  selectedHair={selectedHair}
                  setSelectedHair={setSelectedHair}
                  selectedOutfit={selectedOutfit}
                  setSelectedOutfit={setSelectedOutfit}
                  selectedAccessory={selectedAccessory}
                  setSelectedAccessory={setSelectedAccessory}
                  selectedMouth={selectedMouth}
                  setSelectedMouth={setSelectedMouth}
                />
              </div>
            </div>

            <div className="actions-container">
              <button onClick={() => RandomizeFeatures()} class="primary-btn">
                {" "}
                Randomize
              </button>
              <button class="primary-btn">Download Image</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;