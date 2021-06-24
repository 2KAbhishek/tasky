import PropTypes from 'prop-types';
import './Header.css';
import Button from '../Button/Button';

/**
 * App header component
 * @param {*} {title}
 * @return {*}
 */
const Header = ({title, onAdd, showForm}) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Button text={showForm ? 'Close' : 'Add'}
        onClick={onAdd} color={showForm && 'red'} width={'5rem'}/>
    </header>
  );
};

Header.defaultProps = {title: 'Tasky'};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  showForm: PropTypes.bool,
};

export default Header;
