import { request } from './api'
import Utils from 'common/utils'

export function getDetail(bedNum) {
  return request(
    {
      url: '/OnlinePatient/' + bedNum
    }
  )
  // .then(
  // res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
}

export class patient {
  constructor(name, OrderDate, operationDate, MedRec,) {
    this.name = name[0] + "XX";
    this.OrderDate = OrderDate;
    this.countHospitalDays = Utils.countDays(OrderDate)
    this.operationDate = operationDate;
    this.countPostSurgDays = Utils.countDays(operationDate)
    this.gender = MedRec["入院记录(大病历新VTE)2019"]["gender"]
    this.age = Utils.getAge(MedRec["入院记录(大病历新VTE)2019"]["birthday"])
    this.BMI = MedRec["入院记录(大病历新VTE)2019"]["BMI"]
    this.chiefComplaint = MedRec["入院记录(大病历新VTE)2019"]["chiefComplaint"]
    this.drink_cigrett = MedRec["入院记录(大病历新VTE)2019"]["drink_cigrett"]
    this.diagnosis = MedRec["入院记录(大病历新VTE)2019"]["diagnosis"]
  }
}

