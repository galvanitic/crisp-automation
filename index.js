"use strict";
// Retrieving secret key
const crispAccess = require('./secret/crisp');

// Require CRISP module
var Crisp = require("node-crisp-api");
// Make new Crisp Client object
var CrispClient = new Crisp();

//Authenticate
CrispClient.authenticate(crispAccess.identifier, crispAccess.key);

// NEW MESSAGE
let newMessage = "Thank you for your interest in PelotonU! We are excited to connect with you about our program! Our offices will be closed starting December 21st; returning Monday January 4th. If you would like more information on eligibility and admissions into our program please contact our Admissions Manager Janet at jrodriguez@pelotonu.org. If you are a community partner or will like to be a community partner, contact our Director of Advising and Growth, Jamar Keaton at jamar@pelotonu.org If you have organizational questions or concerns please contact Chief of Staff Leigh Ridge."

// Send message on crisp
CrispClient.on("message:send", message => {
    CrispClient.websiteConversations.sendMessage(
        message.website_id,
        message.session_id, {
            type: "text",
            content: newMessage,
            from: "operator",
            origin: "chat"
        }
    )
})
console.log('SUCCESSFULLY AUTOMATING');