import * as React from 'react';

const Canvas = (props) => {
  return <canvas hidden ref={props.canvasref} {...props} />;
};

export default Canvas;
