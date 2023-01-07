import {
	PopupService
} from './component/Popup/popup.js';
import { imagesJson, objImage } from '/component/JSON/images.js';

const PopupImageTemplate = (id) => {
    return "<img src=\"" + objImage.images[id].img + "\" width=\"30%\"/><p>" + objImage.images[id].username + "</p>";
}
const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (event)=>{
    if(event.target.dataset.id < 9 && event.target.dataset.id > 0){
        const popupWindow = PopupService(PopupImageTemplate((event.target.dataset.id-1)));
        popupWindow.open();
        const exitImage = document.getElementById('close');
        exitImage.addEventListener('click', () => {
            popupWindow.close();
        });
    }
});