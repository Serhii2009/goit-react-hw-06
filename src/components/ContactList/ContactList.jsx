import css from "./ContactList.module.css";

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.contactic}>
      {items.map((item) => (
        <li className={css.contacticList} key={item.id}>
          <p className={css.dataInfo}>{item.name}</p>
          <p className={css.dataInfo}>{item.number}</p>
          <button className={css.dataButton} onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
