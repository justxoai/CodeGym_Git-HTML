class Phone {
    name; // Phone Type
    baterryPercent; // Battery
    isOn; // On/Off
    draftMessage; // Message to sent
    inbox; // Message Receive
    sentMessage; // Message was sent

    constructor(name) {
        this.name = name;
        this.baterryPercent = 100; // Default 100%
        this.isOn = false; // Default Turn OFF
        this.draftMessage = "";
        this.inbox = [];
        this.sentMessage = [];
    }

    // Check that the Phone can use
    canUse() {
        // Return: isOn (True/Fase) + Battery (Out of battery)
        return this.isOn && this.baterryPercent > 0;
    }

    useBattery() {
        if (this.baterryPercent > 0) {
            // Decease 1 each time call
            this.baterryPercent--;
        }
    }

    turnOn() {
        // Set isOn to True
        this.isOn = true;
        console.log(this.name + " is Turn ON");
    }

    turnOff() {
        // Set isOn to False
        this.isOn = false;
        console.log(this.name + " is Turn OFF");
    }

    // Charge the Battery: Increase Battery
    chargePhone() {
        if (this.baterryPercent < 100) {
            // Increase Battery till 100
            this.baterryPercent++;
        }
    }

    composeMessage(draftMessage) {
        // Check if Phone can use
        if (!this.canUse())
            return;

        // Set draft Message
        this.draftMessage = draftMessage;

        // Use Battery
        this.useBattery();
    }

    // receiverPhone -> an Object -> also a Phone class
    sendMessage(receiverPhone) {
        // Check if Phone can use
        if (!this.canUse())
            return;

        // Phone class receive
        receiverPhone.receiveMessage(this.draftMessage);

        // Adding message in sent message
        this.sentMessage.push(this.draftMessage);

        // Clear draft message
        this.draftMessage = "";

        // Use Battery
        this.useBattery();
    }

    receiveMessage(message) {
        // Check if Phone can use
        if (!this.canUse())
            return;

        // Adding message into Inbox
        this.inbox.push(message);

        // Use Battery
        this.useBattery();
    }

    showInbox() {
        // Check if Phone can use
        if (!this.canUse())
            return;

        // Show the inbox
        console.log("All inbox of the " + this.name + ": " + this.inbox);

        // Use Battery
        this.useBattery();
    }

    showSentMessage() {
        // Check if Phone can use
        if (!this.canUse())
            return;

        console.log("All inbox sent of the " + this.name + ": " + this.sentMessage);

        // Use Battery
        this.useBattery();
    }
}