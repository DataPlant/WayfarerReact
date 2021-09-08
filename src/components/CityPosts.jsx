import Posts from './Posts'

function CityPosts(props) {
    let postsJsx = props.city.posts.map((post, idx) => {
        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        )
        // <Posts post={post} key={idx} />
    })
    return (
        <div className="category-detail">
            <div className="category-content">
              { postsJsx }
            </div>
                
        </div>
    )
}


export default CityPosts