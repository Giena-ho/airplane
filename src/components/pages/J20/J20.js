import React from "react";
import { Link } from "react-router-dom";

import styles from "./J20.module.css";

import ccc from "../../../images/jjjj.png";

const J20 = () => {
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u1q0P5XzV5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className={styles.secondpaidge}>
        <span> J-20 </span> 
        <span>Чэнду J-20 (J-XX) представляет собой большой (длина 21-23м) и тяжелый (взлетный вес 35-40 тонн) истребитель схемы "утка". Он имеет треугольное крыло с наплывами и цельноповоротное переднее горизонтальное оперение (ЦПГО). Вертикальное оперение - двухкилевое, с наклоненными в стороны цельноповоротными килями и с подфюзеляжными гребнями. Схема такая же, как у "1.44", и размеры почти. Но есть и отличия в деталях. МиГ имел большую площадь, которую занимало меньшую долю нагрузки на крыло и свободу маневренности. Китайцы развалены в стороны, чего не было у нашего собеседника. Зато такие подтверждения были в проектах, которые прорабатывались на МиГе после неудачи с "1.44", в частности, на "1.46". Конфигурация наплывов крыла тоже выглядит похожей на форму кили и переднего оперения. Носовая часть фюзеляжа выглядит срисованной у американского F-22A. </span>
    </div>
    </div>
);
};

export default J20;