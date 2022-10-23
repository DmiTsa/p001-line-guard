import { Outlet } from 'react-router-dom';
import Nav from '../nav';

const NavHeader = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default NavHeader;
