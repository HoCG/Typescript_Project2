interface personDetail {
  place: string;
  married: boolean;
}


//인터페이스를 사용하면 선언적으로 타입확장이 가능해진다.
interface person extends personDetail {
  name: string;
  age: number;
  hairColor: string;
}

class Doctor implements person {
  place: string;
  married: boolean;
  product: string;
  constructor(
    public name: string,
    public age: number,
    public hairColor: string
  ) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
    this.place = '';
    this.married = false;
    this.product = '';
  }

  setDocter(DoctorInfo: person, _product: string) {
    this.age = DoctorInfo.age;
    this.hairColor = DoctorInfo.hairColor;
    this.married = DoctorInfo.married;
    this.name = DoctorInfo.name;
    this.place =DoctorInfo.place;
    this.product = _product
  }
}


const johansun = new Doctor('조한슨', 23, '#ffffff');

johansun.setDocter({...johansun, place: '서울', married: false}, '수용');

console.log(johansun);