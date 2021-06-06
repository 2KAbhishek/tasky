import PropTypes from 'prop-types';
import './Header.css';
import Button from '../Button/Button';

/**
 * App header component
 * @param {*} {title}
 * @return {*}
 */
const Header = ({title}) => {
  const onClick = (e) => {
    console.log(e.target);
  };

  return (
    <header className="Header">
      <h1>{title}</h1>
      <Button color={'#1688f0'} text={'Add'} onClick={onClick}/>
    </header>
  );
};

Header.defaultProps = {title: 'Tasky'};
Header.propTypes = {title: PropTypes.string.isRequired};

export default Header;
