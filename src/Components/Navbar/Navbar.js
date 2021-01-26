import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (

        <nav className="container py-2">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-2">
                    {/* <Link to="/">
						<img src={} alt="logo" className="img-fluid logo" />
					</Link> */}
                </div>
                <div className="col-lg-4">
                    <Form className="inline">
                        <input placeholder="Search" type="text"/>
                        <button className="secondary ml-3" type="submit">Submit</button>
                    </Form>
                </div>

                <div className="col-lg-5">
                    <ul className="nav">
                        <li>
                            <a href="#/destination">Destination</a>
                        </li>
                        <li>
                            <a href="#/blog">Blog</a>
                        </li>
                        <li>
                            <a href="#/contact">Contact</a>
                        </li>
                        <li>
                        <a href="/cart">
                        {/* <div className="navbar-cart">
                            <h3 className="">Cart</h3>
                            <img
                                className="cart-image"
                                src="https://image.flaticon.com/icons/svg/102/102276.svg"
                                alt="shopping cart"
                            />
                            <div className="cart-counter">7</div>
                        </div> */}
                        <div className="cart-container">
                            <h5>Cart</h5>
                            <img className="cart-image" src="https://image.flaticon.com/icons/svg/102/102276.svg"
                                alt="shopping cart" alt=""/>
                            <div className="cart-counter">
                                5
                            </div>
                        </div>
                    </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;