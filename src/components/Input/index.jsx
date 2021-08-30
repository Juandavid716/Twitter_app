import "./Input.css";

const Input = ({ content, type, name }) => {
  return (
    <>
      <label for={name} className="visuallyhidden">
        {content}
      </label>
      <input type={type} name={name} id={name}></input>
    </>
  );
};

export default Input;
