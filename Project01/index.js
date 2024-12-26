// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const gitaQuotes = [
    {
      quote: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। \nमा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥",
      speaker: "Lord Krishna"
    },
    {
      quote: "न जायते म्रियते वा कदाचिन् \nनायं भूत्वा भविता वा न भूयः। \nअजो नित्यः शाश्वतोऽयं पुराणो \nन हन्यते हन्यमाने शरीरे॥",
      speaker: "Lord Krishna"
    },
    {
      quote: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता। \nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः॥",
      speaker: "Lord Krishna"
    },
    {
      quote: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। \nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
      speaker: "Lord Krishna"
    },
    {
      quote: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद् दृढम्। \nतस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्॥",
      speaker: "Arjuna"
    },
    {
      quote: "समदुःखसुखं धीरं सोमृतत्वाय कल्पते।",
      speaker: "Lord Krishna"
    }
  ];

  btn.addEventListener("click", function(e) {
    let random = Math.floor(Math.random() * gitaQuotes.length);
    quote.innerText = gitaQuotes[random].quote;
    person.innerText = gitaQuotes[random].speaker;

  });
  
