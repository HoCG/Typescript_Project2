class Person {
  constructor(
    public _id : number, 
    public _name : string, 
    public _job : string,
    public _complete : boolean = false //default parameta (값 초기화)
  ) {
    this._id = _id;
    this._name = _name;
    this._job = _job;
    this._complete = _complete;
  }
  printDetails(): void {
    console.log(`${this._id}\t${this._name}\t${this._job}\t${this._complete ? "\t(complete)" : ""}`);
  } 
  get name() {
    return this._name;
  }
  set name(name: string) {

  }
}

export default Person;