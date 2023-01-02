class generic <T>{
  private person: T;
  constructor(person: T) {
    this.person = person;
  }
  getPerson() {
    return this.person;
  };
  setPerson(person: T) {
    this.person = person;
  };
}