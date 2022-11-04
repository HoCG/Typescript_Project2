const respond = (userMessage: string, systemMessage: UserResponse) => {
  console.log(userMessage + ": " + systemMessage);
};
enum UserResponse {
  No = 0,
  Yes = 1,
};
const run = () => { respond("나는", UserResponse.No); };
run();