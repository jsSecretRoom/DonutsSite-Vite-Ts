import './Layout.scss';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SiteLogick from '../SiteLogick/SiteLogick';

function Layout() {
    const navigate = useNavigate();
    const isAuthorized = useSelector((state: any) => state.autorisation.authorized);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (!isAuthorized && !authToken) {
            // Если пользователь не авторизован и отсутствует токен, перенаправляем на /login
            navigate('/login');
        }
    }, [isAuthorized, navigate]);

    return ( 
        <>
            <header>
                <nav>
                    
                    <div className='nav-conteiner'>
                        <SiteLogick/>
                        <div className='links'>
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/shop/Sweets'}>Order now!</NavLink>
                            <NavLink to={'/create'}>Create a set</NavLink>
                        </div>
                        
                        <div className='logo'>
                            <NavLink to={'/'}><h4>Divine Doughnuts</h4></NavLink>   
                        </div>
                        
                    </div>
                    
                </nav>
                
            </header>
            <Outlet/>
        </>
        

    );
}

export default Layout;