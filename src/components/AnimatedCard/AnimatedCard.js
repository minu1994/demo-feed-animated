import React, { useState } from "react"
import style from "./AnimatedCard.module.css"
export default ({ image, title, description }) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div onClick={() => setIsClicked(!isClicked)} className={style.container}>
      <div
        className={
          isClicked ? style.card + " " + style.cardOnClick : style.card
        }
      >
        <div className={style.imgBox}>
          <div className={style.centeredImage}>
            <img src={image} alt={""} />
          </div>

          <div className={style.layerImageBackground} />
          <img src={image} width={300} height={400} alt={""} />
        </div>
        <div className={style.description}>
          <h2> {title} </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
