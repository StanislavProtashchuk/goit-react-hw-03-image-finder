//

export default function ImageGalleryItem({ pictures }) {
return pictures.hits.map(({ id, webformatURL }) => {
        return <ul>
          <li id={id} class="gallery-item">
            <img src={webformatURL} alt="" />
          </li>
        </ul >
      })
}