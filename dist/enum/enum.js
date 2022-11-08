"use strict";
var respond = function (userMessage, systemMessage) {
    console.log(userMessage + ": " + systemMessage);
};
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
;
var GenderChecker;
(function (GenderChecker) {
    GenderChecker["Man"] = "man";
    GenderChecker["Woman"] = "woman";
})(GenderChecker || (GenderChecker = {}));
;
var run = function () { respond("나는", UserResponse.No); };
var GenderCheck = function () { console.log(GenderChecker.Man); };
GenderCheck();
