import React from "react";
import { Link } from "react-router-dom";

import styles from "./Su27.module.css";

import ccc from "../../../images/sudvasemfmain.png";

const Su27 = () => {
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MtlLVexLfrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className={styles.secondpaidge}>
        <span> Cy-27</span>
        <span>
        К середине 1970-х гг. в ОКБ на практике были отработаны общие подходы и методология повышения БЖ боевых самолетов. Это позволило с успехом применять отработанную методику при создании Су-27.

На Су-27 защиту летчика при помощи бронирования предлагалось обеспечить только с наиболее опасного ракурса — с задней полусферы, для чего предусматривалось бронировать заднюю стенку кабины. Проблема обеспечения БЖ силовой установки изначально облегчалась удачной конструктивно-компоновочной схемой, предполагавшей большой разнос двигателей и установку их в двух отдельных изолированных мотогондолах 
Для обеспечения взрывобезопасности топливных баков на самолете предусматривалась установка системы нейтрального газа, а для защиты от потери топлива — протектирование расходного отсека. Для локализации возможного пожара в пределах одного двигательного отсека предлагалась установка противопожарных перегородок, а для тушения пожара — централизованная система пожаротушения.

        </span>
      </div>
    </div>
  );
};
export default Su27;