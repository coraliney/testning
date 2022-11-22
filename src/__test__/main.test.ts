import { sendMessage } from "./../ts/main";
test("should be what goes in", ()=>{
//Arrange
let greeting: string = "Hello world!";
//Act
let myMessage: string = sendMessage(greeting);
//Assert
expect(myMessage).toBe("Hello world!");
});