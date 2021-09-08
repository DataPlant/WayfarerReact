function City(props) {
    return (
        <div className="category-detail">
            <div className="category-content">
              <h2>{props.city.cityname}</h2>
              <h3>{props.city.country}</h3>
              <img src={ props.city.headerimg }alt="" className="category-img"/>
            </div>
                
        </div>
    )
}



export default City