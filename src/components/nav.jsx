// import logo from '../static/img/shema_logo.png';

function Nav() {
  return (
    <nav>
      {/* <div className="logo">
        <img src={logo} alt="logo" />
      </div> */}
      <Link to="/trace">Журнал осмотра трасс</Link>
      <Link to="/excavation">Журнал земляных работ</Link>
      <Link to="/working_legal">Работа с юр.лицами</Link>
      <Link to="/administrative">Фдминистративная работа</Link>
    </nav>
  );
}

export default Nav;
