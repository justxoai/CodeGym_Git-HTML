let androidPhone = new Phone("Android");
let iphonePhone = new Phone("Iphone");

// Turn on 2 Phone
androidPhone.turnOn();
iphonePhone.turnOn();

// Android compose and sent Message
androidPhone.composeMessage("Hello Iphone");
androidPhone.sendMessage(iphonePhone); // Parameter is an Object - Phone class;

// Iphone check inbox
iphonePhone.showInbox();

// Android check sent message
androidPhone.showSentMessage();
