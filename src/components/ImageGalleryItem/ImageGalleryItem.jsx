

export default function ImageGalleryItem({ pictures, showModal }) {
  return pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li key={id}>
        <img
          src={webformatURL}
          alt={tags}
          onClick={() => showModal(largeImageURL)}
        />
      </li>
    );
  });
}