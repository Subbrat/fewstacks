{
   let videoList = document.querySelectorAll('.video-list-container .list');
   videoList.forEach(vid => {
      vid.onclick = () => {
         videoList.forEach(remove => { remove.classList.remove('active') });
         vid.classList.add('active');
         let src = vid.querySelector('.list-video').src;
         let title = vid.querySelector('.list-title').innerHTML;
         document.querySelector('.main-video-container .main-video').src = src;
         document.querySelector('.main-video-container .main-video').play();
         document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
      };
   });
}
async function init() {
   const video = document.getElementById('video');
   const ui = video['ui'];
   const controls = ui.getControls();
   const player = controls.getPlayer();
   window.player = player;
   window.ui = ui;
   player.addEventListener('error', onPlayerErrorEvent);
   controls.addEventListener('error', onUIErrorEvent);
   try {
      await player.load(manifestUri);
      console.log('The video has now been loaded!');
   } catch (error) {
      onPlayerError(error);
   }
}
function onPlayerErrorEvent(errorEvent) {
   onPlayerError(event.detail);
}
function onPlayerError(error) {
   console.error('Error code', error.code, 'object', error);
}
function onUIErrorEvent(errorEvent) {
   onPlayerError(event.detail);
}
function initFailed(errorEvent) {
   console.error('Unable to load the UI library!');
}
document.addEventListener('sui-ui-loaded', init);
document.addEventListener('sui-ui-load-failed', initFailed);
