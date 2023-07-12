import React from 'react'
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html'
import Moment from 'react-moment'

import "./CSS/CardPost.css"

class CardPost extends React.Component {

    render() {

        const {AL, FeatImage, Title, Resumen, Category, Date} = this.props;
        
        return (
            <div className="o-CardPost">
                <Link style={{textDecoration:"none"}}
                    to={`/Post/${AL}`}
                >
                    <div className="o-FullContainerCardPost">
                        
                        <img className="o-CardImage" src={FeatImage} alt="" />
                        
                        <div className="o-DescCardPost">
                            <h2>{Title}</h2>
                            <div className="o-ClasificationCardPost">
                                <h4 id="Category">{Category} / </h4>
                                <h4> / <Moment fromNow>{Date}</Moment> </h4>
                            </div>
                            <div className="o-ParagraphCardPost">
                                {renderHTML(Resumen)}<h3>. . .</h3>
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        )
    }

}

export default CardPost;