export default function decorate(block) {
  Array.from(block.children).forEach((rowEle) => {
    const firstDiv = rowEle.querySelector('div:nth-child(1)');
    const img = firstDiv ? firstDiv.querySelector('img') : null;
    if (img) {
      const imgSrc = img.src;

      block.style.backgroundImage = `url('${imgSrc}')`;

      const picture = firstDiv.querySelector('picture');
      if (picture) {
        picture.remove();
      }
    }
  });
}
