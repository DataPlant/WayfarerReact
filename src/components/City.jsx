import Posts from './Posts'

function City(props) {
    let postsJsx = props.city.posts.map((post, idx) => {
        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        )
    })
    return (
        <div className="city-detail">
            <div className="city-content">

                <h2>{props.city.cityname}</h2>
                <h3>{props.city.country}</h3>
                <p className="city-p">
                    <br />
                    {props.city.content}
                </p>
            </div>
            <img src={props.city.headerimg} alt="" className="city-img" />

        </div>
    )
}


export default City