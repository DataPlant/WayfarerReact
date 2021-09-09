import Posts from './Posts'

function CityPosts(props) {
    let postsJsx = props.city.posts.map((post, idx) => {
        return (
            <article className="posts">
                <img src={post.img} alt="" className="post-img" />
                <div className="post-container">
                    <h4 className="post-title">{post.title}</h4>
                    <p className="post-p">{post.content}</p>
                    <br></br>
                    <p className="author">Author: LuVz2TrAVEL</p>
                </div>
            </article>
        )
    })
    return (
        <section className="posts-section">
            {postsJsx}
        </section>
    )
}


export default CityPosts