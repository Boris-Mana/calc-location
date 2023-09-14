// import { useState } from "react";
// import test_table from '../../images/testTable.png'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { BreadcrumbsTitle } from "../../utils/constants";

// realtyType, 
export default function AdditionalInfo({ ...props }) {
    const breadscr_text_orig = `Объект оценки. ${BreadcrumbsTitle}`
    const breadscr_text_analog = `Аналог. ${BreadcrumbsTitle}`


    // const [isAdditionShow, setIsAdditionShow] = useState(false);

    // const handleShowAddition = () => {
    //     setIsAdditionShow(!isAdditionShow);
    // };

    // const toShow = (
    //     <>
    //         <p>Данная секция находится в стадии создания. Представленное изображение - для демонстрации</p>
    //         <img className="additional__table" src={test_table} alt='Таблица с коэффициентами'></img>
    //     </>
    // )

    return (
        <div className="additional">
            <Breadcrumbs title={breadscr_text_orig} year={props.year} region={props.region} purpose={props.purpose} intervalType={props.intervalType} minMaxMid={props.minMaxMid} />
            <Breadcrumbs title={breadscr_text_analog} year={props.year} region={props.region} purpose={props.purpose} intervalType={props.intervalType} minMaxMid={props.minMaxMid} />
            {/* <button className="additional__button" onClick={handleShowAddition}>{isAdditionShow ? 'Скрыть шахматную таблицу' : 'Показать шахматную таблицу'} </button> */}
            {/* {isAdditionShow && toShow} */}
        </div>
    )
};