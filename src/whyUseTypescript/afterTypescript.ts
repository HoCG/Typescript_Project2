
type personType = {
  name: string
}

const personArray: personType[] = [{name: 'jojo'}, {name: 'jojo'}, {name: 'jojo'}]

const newFunction2 = (personArray: personType[]) => {
  return personArray.map(person => 
    person.name += `hihi`
  )
};

console.log(newFunction2(personArray));