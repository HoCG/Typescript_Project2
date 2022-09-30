

class PersonStore {
  private key: number = 1;
  constructor(
    public personArray : Map<number, PersonInterFace>
  ) {
    this.personArray = personArray;
  }
  pushPerson(Person: PersonInterFace): void {
    this.personArray.set(this.key, Person);
    this.keyUp();
  }
  keyUp(): void {
    this.key++;
  }
  getPerson(key: number) {
    return this.personArray.get(key);
  }
  deletePerson(key: number) {
    
  }
  showAllInfo() {    
    this.personArray.forEach( (value, key, map) =>
      console.log(value.getName() + "\n")
    )
  }
}

export default PersonStore;