import classes from './Header.module.css';
const Header = (props) => {
  return (
    <header>
      <h1 className={classes.center}>Что может произойти за 152 года</h1>
      <p className={classes.center}>Рассказ и путь в прошлое и будущее</p>
    </header>
  );
};

export default Header;
