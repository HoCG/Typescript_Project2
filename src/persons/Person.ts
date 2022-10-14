class Person implements PersonInterFace{
  constructor(
    public _id : number, 
    public _name : string,
    public _age: number,
  ) {
    this._id = _id;
    this._name = _name;
    this._age = _age;
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
  setAge(age: number): void {
    throw new Error("Method not implemented.");
  }
  getAge(): number {
    throw new Error("Method not implemented.");
  }
}

export default Person;