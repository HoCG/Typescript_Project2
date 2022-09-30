import Person from "./Person";

class Planner extends Person {
  public _job: string;
  constructor(
    _id: number, 
    _name: string,
    _age: number,
    _job: string = "기획자",
    ) {
    super(_id, _name, _age);
    this._job = _job;
  }
  introduce(): void {
    console.log("인녕 나는 기획자야")
  }
}

export default Planner;