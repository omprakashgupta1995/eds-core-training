
import Swiper from  "./swiper.js";


export default function decorate(block) {
  const rows = Array.from(block.children);
  const config = rows[0]
  // console.log(config)
  const items = rows.slice(1);
  const classes = items[0].firstElementChild.textContent.trim().split(",");
  
  

        block.innerHTML=`

          <div class="swiper">

              <div class="swiper-wrapper">

              ${ Array.from(block.children).map(function(rowEle,index) {
                  if(index!=0){
                    rowEle.firstElementChild.remove();
                
                    const firstDiv = rowEle.querySelector("div:nth-child(1)");
                    const pictureElements = firstDiv ? firstDiv.querySelectorAll("picture") : "";
    
                    const desktopImgSrc = pictureElements[0]?.querySelector("img")?.src || "none"; 
                    const mobileImgSrc = pictureElements[1]?.querySelector("img")?.src || "none";  
                    rowEle.firstElementChild.remove();
                      
                    return `<div class= "swiper-slide ${classes.join(" ")}" style="background-image: url('${desktopImgSrc}');"
                    data-mobile-bg="${mobileImgSrc}" data-desktop-bg="${desktopImgSrc}"> ${rowEle.innerHTML}</div> `
                  }
               

              }).join(" ")
              }
                
                
                  
                  
          </div>
        
          <div class="swiper-pagination"></div>

        

        
              

        `
const swiper = new Swiper('.swiper', {
 
  loop: true,


  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },


  slidesPerView: 1, 
  
});
function setMobileBackgrounds() {
  document.querySelectorAll('.swiper-slide').forEach(slide => {
      const desktopBg = slide.getAttribute("data-desktop-bg");
      console.log(desktopBg !="none")
      const mobileBg = slide.getAttribute("data-mobile-bg");
      if (window.innerWidth <= 600 && mobileBg && mobileBg !== "none") {
          slide.style.backgroundImage = `url('${mobileBg}')`;
      } else if(desktopBg && desktopBg !== "none") {
          
              slide.style.backgroundImage = `url('${desktopBg}')`;

          
      } else {
         
          slide.style.backgroundImage = '';
      }

  });
}


setMobileBackgrounds();

}