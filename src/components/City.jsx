function City(props) {
    return (
        <div className="category-detail">
            <div className="category-content">
              <h2>{props.city.cityname}</h2> <h3>{props.city.country}</h3>
              <p>Here's some information about your favorite city. Feel free to write about your feelings DURRRRRRR</p>
              </div>
              <img src={ props.city.headerimg }alt="" className="category-img"/> 
                
        </div>
    )
}


export default City