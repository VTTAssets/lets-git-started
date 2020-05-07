const messageType = "greeting";
const messageText = "Hello World";

const message = (type, message) => `[${messageType.toUpperCase()}] ${message}`;

console.log(message(messageType, messageText));
