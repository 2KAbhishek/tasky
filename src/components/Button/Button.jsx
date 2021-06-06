import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component
 * @param {*} {color, text, onClick}
 * @return {*}
 */
const Button = ({color, text, onClick}) => {
  return (
    <button className="Button" style={{backgroundColor: color}}
      onClick={onClick}> {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'royalblue',
  text: 'Add',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
