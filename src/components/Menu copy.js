 
import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
	return (

<div className="menu_area">	
    {/* Start: header navigation */}
    <div className="navigation">
        <div className="container">
            <div className="row">
                <div className="logo col-md-2 col-sm-12">
                    <Link to="/"> 
                    	<img src="/assets/images/logo.png" alt="" />
                    </Link>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div id="navigation">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li className="has-sub"><Link to="/">Pages</Link>
                                <ul>
                                    <li><Link to="gallery">Gallery Page</Link>
                                    </li>
                                    <li><Link to="gallery-two">Gallery Two</Link>
                                    </li>
                                    <li><Link to="services">Services Page</Link>
                                    </li>
                                    <li><Link to="single-services">Services Details</Link>
                                    </li>
                                    <li><Link to="about">About</Link>
                                    </li>
                                    <li><Link to="contact">Contact Page</Link>
                                    </li>
                                    <li><Link to="services">Services</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-sub"><Link to="blog">Blog</Link>
                                <ul>
                                    <li><Link to="blog">Blog One</Link>
                                    </li>
                                    <li><Link to="blog-two">Blog Two</Link>
                                    </li> 
                                    <li><Link to="single-blog">Blog Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-sub"><Link to="shop">Shop</Link>
                                <ul>
                                    <li><Link to="shop">Shop</Link>
                                    </li>
                                    <li><Link to="single-shop">Shop Details</Link>
                                    </li>                                    
                                </ul>
                            </li>
                            <li><Link to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* End: Menu  */}
                </div>
                
                {/* Start: Cart  */}
                <div className="header_cart">
                    <ul>
                        <li className="header_search">
                            <Link to="#" className="cart-toggler search_icon"><i className="icofont-search"></i></Link>
 
                            <div className="search_icon_inr">
                                <form action="#" method="POST">
                                    <div>
                                        <input placeholder="Search" type="text" />
                                        <button className="btn-search" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div> 
                        </li>
                        <li className="header_cart_icon">
                            <Link to="#"><i className="icofont-cart-alt"></i><span className="number_cart">0</span></Link>
                        </li>
                    </ul>
                </div>
                 {/* End: Cart  */}
            </div>
            {/* row */}
        </div>
        {/* container */} 
    </div>
    {/* End: header navigation */}

 
</div>

	)
}


export default Menu;