interface PersonInterFace {
  _id : number;
  _name : string; 
  _age : number;
  setId(id: number): void;
  getId(): number;
  setName(name: string): void;
  getName(): string;
  setAge(age: number): void;
  getAge(): number;
}