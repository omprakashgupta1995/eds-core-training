export default function decorate(block) {
  const rows = Array.from(block.children);

  const items = rows[0];

  const firstDiv = items.querySelector('div:nth-child(1)');

  const pictureElements = firstDiv ? firstDiv.querySelectorAll('picture') : '';
  const desktopImgSrc = pictureElements[0]?.querySelector('img')?.src || 'none';
  const mobileImgSrc = pictureElements[1]?.querySelector('img')?.src || 'none';

  if (desktopImgSrc) {
    if (window.innerWidth <= 768) {
      block.style.backgroundImage = `url('${mobileImgSrc}')`;
    } else {
      block.style.backgroundImage = `url('${desktopImgSrc}')`;
    }
  }
  items.remove();
}
