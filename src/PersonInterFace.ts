interface PersonInterFace {
  _id : number;
  _name : string; 
  _job : string;
  _complete : boolean;
  setId(id: number): void;
  getId(): number;
  setName(name: string): void;
  getName(): string;
  setJob(job: string): void;
  getJob(): string;
  setComplete(): void;
  getComplete(): boolean;
}