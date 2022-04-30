import {useState} from "react"

function Pig( {name, specialty, greased, weight, image, medal} ) {
  const [showDetails, setShowDetails] = useState(false)

  const clickHandler = () => {
    setShowDetails(!showDetails)
  }

  return(
    <div className="ui link cards" >
      <div onClick={clickHandler} class="card">
        <div class="image">
          <img src={image}></img>
        </div>
        <div class= "content">
          <div class="header">{name}</div>
          <div class="meta">
            {showDetails ? <a>Specialty: {specialty}</a> : ""}
          </div>
          <div class="description">
            <ul>
              {showDetails ? <li>Greased: {greased ? "Yes" : "No"}</li> : ""}
              {showDetails ? <li>Weight: {weight}</li> : ""}
              {showDetails ? <li>Best Medal Earned: {medal}</li> : ""}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pig