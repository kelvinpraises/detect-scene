import * as React from "react";
import Canvas from "./canvas";
import useCanvas from "./hooks/useCanvas";
import "./style.css";

export default function App() {
  const [state, useState] = React.useState("happy");

  const {
    ref: canvasref,
    captureVideo,
    sceneRef,
    videoRef,
    slicedRef,
    // respawnPoll,
  } = useCanvas();

  // React.useEffect(() => {
  //   respawnPoll();
  // }, []);

  return (
    <div style={{"display": "flex"}}>
      <div>
        <Canvas {...{ canvasref }} />

        <video
          crossOrigin="anonymous"
          ref={videoRef}
          controls
          preload="metadata"
        >
          <source
            src="https://web-production-44900.up.railway.app/https://rr4---sn-qxo7rn7k.googlevideo.com/videoplayback?expire=1686415866&ei=mlWEZJL6GNqisfIP7byD4Ag&ip=34.127.45.197&id=o-ACTv5H5GjBwoS0JXHJosn5zbc8DmwkWR0Phxb6zd4MMI&itag=18&source=youtube&requiressl=yes&mh=n4&mm=31%2C29&mn=sn-qxo7rn7k%2Csn-qxoedne7&ms=au%2Crdu&mv=m&mvi=4&pl=20&spc=qEK7B47hYx7RF-xigXlB8ufOXf-I3dhkSnCKsIobqg&vprv=1&svpuc=1&mime=video%2Fmp4&ns=DatP-PxMEnLqZjSkUWji7UMN&gir=yes&clen=11709103&ratebypass=yes&dur=260.318&lmt=1686094119549163&mt=1686393936&fvip=3&fexp=24007246%2C24363391%2C51000013&beids=24350018&c=WEB&txp=5538434&n=sbSdFudAwOX32BiSWD&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJfhjZtne5qpw_8wC2v8MMgTFjQX8cwZx21Zb92_cMRtAiBDdNnauZNbYU8ja-EIGILdTgh25QzAySvIa1mdkxjYZg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIhAM6jAaHBn3kWPnKmo-dYbEL85W5gn_ianrO1YlEoILGdAiADlNsLGnkHy3ODEIUq_Dph239VV_ZMPaJsC3_tPC0PDA%3D%3D"
            type="video/mp4"
          />
        </video>

        <div
          ref={slicedRef}
          style={{ display: "flex", flexWrap: "wrap" }}
        ></div>

        <div>{state}</div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>

        <button onClick={async () => await captureVideo()}>
          Capture Image
        </button>
      </div>
      <div ref={sceneRef} style={{ display: "flex", flexWrap: "wrap" }}></div>
    </div>
  );
}
