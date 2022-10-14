import Person from "./Person";

class SoftwareEnginer extends Person {
  public _job: string;
  constructor(
    _id: number, 
    _name: string,
    _age: number,
    _job: string = "개발자",
    ) {
    super(_id, _name, _age);
    this._job = _job;
  }
  introduce(): void {
    console.log("인녕 나는 개발자야")
  }
}

export default SoftwareEnginer;