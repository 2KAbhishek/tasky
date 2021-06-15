import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button component
 * @param {*} {color, text, onClick}
 * @return {*}
 */
const Button = ({color, text, type, width, onClick}) => {
  return (
    <button className="Button" style={{backgroundColor: color, width: width}}
      onClick={onClick} type={type} > {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Button',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
