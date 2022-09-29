

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
}

export default PersonStore;