import React from "react";
import { Link } from "react-router-dom";

import styles from "./Mig35.module.css";

import ccc from "../../../images/miigg.png";

const Mig35 = () => {
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SK54L9agRNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={styles.secondpaidge}>
        <span>Миг-35</span> 
        <span> МиГ-35 начал создаваться в 2000-х годах. Первая выкатка и полет Миг-35, созданного на базе МиГ-29М2, состоялась в январе 2007 года. Более поздние варианты были созданы на базе МиГ-29К. В 2010 году было создано три прототипа, которые участвовали в авиавыставках и проходили испытания </span>
        </div>
    </div>
    );
};

export default Mig35;