import {useState} from "react"
import Pig from "./Pig"

function Piglist({pigs}) {
  const [currentPigs, setCurrentPigs] = useState(pigs)

  return(
    <div className="ui grid container" >
      {currentPigs.map((pig) => (
      <Pig 
      medal={pig["highest medal achieved"]} 
      {...pig}
      key={pig.name} />
    ))}
    </div>
  )
}

export default Piglist