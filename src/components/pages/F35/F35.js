import React from "react";
import { Link } from "react-router-dom";

import styles from "./F35.module.css";

import ccc from "../../../images/fff.png";

const F35 = () => {
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L0En2__IsAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className={styles.secondpaidge}>
        <span>  F-35 </span> 
        <span>
Lockheed Martin F-35 Lightning II («Локхид-Мартин» F-35 «Молния II») — семейство малозаметных многофункциональных истребителей-бомбардировщиков пятого поколения, разработанное американской фирмой Lockheed Martin в трёх вариантах: наземный истребитель (CTOL) для нужд ВВС США, истребитель с укороченным взлётом и вертикальной посадкой (STOVL) для Корпуса морской пехоты США и ВМС Великобритании, и палубный истребитель (CV) для нужд ВМС США.
</span>
    </div>
    </div>
);
};

export default F35;