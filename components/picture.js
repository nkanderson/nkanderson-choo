const html = require('choo/html')

module.exports = function (img) {
  const { mobile, webp, main, alt, caption, displayCaption } = img
  return html`
        <figure>
            <picture>
                <source media='(max-width: 767px)'
                        srcset='${mobile.src}' type='${mobile.type}' />
                ${webp ? html`<source srcset='${webp.src}' type='image/webp'>` : ''}
                <source srcset='${main.src}' type='${main.type}'>
                <img class='picture__img' src='${main.src}' alt='${alt}'>
            </picture>
            ${displayCaption !== false ? html`<figcaption class="pl3">${caption || alt}</figcaption>` : ''}
        </figure>
      `
}
