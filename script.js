document.querySelector('.grid').addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        let noOfImgs = this.querySelectorAll('img').length;
        if (noOfImgs > 1) {
            let removeImg = e.target.parentNode;
            removeImg.parentNode.removeChild(removeImg);
        } else if (noOfImgs === 1) {
            let finalImgTitle = e.target.alt;
            document.querySelector('#art p').innerHTML = `You have selected your favourite image: <strong>${finalImgTitle}</strong>`;
        }
    }
}, false);