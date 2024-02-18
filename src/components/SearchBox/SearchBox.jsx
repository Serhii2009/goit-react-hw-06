import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.serchContain}>
      <input
        className={css.serchInput}
        type="text"
        value={value}
        placeholder="Search by name..."
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
