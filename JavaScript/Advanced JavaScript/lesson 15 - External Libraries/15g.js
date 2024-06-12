function isWeekend(date){
  if (date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday'){
    return date.format('dddd');
  }
}

export default isWeekend;