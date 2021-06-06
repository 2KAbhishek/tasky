import PropTypes from 'prop-types';
import './Header.css';
import Button from '../Button/Button';

/**
 * App header component
 *
 * @param {*} {title}
 * @return {*}
 */
const Header = ({title}) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Button color={'#1688f0'} text={'Add'}/>
    </header>
  );
};

Header.defaultProps = {title: 'Tasky'};
Header.propTypes = {title: PropTypes.string.isRequired};

export default Header;
