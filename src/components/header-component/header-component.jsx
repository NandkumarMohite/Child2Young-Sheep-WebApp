import './header-component-css.css';
import MainLogo from '../../img/logo.png'

const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <div className="rowHeader">
                    <div className="symbol">
                        <img
                            src={MainLogo}
                            alt="this is "
                        /> 
                        <p>Sheep-Ship</p>
                  </div>
                    <div className="menueData">
                        <li>
                            <a>
                                Summary
                            </a>
                            <a>
                                Engagments
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderComponent;