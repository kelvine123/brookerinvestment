    const toggleButton = document.getElementById('chatbot-toggle');
    const chatbotBox = document.getElementById('chatbot-box');
    const chatArea = document.getElementById('chat-area');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    toggleButton.addEventListener('click', () => {
      chatbotBox.style.display = chatbotBox.style.display === 'none' ? 'block' : 'none';
    });

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) 
    return "Hello! 👋 How can I assist you with borehole drilling today?";
  
  if (input.includes("name")) 
    return "I'm your Borehole Assistant Bot! 😊";

  if (input.includes("bye")) 
    return "Goodbye! If you have more questions about boreholes, just ask.";

  if (input.includes("location") || input.includes("where are you located") || input.includes("company location"))
    return "Our company is located in Nairobi, Kenya, and we serve clients locally and regionally.";

  if (input.includes("types of boreholes") || input.includes("what types of boreholes"))
    return "We drill domestic, commercial, agricultural, and industrial boreholes tailored to your needs.";

  if (input.includes("depth") || input.includes("how deep"))
    return "Typical borehole depths vary depending on the location but usually range from 30 to 150 meters.";

  if (input.includes("where to drill"))
    return "We conduct thorough site surveys and use geological data to determine the best drilling locations.";

  if (input.includes("technology") || input.includes("equipment"))
    return "We use modern drilling rigs and technology to ensure efficient and safe borehole drilling.";

  if (input.includes("time") || input.includes("how long") || input.includes("project take"))
    return "Borehole projects typically take between 2 to 3 weeks, depending on depth and site conditions.";

  if (input.includes("cost") || input.includes("price") || input.includes("fees") || input.includes("average cost"))
    return "Costs vary based on depth and location, ranging from $3,000 for a shallow well to $15,000+ for deep boreholes with complete installations. We offer transparent quotes with no hidden costs.";

  if (input.includes("water testing") || input.includes("quality"))
    return "Yes, we offer water testing and quality analysis to ensure safe and clean water.";

  if (input.includes("guarantee") || input.includes("warranty"))
    return "We provide warranties on our drilling services to ensure your satisfaction and peace of mind.";

  if (input.includes("maintenance") || input.includes("repair") || input.includes("maintenance services"))
    return "Yes, we provide comprehensive maintenance packages including pump servicing, water quality testing, and system inspections to ensure long-term performance.";

  if (input.includes("permits") || input.includes("licenses"))
    return "We assist with obtaining all necessary permits and licenses required for drilling.";

  if (input.includes("environment") || input.includes("sustainability"))
    return "Our drilling process is environmentally responsible, minimizing impact on the surrounding area.";

  if (input.includes("water flow") || input.includes("yield"))
    return "Expected water yield varies, but we aim to deliver sufficient flow based on your water needs.";

  if (input.includes("pumps") || input.includes("installation"))
    return "Yes, we install pumps and related water systems along with borehole drilling.";

  if (input.includes("references") || input.includes("projects"))
    return "We can provide references and showcase previous successful borehole projects we've completed.";

  if (input.includes("challenges") || input.includes("rocky") || input.includes("hard to drill"))
    return "We have experience handling difficult terrains like rocky areas to ensure successful drilling.";

  if (input.includes("safety"))
    return "Safety is our top priority; our engineers follow strict safety protocols during drilling.";

  if (input.includes("rural") || input.includes("hard to reach"))
    return "We specialize in drilling boreholes in rural and hard-to-access locations.";

  if (input.includes("thank you") || input.includes("thanks"))
    return "You're welcome! 😊 Let us know if you have more questions about boreholes.";


  return "Sorry, I don't understand that yet. Could you please ask about borehole drilling or related services?";
}


    sendBtn.addEventListener('click', () => {
      const userInput = chatInput.value.trim();
      if (userInput === '') return;
      chatArea.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
      const botReply = getBotResponse(userInput);
      chatArea.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
      chatInput.value = '';
      chatArea.scrollTop = chatArea.scrollHeight;
    });