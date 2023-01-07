export const PopupService = (body, options) => {
    const div = document.createElement('div');
    const gallery = document.getElementById('gallery');
    const close = () => {
       div.remove();
    };
    const open = () => {
        div.classList.add('content');
        div.setAttribute('id','content');

        div.innerHTML = "<button id=\"close\">X</button>" + body;
        gallery.appendChild(div);
    };

    return {
        open,
        close
    };
};