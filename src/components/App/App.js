import { useEffect, useState } from "react";

import Calc from "../Calc/Calc";
import About from '../About/About';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

import backgroundImg from '../../images/map1900rgb.png'

import { YEARS_LOCATE, REGIONS_LOCATE } from "../../utils/Constants/ConstantsBreak";
import calculateBreakRatio from "../../utils/calculateLocateRatio";
import { SUBTITLE, TITLE } from "../../utils/constants";


function App() {
  // const [ratioCalc, setRatioCalc] = useState('');  
  const [year, setYear] = useState(YEARS_LOCATE[0].value);
  const [yearComment, setYearComment] = useState(YEARS_LOCATE[0].comment);
  const [region, setRegion] = useState(REGIONS_LOCATE[0].value);
  const [origParams, setOrigParams] = useState({
    'purpose': '',
    'minMaxMid': '',
    'intervalType': '',
    'isResultActive': false,
    'isResultToShow': false,
    'isResultSend': false,
    'ratioCalc': 'н/д',
  })
  // const [realtyType, setRealtyType] = useState('');
  // const [purpose, setPurpose] = useState('');
  // const [minMaxMid, setMinMaxMid] = useState('');
  // const [intervalType, setIntervalType] = useState('');
  // const [isResultActive, setIsResultActive] = useState(false);
  // const [isResultToShow, setIsResultToShow] = useState(false);
  // const [isResultSend, setIsResultSend] = useState(false);

  

  // const [isCalcShow, setIsCalcShow] = useState(true);

  const handleRatioCalculated = () => {
    // console.log('Подставляем значение', ratioCalc);
    setOrigParams({
      ...origParams,
      isResultToShow: true
    });
    // setIsResultToShow(true);        
  };

  const handleRatioSend = () => {
    // console.log('Отсылаем в калькулятор значение', ratioCalc);
    setOrigParams({
      ...origParams,
      isResultSend: true,
    });
    // setIsResultSend(true);
  };

  const handleYearChange = (category) => {
    const year_index = YEARS_LOCATE.findIndex(item => item.value === category);
    setYear(category);
    setYearComment(YEARS_LOCATE[year_index].comment)
    // console.log('Сработал селектор года', category);
  };

  const handleRegionChange = (category) => {
    setRegion(category);
    // console.log('Сработал селектор области', category);
  };


  // const handleRealTypeChange = (e) => {
  //   // e.preventDefault();
  //   setRealtyType(e.target.value);
  //   // console.log('Селектор типа недв', e.target.value);
  // };

  const handlePurposeChange = (e) => {
    setOrigParams({
      ...origParams,
      purpose: e.target.value
    });
    // setPurpose(e.target.value);
    // console.log('Селектор назначения', e.target.value);
  };

  const handleInterval = (e) => {
    // console.log('Селектор интервала', e.target.value);
    setOrigParams({
      ...origParams,
      intervalType: e.target.value
    });
    // setIntervalType(e.target.value);
  };

  const handleSetMinMaxMidl = (e) => {
    // console.log('Селектор мин-макс', e.target.value);
    setOrigParams({
      ...origParams,
      minMaxMid: e.target.value,
    });
    // setMinMaxMid(e.target.value);
  };

  const resetAllFilds = () => {
    window.location.reload();
    // setYear(YEARS_LOCATE[0].value);
    // setRegion(REGIONS_LOCATE[0].value);
    // setRealtyType('');
    // setPurpose('');
    // setMinMaxMid('');
    // setIntervalType('');
    // setRatioCalc('');
    // setIsResultActive(false);
    // setIsResultToShow(false);
    // setIsResultSend(false);
  };

//   const calcBreakRatio = () => {
//     const breakRatio = calculateBreakRatio(year, region, purpose, intervalType, minMaxMid)
//     // realtyType, 
//     // console.log('Получили значение коэфф:', breakRatio);
//     // setRatioBreakResult(breakRatio);
//     setRatioCalc(breakRatio);
//     // handleSendResultButton();
// };

useEffect(() => {
  if (origParams.ratioCalc !== 'н/д') {
    setOrigParams({
      ...origParams,
      isResultActive: true,
    })   
  }
}, [origParams.ratioCalc]);

// useEffect(() => {
//     console.log('Сработал слушатель изменения полей');
//     if (year !== '' && region !== ''  && origParams.purpose !== '' && origParams.minMaxMid !== '' && origParams.intervalType !== '') {
//       // && realtyType !== '' 
//       setOrigParams({
//         ...origParams,
//         isResultActive: true,
//       })
//       // setIsResultActive(true);
//       console.log('Активируем кнопку');      
//     } else {
//       setOrigParams({
//         ...origParams,
//         isResultActive: false
//       })
//       // setIsResultActive(false);
//       // console.log('Отключаем кнопку');
//     };    
// }, [year, region, origParams.purpose, origParams.minMaxMid, origParams.intervalType]);


// realtyType, 

  // const handleIsCalcShow = (correctionType) => {
  //   if (correctionType === 'Общая площадь (коэффициент торможения)') {
  //     setIsCalcShow(true);
  //   } else {
  //     setIsCalcShow(false);
  //   }    
  // }

  useEffect(() => {
    // const purpose = origParams.purpose;
    // const intervalType = origParams.intervalType;
    // const minMaxMid = origParams.minMaxMid;

    setOrigParams({
      ...origParams,
      ratioCalc: calculateBreakRatio(
        year,
        region,
        origParams.purpose,
        origParams.intervalType,
        origParams.minMaxMid
      )  
    })
    
    // setRatioCalc(calculateBreakRatio(year, region, purpose, intervalType, minMaxMid))
    // realtyType, 
    // console.log('Слушаем, вычисляем');
    // handleRatioCalculated();
  }, [year, region, origParams.purpose, origParams.minMaxMid, origParams.intervalType]);
  // realtyType, 


  return (
    <div className='App'>
      <img className="App__background" src={backgroundImg} alt=''/>
      <div className="App__main-box">
        <Header title={TITLE} subtitle={SUBTITLE}/>
        <div className="App__container">
          <Filters
            year={year}
            yearComment={yearComment}
            region={region}
            // realtyType={realtyType}
            purpose={origParams.purpose}
            intervalType={origParams.intervalType}
            minMaxMid={origParams.minMaxMid}
            isResultActive={origParams.isResultActive}
            isResultToShow={origParams.isResultToShow}
            resutToShow={origParams.ratioCalc}
            onGetResult={handleRatioCalculated}            
            onSetYear={handleYearChange}
            onSetRegion={handleRegionChange}
            // onSetRealtyType={handleRealTypeChange}
            onSetPupose={handlePurposeChange}
            onSetInterval={handleInterval}
            onSetMinMax={handleSetMinMaxMidl}
            onReset={resetAllFilds}
            onSend={handleRatioSend}
          />
          <div className="App__container-right">
            <About />
            <Calc calculatedRatio={origParams.ratioCalc} isSend={origParams.isResultSend}/>
            <AdditionalInfo
              year={year}
              region={region}
              // realtyType={realtyType}
              purpose={origParams.purpose}
              intervalType={origParams.intervalType}
              minMaxMid={origParams.minMaxMid}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
