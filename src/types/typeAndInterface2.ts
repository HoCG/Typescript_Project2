type personDetail2 = {
  place: string;
  married: boolean;
}

//타입문법을 사용하게 되면 명령적인 형태로 확장을 해야함!
type person2 = {
  name: string;
  age: number;
  hairColor: string;
} & personDetail2

class Musicion implements person2 {
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

  setMusicion(musicionInfo: person, _product: string) {
    this.age = musicionInfo.age;
    this.hairColor = musicionInfo.hairColor;
    this.married = musicionInfo.married;
    this.name = musicionInfo.name;
    this.place =musicionInfo.place;
    this.product = _product
  }
}


const mario = new Musicion('조한슨', 23, '#ffffff');

mario.setMusicion({...mario, place: '서울', married: false}, '두둠칫칫칫');

console.log(mario);