const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.style.display = 'none;';
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export default downloadImage;
