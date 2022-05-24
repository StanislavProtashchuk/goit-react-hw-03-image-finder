
export default function Modal({ bigPicture, closeModal }) {
  return (
    <div onClick={closeModal}>
      <div>
        <img src={bigPicture} alt="modal" />
      </div>
    </div>
  );
}