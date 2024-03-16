import './display-card-component-css.css';
const DisplayCardComponent = ({ title, data, increment, prevData }) => {

    const incrementInt = parseInt(increment);
    return (<>
        <div className="displaycard">
            <div className="header-card">{title}</div>
            <div className="cardBody">
                <div className="cardTitle">{data}<div className={incrementInt > 0 ? 'up-arrow' : 'down-arrow'}></div></div>
                <div className="cardText">vs prev = <span>{prevData}</span> <span className={incrementInt > 0 ? 'greenColor' : 'redColor'}>( {increment}% )</span>
                </div>
            </div>
        </div>
    </>)
}
export default DisplayCardComponent;