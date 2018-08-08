class Time {
  constructor (date) {
    if (!date) {
      this.date = new Date();
    } else if (date instanceof Date) {
      this.date = date;
    } else {
      try {
        this.date = new Date(date);
      } catch (error) {
        console.error(error);
      }
    }
  };
  get (type) {
    switch (type) {
      case 'year':
        return this.date.getFullYear();
      case 'month':
        return this.date.getMonth() + 1;
      case 'date':
        return this.date.getDate();
      default:
        break;
    }
  };
  formatDate () {
    return this.get('year') + '-' + zeroFormat(this.get('month')) + '-' + zeroFormat(this.get('date'))
  };
  // static fromUnix 
}

function time (date) {
  return new Time(date);
}

time.fromUnix = function (unixTime) {
  return new Time(unixTime * 1000);
}

function zeroFormat (num) {
  return num < 10 ? '0' + num : '' + num
}

export default time;
