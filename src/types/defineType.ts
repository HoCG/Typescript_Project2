interface interFaceUser {
  age: number;
  name: string;
  job: string;
}

type userType = {
  age: number;
  name: string;
  job: string;
}

let user: interFaceUser = {
  age: 26,
  name: "james",
  job: "swEngineer"
}

let typedUser: userType = {
  age: 32,
  name: "jone",
  job: "none"
}