import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { Slide } from 'react-slideshow-image';

 
class Slides extends Component{

    render(){

        let slideImages = [
            {
                img:'slider1.jpg',
                smallTitle: 'Professional Cleaning Services',
                title:"A huge variety fruits & vegetables.",
				description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
            },
            {
                img:'slider2.jpg',
                smallTitle:"Professional Cleaning Services",
                title:"A huge variety fruits & vegetables.",
				description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
            },
        ];

		const properties = {
		  duration: 115000,
		  transitionDuration: 500,
		  infinite: true,
		  indicators: true,
		  arrows: false,
		  onChange: (oldIndex, newIndex) => {
		    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
		  }
		}
	 
        let ImageGalleryDataList = slideImages.map((val, i) => {
            return(
	            <div className="single_slider slide_bg_1" style={{'backgroundImage': `url(assets/images/${val.img})`}} key={i}> 
		            <div className="slider_item_tb">
			            <div className="slider_item_tbcell">
				            <div className="container">
					            <div className="row">
						            <div className="col-lg-6 col-sm-12">
									  <h5>{val.smallTitle}</h5> 
						              <h2>{val.title}</h2>
						              <p>{val.description}</p>
						              <div className="slider_btn animated fadeInDown">
                                        <Link to="contact" className="slider_btn_one more-link ">Contact Us</Link>
                                      </div>
						            </div>
					            </div>
				            </div>
			            </div>
		            </div>
		        </div>
            )
        });

	    return ( 
	    <div className="slides_wrapper">
			<div className="slider_home">
		        <Slide {...properties}>

		            {ImageGalleryDataList}

		        </Slide>
			</div>
	    </div> 
	    );
	    
	}
}

export default Slides;


