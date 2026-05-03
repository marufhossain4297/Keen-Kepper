import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;