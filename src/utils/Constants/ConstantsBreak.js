const YEARS_LOCATE = [
    {value: '01.01.2023', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2023`}, 
    {value: '01.01.2022', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2022`},
    {value: '01.01.2021', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2021`},
    {value: '01.01.2020', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2020`},
];


const PURPOSE_LOCATE = [    
    {name: 'purpose', value: 'Торг-офис', text: 'Торгово-офисное', isOn: true},
    {name: 'purpose', value: 'Производственно-складское', text: 'Производственно-складское', isOn: true},
    {name: 'purpose', value: 'Прочее коммерческое', text: 'Прочее коммерческое', isOn: true},
];

const REGIONS_LOCATE = [
    {value: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', 'isOn': true},
    {value: 'Курская', 'isOn': true},
    {value: 'Тамбовская', 'isOn': true},    
];

const YEARSELECTED_LOCATE = '01.01.2023';

export {  
    YEARS_LOCATE,
    PURPOSE_LOCATE,    
    REGIONS_LOCATE,
    YEARSELECTED_LOCATE,
    };