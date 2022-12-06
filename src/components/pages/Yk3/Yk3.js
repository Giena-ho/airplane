import React from "react";
import { Link } from "react-router-dom";

import styles from "./Yk3.module.css";

import ccc from "../../../images/tiykkk.png";

const Yk3 = () => {
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C77Z9HsFn_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className={styles.secondpaidge}>
        <span> Як-3</span> 
        <span> Як-3 серийно выпускался на заводах № 292 в Саратове и № 31 в Тбилиси c 1944 по 1946 годы. На саратовском авиационном заводе запуск в производство нового самолёта проходил без снижения выпуска самолёта Як-1. На предприятии для выпуска самолётов Як-3 был установлен новый тип поточно-конвейерной сборки. </span>
    </div>
    </div>
);
};

export default Yk3;