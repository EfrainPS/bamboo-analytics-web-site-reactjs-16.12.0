//Dependencies
import React from 'react'

//Styles
import "./CSS/AllPosts.css"

//Components
import CardPost from "./ToAllPost/CardPost"

//Images
import DefaultImage from "../Images/PNG/DefaultImage.png"

class AllPost extends React.Component {

    render() {

        const { Posts, Information, InfButton} = this.props;
        
        return (

            <div className="o-AllPost">

                {Posts.map(
                    (Post) =>

                        <CardPost
                        AL={Post.id}

                            Author={Post._embedded.author[0].name}
                            FeatImage={Post.featured_media === 0 ? DefaultImage: Post._embedded['wp:featuredmedia']['0'].source_url}
                            Title={Post.title.rendered}
                            Content={Post.content.rendered}
                            Resumen={Post.excerpt.rendered}
                            Category={Post._embedded['wp:term']['0']['0'].name}
                            Comments={Post._embedded.replies ? Post._embedded['replies']['0']: false}
                            Date={Post.date}

                            Information={Information}
                            InfButton={InfButton}
                        />
                )}

            </div>
        )

    }
}
export default AllPost