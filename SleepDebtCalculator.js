const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 6;
    case 'wednsday':
      return 4;
    case 'thursday':
      return 7;
    case 'friday':
      return 8;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
  }
};

const getActualSleepHours = () => {
  sum = getSleepHours('monday') + getSleepHours('tuesday')+ getSleepHours('wednsday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return sum
}
 const getIdealSleepHours = () => {
   const idealHours = 8;
   return idealHours * 7;
 };

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours == idealSleepHours) {
    console.log('You got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you need')
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
  }
}

calculateSleepDebt();
