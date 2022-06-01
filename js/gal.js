{
   let videoList = document.querySelectorAll('.video-list-container .list');
   videoList.forEach(vid => {
      vid.onclick = () => {
         video.classList.toggle("fade");
         videoList.forEach(remove => { remove.classList.remove('active') });
         vid.classList.add('active');
         let src = vid.querySelector('.list-video').src;
         let title = vid.querySelector('.list-title').innerHTML;
         document.querySelector('.main-video-container .main-video').src = src;
         document.querySelector('.main-video-container .main-video').pause();
         document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
      };
   }
   );
}
