 
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
 
    <div className="header_topbar">
        {/* Logo */}
        <div className="container">
            <div className="row">
                <div className="header_top_right list-unstyled">
                    <ul>
                        <li><i className="fa fa-phone"></i>+234 567 234 875</li>
                        <li><i className="fa fa-globe"></i>1st Avenue, Boston</li>
                    </ul>
                </div>
                <div className="header_top_left">
                    <ul className="header_socil list-inline pull-left">  
                        <li><i className="fa fa-envelope"></i>info@example.com</li>
                        <li>
                            <Link to="#" className="fa fa-facebook"></Link>
                        </li>
                        <li>
                            <Link to="#" className="fa fa-twitter"></Link>
                        </li>
                        <li>
                            <Link to="#" className="fa fa-linkedin"></Link>
                        </li>
                        <li>
                            <Link to="#" className="fa fa-google-plus"></Link>
                        </li>
                    </ul>
                </div>
                <Link to="#" className="more-link" >Get a quote</Link>
            </div>
        </div>
    </div> 
 
 

	)
}


export default Header;