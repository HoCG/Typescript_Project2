
import Person from "./Person";
import Planner from "./Planner";
import SoftwareEnginer from "./SoftwareEnginer";
import PersonStore from "./PersonStore";

const thisPerson1: Person = new Planner(1, "호세", 26 );
const thisPerson2: Person = new Planner(2, "민준", 25);
const thisPerson3: Person = new SoftwareEnginer(3, "유선", 32);
const thisPerson4: Person = new SoftwareEnginer(4, "남순", 23);
const personStore: PersonStore = new PersonStore(new Map<number, PersonInterFace>);

personStore.pushPerson(thisPerson1);
personStore.pushPerson(thisPerson2);
personStore.pushPerson(thisPerson3);
personStore.pushPerson(thisPerson4);
console.log(personStore.showAllInfo());