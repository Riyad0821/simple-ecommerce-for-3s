import React from 'react';
import './Newsletter.css';
import { Form } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <section>
            <div className="row mt-5 mb-5">
                <div className="col-md-6">
                    <h1>Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor asperiores a exercitationem distinctio, placeat voluptatum quas modi tempora saepe.</p>
                </div>
                <div className="col-md-6 mt-5">
                    <Form className="inline">
                        <input className="newsletter-text-box" placeholder="Email Address" type="text" />
                        <button className="btn btn-primary ml-3" type="submit">Subscribe</button>
                    </Form>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default Newsletter;