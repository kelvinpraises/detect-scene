// const getAverageColor = (img) => {
//   const max = 10; // Max size (Higher num = better precision but slower)
//   const { naturalWidth: iw, naturalHeight: ih } = img;
//   const ctx = document.createElement(`canvas`).getContext(`2d`);
//   const sr = Math.min(max / iw, max / ih); // Scale ratio
//   const w = Math.ceil(iw * sr); // Width
//   const h = Math.ceil(ih * sr); // Height
//   const a = w * h; // Area

//   img.crossOrigin = 1;
//   ctx.canvas.width = w;
//   ctx.canvas.height = h;
//   ctx.drawImage(img, 0, 0, w, h);

//   const data = ctx.getImageData(0, 0, w, h).data;
//   let r = 0;
//   let g = 0;
//   let b = 0;

//   for (let i = 0; i < data.length; i += 4) {
//     r += data[i];
//     g += data[i + 1];
//     b += data[i + 2];
//   }

//   r = ~~(r / a);
//   g = ~~(g / a);
//   b = ~~(b / a);

//   return { r, g, b };
// };

// //get the canvas
// var canvas = document.querySelector('div.canvas');
// var backgroundImage = window
//   .getComputedStyle(canvas)
//   .getPropertyValue('background-image');
// //remove the background from canvas
// canvas.style.backgroundImage = 'none';
// //number of columns and rows
// var col = 8;
// var row = 4;
// var colWidth = canvas.offsetWidth / col;
// var rowHeight = canvas.offsetHeight / row;
// //loop through the cells
// for (var i = 0; i < row; i++) {
//   for (var j = 0; j < col; j++) {
//     //append new cell to canvas
//     var cell = document.createElement('div');
//     cell.className = 'cell flipped';
//     cell.innerHTML = `
//       <div class="cell flipped">
//         <div class="back">?!</div>
//         <div class="front">note</div>
//       </div>
//     `;
//     cell.style.width = colWidth + 'px';
//     cell.style.height = rowHeight + 'px';
//     canvas.appendChild(cell);
//     //set the background for the cell
//     //note that calculate the em unit for more flexible
//     //font-size
//     var front = cell.querySelector('.front');
//     front.style.background = backgroundImage;
//     front.style.backgroundPosition =
//       -(j * colWidth) + 'px ' + -(i * rowHeight) + 'px';
//     //register click handler for the cell
//     cell.addEventListener('click', function () {
//       this.classList.toggle('flipped');
//     });
//   }
// }

// import { useRef, useCallback } from 'react';
// import html2canvas from 'html2canvas';
// import downloadImage from '../utils/downloadImage';

// const useCanvas = () => {
//   const ref = useRef<HTMLCanvasElement | null>(null);

//   const captureVideo = useCallback(
//     async (video: HTMLVideoElement, sliced: HTMLDivElement) => {
//       try {
//         let canvas = ref.current;
//         const context = canvas.getContext('2d');

//         const w = video.videoWidth;
//         const h = video.videoHeight;

//         canvas.width = w;
//         canvas.height = h;

//         // draw video image on canvas.
//         context.fillRect(0, 0, w, h);
//         context.drawImage(video, 0, 0, w, h);

//         // clone canvas image in DOM as bg.
//         const bgImage = canvas.toDataURL();
//         video.style.backgroundImage = `url(${bgImage})`;
//         video.style.backgroundSize = 'cover';

//         var col = 8;
//         var row = 4;
//         var colWidth = canvas.offsetWidth / col;
//         var rowHeight = canvas.offsetHeight / row;

//         // sub divide bg.
//         for (var i = 0; i < row; i++) {
//           for (var j = 0; j < col; j++) {
//             // create cell.
//             let cell = document.createElement('div');
//             cell.style.width = colWidth + 'px';
//             cell.style.height = rowHeight + 'px';

//             // set the background for the cell.
//             // calculate in em unit for more flexible font-size.
//             cell.style.background = `url(${bgImage})`;
//             cell.style.backgroundPosition =
//               -(j * colWidth) + 'px ' + -(i * rowHeight) + 'px';

//             // append new cell to sliced.
//             sliced.style.width = w + 'px';
//             sliced.appendChild(cell);

//             canvas = await html2canvas(cell);
//             const image = canvas.toDataURL('image/png', 1.0);
//             downloadImage(image, 'test');
//           }
//         }

//         // clean the canvas.
//         context.clearRect(0, 0, w, h);

//         // cell.addEventListener('click', async function () {
//         //   canvas = await html2canvas(this);
//         //   const image = canvas.toDataURL('image/png', 1.0);
//         //   downloadImage(image, 'test');
//         // });

//         // screnshot the image... no we aren't.
//         // canvas = await html2canvas(video);
//         // const image = canvas.toDataURL('image/png', 1.0);
//         // downloadImage(image, 'test');
//       } catch (e) {
//         console.log(e);
//       }
//     },
//     [ref]
//   );

//   const getAverageColor = useCallback(
//     (sliced: HTMLDivElement, collection: HTMLDivElement) => {
//       const iw = sliced.offsetWidth;
//       const ih = sliced.offsetHeight;

//       const max = 10; // Max size (Higher num = better precision but slower)
//       const sr = Math.min(max / iw, max / ih); // Scale ratio
//       const w = Math.ceil(iw * sr); // Width
//       const h = Math.ceil(ih * sr); // Height
//       const a = w * h; // Area

//       const canvas = ref.current;
//       const context = canvas.getContext('2d');

//       canvas.width = w;
//       canvas.height = h;
//       context.drawImage(img, 0, 0, w, h);

//       const data = context.getImageData(0, 0, w, h).data;
//       let r = 0;
//       let g = 0;
//       let b = 0;

//       for (let i = 0; i < data.length; i += 4) {
//         r += data[i];
//         g += data[i + 1];
//         b += data[i + 2];
//       }

//       r = ~~(r / a);
//       g = ~~(g / a);
//       b = ~~(b / a);

//       return { r, g, b };
//     },
//     [ref]
//   );

//   return { ref, getAverageColor, captureVideo };
// };

// export default useCanvas;

export {}