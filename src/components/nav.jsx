import { Link } from 'react-router-dom';
import logo from '../static/img/shema_logo.png';

function Nav() {
  return (
    <nav>
      <div className="logo">11111111111111111111111</div>
      <div className="links">
        <Link to="/trace">Журнал осмотра трасс</Link>
        <Link to="/excavation">Журнал земляных работ</Link>
        <Link to="/working_legal">Работа с юр.лицами</Link>
        <Link to="/administrative">Административная работа</Link>
      </div>
    </nav>
  );
}

export default Nav;
