import Handlebars from "handlebars";

//begin button pressed
const startGallery = () => {
    let beginDiv = document.body.querySelector('.begin-div')!;
    beginDiv.classList.add('begin-removed');
    setTimeout(() => {
        beginDiv.remove();
        console.log('reached');
        fillGallery();
    }, 1400);
}

//fill the gallery with photos
const fillGallery = () => {
    const data = {
        title: 'my portfolio.',
        photos: [],
        footer: 'Pavel Kopecky 2023'
    }

    fetch('/src/json/photos.json').then((res) => {
        return res.json();
    }).then((res) => {
        data.photos = res;
        // @ts-ignore
        let template = Handlebars.compile(document.querySelector("#template").innerHTML);
        // @ts-ignore
        document.querySelector('#output').innerHTML = template(data);
    });
}