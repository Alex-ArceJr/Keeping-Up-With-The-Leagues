
import { useState } from "react";
 import './Main.css'

export default function Main() {

  const [showinfo, setShowInfo] = useState(false)

  const handleClick = (evt) => {

      setShowInfo(!showinfo)

     }
  return (


    <section className="main-page">
        <h2>Favorite Brewery</h2>
        {!showinfo ?
        <img src="https://beersearchparty.com/wp-content/uploads/2021/08/3C447AAF-8786-4026-91A9-CF01474EE71A-e1629824008367.jpeg" alt="Cerveza Cito" onClick={handleClick} />
          :
          <>
           <img src="https://beersearchparty.com/wp-content/uploads/2021/08/3C447AAF-8786-4026-91A9-CF01474EE71A-e1629824008367.jpeg" alt="Cerveza Cito" onClick={handleClick} />
           <h4>City: Santa Ana</h4>
           <h4>Type: Taproom </h4>
           <h3>Favorite Drink</h3>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCuYQydnRdv41kE-wP_zRVe2iUmpUHuUS2Q&usqp=CAU" alt="slushee" className="slushee-img" />
          </>
        }
    </section>
  )
}
