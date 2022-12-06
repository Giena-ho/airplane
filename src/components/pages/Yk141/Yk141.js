import React from "react";
import { Link } from "react-router-dom";

import styles from "./Yk141.module.css";

import ccc from "../../../images/yuuuk.png";

const Yk141 = () => {
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6R18uBA-QfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className={styles.secondpaidge}>
        <span> Як-141</span> 
        <span>Як-141 (внутреннее обозначение: изделие 48/48М) — многоцелевой сверхзвуковой всепогодный палубный истребитель вертикального/короткого взлёта и посадки разработки ОКБ Яковлева. Стал первым в мире боевым самолётом вертикального взлёта и посадки, преодолевшим скорость звука. </span>
    </div>
    </div>
);
};

export default Yk141;