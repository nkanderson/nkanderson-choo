let html = require('choo/html')

module.exports = function (images, picClasses) {
    let { mobile, webp, img, alt } = images;
    return html`
        <div class='${picClasses}' style='overflow: scroll; height: 480px'>
            <picture>
                <source media='(max-width: 767px)'
                        srcset='${mobile.src}' type='${mobile.type}' />
                <source srcset='${webp.src}' type='image/webp'>
                <source srcset='${img.src}' type='${img.type}'>
                <img class='picture__img' src='${img.src}' alt='${alt}'>
            </picture>
            <picture>
                <source media='(max-width: 767px)'
                        srcset='${mobile.src}' type='${mobile.type}' />
                <source srcset='${webp.src}' type='image/webp'>
                <source srcset='${img.src}' type='${img.type}'>
                <img class='picture__img' src='${img.src}' alt='${alt}'>
            </picture>
            <picture>
                <source media='(max-width: 767px)'
                        srcset='${mobile.src}' type='${mobile.type}' />
                <source srcset='${webp.src}' type='image/webp'>
                <source srcset='${img.src}' type='${img.type}'>
                <img class='picture__img' src='${img.src}' alt='${alt}'>
            </picture>
        </div>
    `
}