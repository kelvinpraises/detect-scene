import html2canvas from 'html2canvas';
import downloadImage from '../utils/downloadImage';

const useImage = () => {
  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL('image/png', 1.0);
    downloadImage(image, imageFileName);
  };

  const capture = async () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = document.createElement('video');

    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia();
      video.srcObject = captureStream;
      captureStream.getTracks().forEach((track) => track.stop());
      context.drawImage(video, 0, 0, 255, 255);
      const frame = canvas.toDataURL('image/png');
      downloadImage(frame, 'test');
    } catch (err) {
      console.error('Error: ' + err);
    }
  };

  return { exportAsImage, capture };
};

export default useImage;
