import Posts from './Posts'

function City(props) {
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
              <h2>{props.city.cityname}</h2>
              <h3>{props.city.country}</h3>
              <img src={ props.city.headerimg }alt="" className="category-img"/>
              { postsJsx }
            </div>
                
        </div>
    )
}



export default City