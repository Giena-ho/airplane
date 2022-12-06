import React from "react";
import { Link } from "react-router-dom";

import styles from "./Su47.module.css";

import ccc from "../../../images/sorsu.png";

const Su47 = () => {
{
    /* const - позволяет создать переменную, name=()=>{return()- создал стрелочную функцию}*/
}
{
    /* после return необходимо создать контейнер */
}
return (
    <div className={styles.wrapper}>
    <div className={styles.firstpaidge}>
        {/* <div> */}
        <img src={ccc} />
        {/* </div> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aRDqzwiSkHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className={styles.secondpaidge}>
        <span> Cy-47</span> 
        <span> Самолет впервые поднялся в небо 25 сентября 1997 года. Широкой публике новинка была представлена на авиасалоне МАКС в 1999 году под именем С-37. Название Су-47 и прозвище «Беркут» истребитель получил в 2001 году – за свою способность быстро менять направление движения или угол атаки. </span>
    </div>
    </div>
);
};

export default Su47;