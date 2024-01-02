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
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
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
