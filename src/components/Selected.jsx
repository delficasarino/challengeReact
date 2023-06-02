import { useContext } from "react";
import SelectedContext from "../context/SelectedContext";
import { FaWindowClose } from "react-icons/fa";
import "../scss/selected.scss";

const Selected = () => {
  const { selected, setSelected } = useContext(SelectedContext);
  return (
    <>
      {selected && (
        <ul className="book-selected">
          <section className="book-selected__section">
            <FaWindowClose
              onClick={() => setSelected(null)}
              className="close"
            />
            {selected?.work?.covers && (
              <img
                src={`https://covers.openlibrary.org/b/id/${selected?.work?.covers[0]}-L.jpg`}
                alt="cover"
                className="book-selected__image"
              />
            )}
            <article className="book-selected__text">
              <li className="book-selected__title">{selected?.book?.title}</li>
              <li className="book-selected__first-publish-year">
                First Publish Year: {selected?.book?.first_publish_year}
              </li>
              {selected?.work?.description && (
                <li className="book-selected__description">
                  {selected?.work?.description?.value ||
                    selected?.work?.description?.value ||
                    selected?.work?.description}
                </li>
              )}
              <li>Author: {selected?.book?.author_name}</li>
              {selected?.author?.bio && (
                <li>
                  {selected?.author?.bio?.value ||
                    selected?.author?.bio?.value ||
                    selected?.author?.bio}
                </li>
              )}
            </article>
          </section>
        </ul>
      )}
    </>
  );
};

export default Selected;
