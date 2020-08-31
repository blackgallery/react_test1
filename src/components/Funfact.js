import React,{Component} from 'react'; 


class Funfact extends Component{

    render(){

    const funfactArray = [
        {
            icon:'icon-glyph-142',
            countNumber:175,
            title:'Award Winner',  
        },
        {
            icon:'icon-glyph-226',
            countNumber:275,
            title:'Visited Farms ',  
        },
        {
            icon:'icon-glyph-2',
            countNumber:324,
            title:'Happy Customers ',  
        },
    ]
 
    const funfactMap = funfactArray.map((valu, i) => {
        return(

            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="facts_wrapper">
                    <div className="icon-lay">
                        <i className={`${valu.icon}`}></i>
                    </div>
                    <h3 className="stat-count count">{valu.countNumber}</h3>
                    <h5>{valu.title}</h5>
                </div>
            </div>           

        )
    });

    return(
    <section className="video-section">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="video_wrp"> 
                        <a href="/" className="play_btn"><i className="fa fa-play"></i></a>
                        <p>Watch Our organic food Video</p> 
                        <h2>Everyone's body is different, it will take to see changes in your body .</h2> 
                    </div>
                    <div className="funfact_wapr row">

                        {funfactMap}

                    </div>
                </div>
            </div>
        </div>
    </section>

        )

    }
}

 
export default Funfact;