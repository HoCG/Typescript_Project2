class Person implements PersonInterFace{
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
  setId(id: number): void {
    this._id = id;
  }
  getId(): number {
    return this._id;
  }
  setName(name: string): void {
    this._name = name
  }
  getName(): string {
    return this._name;
  }
  setJob(job: string): void {
    this._job = job;
  }
  getJob(): string {
    return this._job;
  }
  setComplete(): void {
    this._complete = !this._complete
  }
  getComplete(): boolean {
    return this._complete;
  }
}

export default Person;