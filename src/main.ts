
import Person from "./Person";
import PersonStore from "./PersonStore";
const thisPerson1 = new Person(1, "호세", "개발자", true);
const thisPerson2 = new Person(2, "뭐", "개발자", true);
const thisPerson3 = new Person(3, "요", "개발자", true);
const thisPerson4 = new Person(4, "응애", "개발자", true);
const personStore = new PersonStore(new Map<number, PersonInterFace>);

personStore.pushPerson(thisPerson1);
personStore.pushPerson(thisPerson2);
personStore.pushPerson(thisPerson3);
personStore.pushPerson(thisPerson4);
console.log(personStore.getPerson(2)?._name)