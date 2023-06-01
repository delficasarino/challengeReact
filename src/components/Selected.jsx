import { useContext } from "react";
import SelectedContext from "../context/SelectedContext";
import { FaWindowClose } from "react-icons/fa";

const Selected = () => {
  const { selected, setSelected } = useContext(SelectedContext);
  return (
    <>
      {selected && (
        <ul className="selected">
          <FaWindowClose onClick={() => setSelected(null)} className="close" />
          {selected?.work?.covers && (
            <img
              src={`https://covers.openlibrary.org/b/id/${selected?.work?.covers[0]}-L.jpg`}
              alt="cover"
            />
          )}
          <article>
            <li className="title">{selected?.book?.title}</li>
            <li>First Publish Year: {selected?.book?.first_publish_year}</li>
            {selected?.work?.description && (
              <li>
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
        </ul>
      )}
    </>
  );
};

export default Selected;
