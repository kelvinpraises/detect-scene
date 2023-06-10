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
  } = useCanvas();

  return (
    <div>
      <div>
        <Canvas {...{ canvasref }} />

        <video
          crossOrigin="anonymous"
          ref={videoRef}
          controls
          preload="metadata"
        >
          <source
            src="https://cors-anywhere.herokuapp.com/https://rr2---sn-huoob-5c8e.googlevideo.com/videoplayback?expire=1679143182&ei=rlwVZOSECp2Jp-oPjomCmA0&ip=197.210.70.49&id=o-AM8ILnek9DNVnqbo8RTGpS9tR7SYUd5SMjfJYOJBxFGz&itag=18&source=youtube&requiressl=yes&mh=-6&mm=31%2C29&mn=sn-huoob-5c8e%2Csn-5hnednsz&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=200000&spc=H3gIhtyO6rzKRu99xBiGNlRfQcP3VqtxJ9p66-oE011aiNB2JA&vprv=1&mime=video%2Fmp4&ns=moRBX-XGQzxoArXCdBEzc7wL&gir=yes&clen=36207061&ratebypass=yes&dur=904.277&lmt=1651755110980540&mt=1679121171&fvip=2&fexp=24007246&c=WEB&txp=4538434&n=YGjmrUKfjftJUA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgCQw_2Um74i-3u8PfaQROWk-pYnrnLKRmhrSMWzjd5VICIAZiLliv617_GDGQ8LxkUR1YfHSFWIw3AMnhijnhnQ-G&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAP9SS5BGGADKOpo11H8QNCtenZ-BDm77Y1vlBv1TiKeHAiEAxtokDH3QvrfJYyvG6aykXVztf10GLQ_JLh93EBCx7vg%3D"
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
