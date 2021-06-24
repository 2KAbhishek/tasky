import PropTypes from 'prop-types';
import './Header.css';
import Button from '../Button/Button';

/**
 * App header component
 * @param {*} {title}
 * @return {*}
 */
const Header = ({title, onAdd}) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Button text={'Add'} onClick={onAdd}/>
    </header>
  );
};

Header.defaultProps = {title: 'Tasky'};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
};

export default Header;
