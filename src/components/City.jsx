function City(props) {
    return (
        <div>
            <h2>{props.cityObj.cityname}</h2>
            <p>{props.cityObj.country}</p>
            <img 
                className="city-img"
                src={props.cityObj.headerimg}
                alt="city picture"
            />

                
        </div>
    )
}



export default City