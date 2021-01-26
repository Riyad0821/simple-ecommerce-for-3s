import React from 'react';
import './Header.css';
import toy1 from '../../../images/toy1.jpg';

const Header = () => {
    return (
        <header>
            <h3 className="m-5">Fulfill Your Daily Needs</h3>
            <hr/>
            <div className="row">
                <div className="col-md-3"><img src={toy1} alt=""/></div>
                <div className="col-md-3"><img src={toy1} alt=""/></div>
                <div className="col-md-3"><img src={toy1} alt=""/></div>
            </div>
            <button className="btn btn-primary m-3">Shop Now</button>
            <hr/>
        </header>
    );
};

export default Header;