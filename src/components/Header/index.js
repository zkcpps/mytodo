import  React  from 'react';
import './index.css'

function Header(props) {
    const { title, openInput } = props;
    return (
        <div className="header-wrap">
            <div className="title">{title}</div>
            <div className="left-button">
                <button onClick={openInput} type="button" className="btn btn-primary">+</button>
            </div>
        </div>
    );
}

export default Header;