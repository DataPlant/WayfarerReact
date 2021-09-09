import Posts from './Posts'

function CityPosts(props) {
    let postsJsx = props.city.posts.map((post, idx) => {
        return (
        <article className="recipe">
              <img src={ post.img } alt="" className="recipe-img" />
            <div className="recipe-container">
                    <h4 className="recipe-title">{post.title}</h4>
                    <p className="recipe-p">{post.content}</p>
            </div>
        </article>
        )
        // <Posts post={post} key={idx} />
    })
    return (
        <section className="recipes-section">
              { postsJsx }                
        </section>
    )
}


export default CityPosts