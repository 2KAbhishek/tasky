import PropTypes from 'prop-types';
import './Button.css';

const Button = ({color, text}) => {
  return (
    <button className="Button" style={{backgroundColor: color}}>
      {text}
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
};

export default Button;
