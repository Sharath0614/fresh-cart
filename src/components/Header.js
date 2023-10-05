import headerStyles from '../styles/header.module.css';
import cartImg from '../images/Cart.png';
import userImg from '../images/User.png';

const Header = () => {

    return (
        <>
        <nav className={headerStyles.headerContainer}>
        <div className={headerStyles.logo}>fRESh cARt</div>
            <div className={headerStyles.nav}>
                <div className={`${headerStyles.navPill} cs-p`}>FRUITS</div>
                <div className={`${headerStyles.navPill} cs-p`}>VEGETABLES</div>
            </div>
            <div className={headerStyles.navEndPills}>
                <div className={`${headerStyles.cartCont} cs-p`}>
                <img width='25px' height='25px' src= {cartImg} style={{marginRight: '5px'}}/>
                <span>Cart</span>
                </div>
            <div style={{marginTop: '5px'}}><img width='35px' height='35px' className='cs-p'
            src= {userImg} style={{marginRight: '5px'}}/></div>
            </div>
        </nav>
        {/* <div className={headerStyles.headerContainer}>
            <div className={headerStyles.logo}>Fresh Cart</div>
            <div className={headerStyles.nav}>
                <div className={headerStyles.navItem}>Fruits</div>
                <div className={headerStyles.navItem}>Vegetables</div>
            </div>
            <div>
                <img src=''/>
                <span>Cart</span>
            </div>
            <div>Login</div>
        </div> */}
        </>
    )
};

export default Header;