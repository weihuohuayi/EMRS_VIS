
import moment from 'moment'

var Utils = {
  // 计算住院天数
  countDays: function (originalDate) {
    // console.log(originalDate.split('T')[0])
    // console.log(moment("20200712", "YYYYMMDD").fromNow())
    try {
      let formattedDate = moment(originalDate.split('T')[0]).format("YYYYMMDD")
      // console.log(formattedDate)
      let days = moment(formattedDate, "YYYYMMDD").fromNow()
      // console.log(days)
      return days
    } catch (err) {
      let days = 'unknow'
      // console.log(days)
      return days
    }

  },
  // 根据出生日期获取年龄
  getAge: function (RecordBirthday) {
    var birthday = new Date(RecordBirthday.replace(/-/g, "\/"));
    var d = new Date();
    var age = d.getFullYear() - birthday.getFullYear() - ((d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate()) ? 1 : 0);
    return age
  }
}

export default Utils





