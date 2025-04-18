import { useState } from "react";
import html2canvas from "html2canvas";

//icons
import donwloadIcon from "./icons/download-simple.svg";
import randomizeIcon from "./icons/dice-three.svg";

import face from "./assets/character_pics/face.webp";

import kitty from "./assets/character_pics/kitty.webp";

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
  selectedHair,
  selectedEye,
  selectedMouth,
  selectedAccessory,
  selectedOutfit,
  setSelectedEye,
  setSelectedHair,
  setSelectedOutfit,
  setSelectedAccessory,
  setSelectedMouth,
}) => {
  return (
    <div className="App">
      <ul className="tabs-wrapper">
        {tabHeaders.map((e, index) => (
          <li
            key={`${e}-${index}-looping-through-headers`}
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
                {hairs.map((e, index) => {
                  return (
                    <button
                      key={`${e}-${index}-looping-through-hair`}
                      className={
                        e.thumbnail === selectedHair.thumbnail
                          ? "active-button"
                          : "inactive-button"
                      }
                    >
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="eye"
                        onClick={() => setSelectedHair(e)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "eye" && (
              <div className="tab">
                {eyes.map((e, index) => {
                  return (
                    <button
                      key={`${e}-${index}-looping-through-eye`}
                      className={
                        e.thumbnail === selectedEye.thumbnail
                          ? "active-button"
                          : "inactive-button"
                      }
                    >
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="eye"
                        onClick={() => setSelectedEye(e)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "outfit" && (
              <div className="tab">
                {outfits.map((e, index) => {
                  return (
                    <button
                      key={`${e}-${index}-looping-through-outfits`}
                      className={
                        e.thumbnail === selectedOutfit.thumbnail
                          ? "active-button"
                          : "inactive-button"
                      }
                    >
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="outfit"
                        onClick={() => setSelectedOutfit(e)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "accessory" && (
              <div className="tab">
                {accessories.map((e, index) => {
                  return (
                    <button
                      key={`${e}-${index}-looping-through-accessory`}
                      className={
                        e.thumbnail === selectedAccessory.thumbnail
                          ? "active-button"
                          : "inactive-button"
                      }
                    >
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="accessory"
                        onClick={() => setSelectedAccessory(e)}
                      />{" "}
                    </button>
                  );
                })}
              </div>
            )}

            {activeTab === "mouth" && (
              <div className="tab">
                {mouths.map((e, index) => {
                  return (
                    <button
                      key={`${e}-${index}-looping-through-mouth`}
                      className={
                        e.thumbnail === selectedMouth.thumbnail
                          ? "active-button"
                          : "inactive-button"
                      }
                    >
                      {" "}
                      <img
                        src={e.thumbnail}
                        alt="mouth"
                        onClick={() => setSelectedMouth(e)}
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
  const [selectedEye, setSelectedEye] = useState(eyes[0]);
  const [selectedHair, setSelectedHair] = useState(hairs[0]);
  const [selectedOutfit, setSelectedOutfit] = useState(outfits[0]);
  const [selectedAccessory, setSelectedAccessory] = useState(accessories[0]);
  const [selectedMouth, setSelectedMouth] = useState(mouths[0]);

  const RandomizeFeatures = () => {
    const getRandomItem = (items) => {
      const index = Math.floor(Math.random() * items.length);
      return items[index];
    };
    let count = 0;
    const interval = setInterval(() => {
      count++; // Increment the counter
      setSelectedEye(getRandomItem(eyes));
      setSelectedHair(getRandomItem(hairs));
      setSelectedOutfit(getRandomItem(outfits));
      setSelectedMouth(getRandomItem(mouths));
      setSelectedAccessory(getRandomItem(accessories));
      if (count === 10) {
        clearInterval(interval);
      }
    }, 150);
  };

  const DownloadImage = () => {
    html2canvas(document.querySelector("#character-preview")).then((canvas) => {
      // Convert canvas to data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "sillest-chibi.png"; // Name for downloaded file

      // Append to the document, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <>
      <div className="container">
        <div className="text-container">
          <h1>silly chibis</h1>
          <p className="title-subtext">make your own sketchy characters</p>
        </div>

        <div className="character-studio">
        <div className="kitty-image-wrapper">
              <img src={kitty} alt="kitty" className="kitty-image" />
              <div className="meow">meow</div>
            </div>
          <div className="preview-wrapper">
      
            <div className="character-preview" id="character-preview">
              <img src={face} alt="body" className="image-body" />
              <img src={selectedEye.preview} alt="eye" className="image-eye" />
              <img
                src={selectedHair.preview}
                alt="hair"
                className="image-hair"
              />
              <img
                src={selectedOutfit.preview}
                alt="outfit"
                className="image-outfit"
              />
              <img
                src={selectedAccessory.preview}
                alt="accessory"
                className="image-accessory"
              />
              <img
                src={selectedMouth.preview}
                alt="mouth"
                className="image-mouth"
              />
            </div>
          </div>

          <div className="actions">
            <div className="actions-container">
              <button
                onClick={() => RandomizeFeatures()}
                className="primary-btn"
              >
                {" "}
                <img
                  src={randomizeIcon}
                  alt="randomize-icon"
                  height={24}
                  width={24}
                />
                Randomize
              </button>
              <button onClick={() => DownloadImage()} className="primary-btn">
                <img
                  src={donwloadIcon}
                  alt="download-icon"
                  height={24}
                  width={24}
                />
                Download
              </button>
            </div>

            <div className="asset-selection-panel">
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
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
