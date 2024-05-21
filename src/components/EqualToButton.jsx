import "./EqualToButton.css";
import PropTypes from "prop-types";
function EqualToButton({ text, onClick }) {
  return (
    <>
      <button className="equalTo-button" onClick={() => onClick(text)}>
        <h1>{text}</h1>
      </button>
    </>
  );
}

EqualToButton.PropTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default EqualToButton;
