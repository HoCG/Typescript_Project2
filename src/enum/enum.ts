const respond = (userMessage: string, systemMessage: UserResponse) => {
  console.log(userMessage + ": " + systemMessage);
};
enum UserResponse {
  No = 0,
  Yes = 1,
};
enum GenderChecker {
  Man = "man",
  Woman = "woman",
};
const run = () => { respond("나는", UserResponse.No); };
const GenderCheck = () => { console.log(GenderChecker.Man) };
GenderCheck();