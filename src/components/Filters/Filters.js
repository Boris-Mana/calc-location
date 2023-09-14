import { useEffect, useState } from "react";
import FilterElement from "./FitlerElement/FitlerElement";

import ChildrenForDropMenu from './Children/ChildrenForDropMenu';
import ChildrenDropMenuIn from "./Children/ChildrenDropMenuIn";
import ChildrenRadioInItem from "./Children/ChildrenRadioInItem";

// import calculateLocateRatio from "../../utils/calculateLocateRatio";

// import {
//     // YEARSELECTED,
//     // REGIONSELECTED,
//     CORRECTIONSELECTED,
// } from '../../utils/Constants/ConstantsCommon'

import { YEARS_LOCATE, PURPOSE_LOCATE, REGIONS_LOCATE } from "../../utils/Constants/ConstantsBreak";
import { FiltersTitle } from "../../utils/constants";

export default function Filters({ ...props }) {
    // console.log('В фильтры получен статус показать и результат вычисления', props.isResultActive, props.resutToShow);
    // const [isSendResultActive, setIsSendResultActive] = useState(false);

    // const [correctionType, setCorrectionType] = useState(CORRECTIONSELECTED);        
        
    // const [ratioBreakResult, setRatioBreakResult] = useState('');    

    // const handleYearChange = (category) => {
    //     const year_index = YEARS_LOCATE.findIndex(item => item.value === category);
    //     setYear(category);
    //     setYearComment(YEARS_LOCATE[year_index].comment)
    //     // console.log('Сработал селектор', category);
    // };

    // const handleRegionChange = (category) => {
    //     setRegion(category);        
    //     // console.log('Сработал селектор', category);
    // };

    // const handleSendResultButton = () => {
    //     if (ratioBreakResult === 'н/д') {
    //         setIsSendResultActive(false);
    //     } else {
    //         setIsSendResultActive(true);
    //     }
    // };    

    // const handleRealTypeChange = (e) => {        
    //     // e.preventDefault();
    //     setRealtyType(e.target.value);        
    //     // setPurpose('');
    //     // console.log('Селектор типа недв', e.target.value);
    // };

    // const handlePurposeChange = (e) => {
    //     setPurpose(e.target.value);
    //     // console.log('Селектор назначения', e.target.value);
    // };

    // const handleInterval = (e) => {
    //     // console.log('Селектор интервала', e.target.value);
    //     setIntervalType(e.target.value);
    //     setMinMaxMid('');
    // };

    // const handleSetMinMaxMidl = (e) => {
    //     // console.log('Селектор мин-макс', e.target.value);
    //     setMinMaxMid(e.target.value);
    // };

    const getRatio = (e) => {
        e.preventDefault();
        // console.log('Послали просим выдать коэфф');
        props.onGetResult();        
        // setIsSendResultActive(false);    
    };   


    const fillRadioBox = (dataArray, handler) => {
        
        return (
            <>
                {dataArray.map((item, i) => {                    
                    return (<ChildrenRadioInItem name={item.name} value={item.value} text={item.text} isDisable={!item.isOn} handlerOnChange={handler} />)
                })}
            </>
        )
    };

    const chooseYear = <ChildrenForDropMenu name="year" value={props.year} />
    const chooseDistrict = <ChildrenForDropMenu name="region" value={props.region} />
    // const chooseRealtyType = (
    //     <>
    //         <ChildrenRadioInItem name='type' value='Земля' text='Земельные участки' handlerOnChange={onSetRealtyType} />
    //         <ChildrenRadioInItem name='type' value='Здания, помещения' text='Здания, нежилые помещения' handlerOnChange={onSetRealtyType} />
    //     </>
    // );

    const paramsMinMaxChooseDoverInterval = [
        { name: 'use', value: 'Минимальное', text: 'Минимальное', isOn: true },
        { name: 'use', value: 'Среднее', text: 'Среднее', isOn: true },
        { name: 'use', value: 'Максимальное', text: 'Максимальное', isOn: true },
    ];

    const paramsChooseIntervalTypeBreak = (
        <>
            <ChildrenRadioInItem name='interval' value='Доверительный' text='Доверительный' handlerOnChange={props.onSetInterval} />
            <ChildrenRadioInItem name='interval' value='Расширенный' text='Расширенный' handlerOnChange={props.onSetInterval} />
        </>
    );

    const paramsMinMaxChooseExtInterval = [
        { name: 'use', value: 'Минимальное', text: 'Минимальное', isOn: true },
        { name: 'use', value: 'Среднее', text: 'Среднее', isOn: true },
        { name: 'use', value: 'Максимальное', text: 'Максимальное', isOn: true },
    ];


    const chooseMinMaxMidTypeDov = fillRadioBox(paramsMinMaxChooseDoverInterval, props.onSetMinMax);
    const chooseMinMaxMidTypeExt = fillRadioBox(paramsMinMaxChooseExtInterval, props.onSetMinMax);

    // const chooseMinMaxMidType = (
    //     <>
    //         <ChildrenRadioInItem name='use' value='min' text='минимальное' handlerOnChange={onSetMinMax} />
    //         <ChildrenRadioInItem name='use' value='mid' text='среднее' handlerOnChange={onSetMinMax} />
    //         <ChildrenRadioInItem name='use' value='max' text='максимальное' handlerOnChange={onSetMinMax} />
    //     </>
    // );

    // const chooseIntervalType = (
    //     <>
    //         <ChildrenRadioInItem name='interval' value='dov' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval} />
    //         <ChildrenRadioInItem name='interval' value='ext' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval} isDisable={true} />
    //     </>
    // );

    const childrenYearDrop = <ChildrenDropMenuIn value={props.year} handlerChange={props.onSetYear} dataArray={YEARS_LOCATE} />;
    const childrenRegionDrop = <ChildrenDropMenuIn value={props.region} handlerChange={props.onSetRegion} dataArray={REGIONS_LOCATE} />;

    const locateResultBox = (
        <div className="filters__submit-res-box">
            <button type="reset" onClick={props.onReset} className='filters__reset-btn'>
                Сбросить фильтры
            </button>
            <button type="submit" className={`filters__submit-btn ${props.isResultActive ? 'filters__submit-btn_active' : ''}`}>
                Получить результат
            </button>            
            <div className={`filters__result ${props.isSendResultActive ? 'filters__result_active' : ''}`}>
                {props.isResultToShow && props.resutToShow}
                {/* {ratioBreakResult} */}
            </div>
            <button type="send" onClick={props.onSend} className={`filters__send-btn ${props.isSendResultActive ? 'filters__submit-btn_active' : ''}`}>
                Подставить в расчет
            </button>            
        </div>
    )

    return (
        <form className="filters" onSubmit={getRatio}>
            <h2 className="filters__title">{FiltersTitle}</h2>

            <fieldset className="filters__form">
                <FilterElement title="Область (регион)" children={chooseDistrict} childrenDrop={childrenRegionDrop} />
                <FilterElement title="Дата актуальности исследования" comment={props.yearComment} children={chooseYear} childrenDrop={childrenYearDrop} />
                {/* <FilterElement title="Тип недвижимости" children={chooseRealtyType} /> */}
                {/* {(realtyType !== '') && <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={realtyType === 'Земля' ?
                        fillRadioBox(PURPOSE_LOCATE_LAND, onSetPupose) :
                        fillRadioBox(PURPOSE_LOCATE_BUILD, onSetPupose)}
                />} */}
                <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={ fillRadioBox(PURPOSE_LOCATE, props.onSetPupose) }
                />

                {(props.purpose !== '') && <FilterElement title="Вид интервала значений" children={paramsChooseIntervalTypeBreak} />}
                {(props.intervalType !== '') && <FilterElement title="Значение коэффициента торможения" children={props.intervalType === 'Доверительный' ? chooseMinMaxMidTypeDov : chooseMinMaxMidTypeExt} />}

            </fieldset>            
            {locateResultBox}
        </form>
    );
}
