
const personArr = [{name: 'jojo'}, {name: 'jojo'}, {name: 'jojo'}]

const newFunction = (personArr) => {
  return personArr.map(person => 
    person.name += `hihi`
  )
};

console.log(newFunction(personArr));