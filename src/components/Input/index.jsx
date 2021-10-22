import "./input.scss";

const Input = ({ content, type, name, setState, value, placeholder }) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {content}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
