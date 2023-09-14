// import logoInvOcenAnalitic from "../../images/investOcenkaAnalitycCenter.svg"

import { SUBTITLE, TITLE } from "../../utils/constants";

export default function Header() {
    return (
        <section className="header">            
            <h1 className="header__title">{TITLE}</h1>            
            {/* <p className="header__subtitle">(фактор масштаба)</p> */}
            <p className="header__subtitle">{SUBTITLE}</p>
            
            {/* <p className='header__text'>Возможные значения коэффициента торможения:<br /><br />Общественные здания
                и помещения: <br /><strong>-0.19</strong><br />Промышленные, складские и сельскохозяйственные здания,
                помещения: <br /><strong>-0.27</strong><br /><br /> В калькуляторе отрицательное значение коэффициента уже учтено! Вводите цифру без знака "минус"</p> */}
        </section>
    )
};