import "./OperationButton.css";
import PropTypes from "prop-types";
function OperationButton({ text, onClick }) {
  return (
    <>
      <button className="operation-button" onClick={() => onClick(text)}>
        <h1>{text}</h1>
      </button>
    </>
  );
}

OperationButton.PropTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default OperationButton;
