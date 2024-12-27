// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const gitaQuotes = [
  {
    quote: "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    speaker: "Lord Krishna"
  },
  {
    quote: "The soul is neither born, and nor does it die.",
    speaker: "Lord Krishna"
  },
  {
    quote: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    speaker: "Lord Krishna"
  },
  {
    quote: "A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities.",
    speaker: "Lord Krishna"
  },
  {
    quote: "The mind is restless and difficult to restrain, but it is subdued by practice.",
    speaker: "Lord Krishna"
  },
  {
    quote: "A person who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation.",
    speaker: "Lord Krishna"
  }
];


  btn.addEventListener("click", function(e) {
    let random = Math.floor(Math.random() * gitaQuotes.length);
    quote.innerText = gitaQuotes[random].quote;
    person.innerText = gitaQuotes[random].speaker;

  });
  
