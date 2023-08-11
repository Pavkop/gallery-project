type photo = {
    title : string,
    width : number,
    height : number,
    size : string,
    comment?: string
}

//begin button pressed
const startGallery = () => {
    let beginDiv = document.body.querySelector('.begin-div')!; //will not be null;
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
    }).then(() => {
        console.log(data);
    });
}