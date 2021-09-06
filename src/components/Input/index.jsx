import "./input.scss";

const Input = ({ content, type, name }) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {content}
      </label>
      <input type={type} name={name} id={name}></input>
    </>
  );
};

export default Input;
