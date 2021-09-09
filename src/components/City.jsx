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
                    <p className="user">Welcome back, LuVz2TrAVEL! </p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla eros, eleifend id rutrum id, dictum dictum lorem. Aliquam at enim massa. In sollicitudin elit id mi posuere, ut consequat dui accumsan. Morbi sed condimentum urna, non varius ex. Vestibulum vitae pellentesque mauris. Proin accumsan felis id neque pretium, eu hendrerit tellus blandit. Aenean id eros sit amet neque tempus dictum ut vitae leo. Proin accumsan felis id neque pretium, eu hendrerit tellus blandit. Aenean id eros sit amet neque tempus dictum ut.
                </p>
            </div>
            <img src={props.city.headerimg} alt="" className="city-img" />

        </div>
    )
}


export default City