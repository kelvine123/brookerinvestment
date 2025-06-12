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

  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return "Hi/Hello! 👋 What should I help you with?<br><br>" +
           "1. Borehole Drilling<br>" +
           "2. Road Construction<br>" +
           "3. House Construction";
  }

  // Borehole Drilling Responses
  if (input.includes("borehole") || input.includes("1")) {
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

    return "For borehole drilling services, could you be more specific? Ask about costs, locations, equipment, or any other details.";
  }

  // House Construction Responses
  if (input.includes("house") || input.includes("construction") || input.includes("3")) {
    if (input.includes("name")) 
      return "I'm your House Construction Assistant Bot! 🏡";

    if (input.includes("bye")) 
      return "Goodbye! Reach out anytime for your construction needs.";

    if (input.includes("location") || input.includes("where are you located") || input.includes("company location"))
      return "We are located in Nairobi, Kenya, and serve clients throughout East Africa.";

    if (input.includes("foundation") || input.includes("laying foundation"))
      return "A strong foundation is crucial. We use reinforced concrete and assess soil conditions before starting.";

    if (input.includes("materials") || input.includes("construction materials"))
      return "We use high-quality materials like cement, sand, steel, bricks, blocks, and treated timber.";

    if (input.includes("roof") || input.includes("roofing"))
      return "We offer roofing solutions including iron sheets, tiles, and concrete roofs depending on your preference.";

    if (input.includes("cost") || input.includes("price") || input.includes("fees") || input.includes("budget"))
      return "Construction costs depend on size, design, and materials but we offer cost-effective options for every budget.";

    if (input.includes("plan") || input.includes("blueprint") || input.includes("drawing"))
      return "We help create architectural and structural plans tailored to your dream home.";

    if (input.includes("building permit") || input.includes("approval"))
      return "Yes, we assist with building permits and approvals from local authorities.";

    if (input.includes("duration") || input.includes("how long") || input.includes("project time"))
      return "A typical house can take 3-12 months to complete depending on the size and complexity.";

    if (input.includes("engineer") || input.includes("architect") || input.includes("contractor"))
      return "We work with licensed engineers, architects, and experienced contractors to deliver quality work.";

    if (input.includes("floors") || input.includes("tiles") || input.includes("flooring"))
      return "We install a variety of flooring including tiles, concrete, and wooden floors.";

    if (input.includes("painting") || input.includes("interior") || input.includes("finishing"))
      return "Our team offers professional interior finishes, painting, and decoration services.";

    if (input.includes("plumbing") || input.includes("pipes") || input.includes("water system"))
      return "Yes, we install full plumbing systems, including water tanks, piping, and fixtures.";

    if (input.includes("electricity") || input.includes("wiring") || input.includes("electrical"))
      return "We handle all electrical wiring and installations to ensure safety and functionality.";

    if (input.includes("security") || input.includes("fence") || input.includes("gate"))
      return "We can install perimeter walls, gates, CCTV, and other security features.";

    if (input.includes("maintenance") || input.includes("repairs"))
      return "Yes, we provide house maintenance and repair services, including roof repair, painting, and plumbing fixes.";

    if (input.includes("custom") || input.includes("design") || input.includes("style"))
      return "We offer custom designs to match your lifestyle and budget, from modern to traditional styles.";

    if (input.includes("multi-story") || input.includes("bungalow") || input.includes("apartment"))
      return "We construct various house types: bungalows, maisonettes, multi-story homes, and apartments.";

    if (input.includes("thank you") || input.includes("thanks"))
      return "You're welcome! 😊 Feel free to ask more about house construction.";

    return "For house construction, could you specify your question? Ask about costs, materials, timelines, or other details.";
  }

  // Road Construction Responses
  if (input.includes("road") || input.includes("2")) {
    if (input.includes("name")) 
      return "I'm your Road Construction Assistant Bot! 🚧";

    if (input.includes("bye")) 
      return "Goodbye! Feel free to reach out with more road construction questions anytime.";

    if (input.includes("location") || input.includes("where are you located") || input.includes("company location"))
      return "We are based in Nairobi, Kenya, and operate across the region.";

    if (input.includes("types of roads") || input.includes("road types"))
      return "We construct highways, access roads, rural roads, estate roads, and tarmac or gravel roads.";

    if (input.includes("equipment") || input.includes("machines"))
      return "We use modern road construction equipment like graders, bulldozers, rollers, and asphalt pavers.";

    if (input.includes("materials") || input.includes("construction materials"))
      return "Road construction uses materials like gravel, asphalt, bitumen, concrete, and crushed stone.";

    if (input.includes("foundation") || input.includes("sub-base") || input.includes("base layer"))
      return "We prepare a stable sub-base and base layer for durability and load-bearing capacity.";

    if (input.includes("cost") || input.includes("price") || input.includes("budget") || input.includes("fees"))
      return "Costs vary based on road length, type, and materials used. We offer detailed and transparent quotations.";

    if (input.includes("duration") || input.includes("how long") || input.includes("project time"))
      return "Road projects may take from a few weeks to several months depending on size, weather, and complexity.";

    if (input.includes("engineer") || input.includes("supervision") || input.includes("expert"))
      return "Our civil engineers and project managers supervise every stage to ensure quality and safety.";

    if (input.includes("maintenance") || input.includes("repair") || input.includes("resurfacing"))
      return "Yes, we offer maintenance, resurfacing, pothole repair, and road rehabilitation services.";

    if (input.includes("bitumen") || input.includes("tarmac") || input.includes("asphalt"))
      return "We specialize in bitumen and asphalt roads, providing smooth, long-lasting surfaces.";

    if (input.includes("drainage") || input.includes("culvert") || input.includes("water flow"))
      return "We install drainage systems including culverts and side drains to prevent water damage.";

    if (input.includes("permits") || input.includes("approval"))
      return "Yes, we help with getting all necessary permits and government approvals for road works.";

    if (input.includes("safety") || input.includes("road signs") || input.includes("markings"))
      return "Safety is key. We add road markings, signage, and safety barriers as required.";

    if (input.includes("gravel") || input.includes("murram") || input.includes("unpaved"))
      return "We also build gravel and murram roads especially suitable for rural and low-traffic areas.";

    if (input.includes("environment") || input.includes("sustainability"))
      return "We follow eco-friendly practices and reduce environmental impact during construction.";

    if (input.includes("inspection") || input.includes("quality control"))
      return "Every road project goes through quality inspections at different stages to ensure durability.";

    if (input.includes("thank you") || input.includes("thanks"))
      return "You're welcome! 😊 Let me know if you have more road construction inquiries.";

    return "For road construction services, could you specify your question? Ask about costs, materials, timelines, or other details.";
  }

  // General responses
  if (input.includes("name")) 
    return "I'm your Construction Services Assistant Bot! I can help with Borehole Drilling, Road Construction, and House Construction.";

  if (input.includes("bye") || input.includes("goodbye")) 
    return "Goodbye! Have a great day!";

  if (input.includes("thank you") || input.includes("thanks"))
    return "You're welcome! 😊 Let me know if you need anything else.";

  return "Sorry, I didn't understand that. Please choose from these services:<br><br>" +
         "1. Borehole Drilling<br>" +
         "2. Road Construction<br>" +
         "3. House Construction<br><br>" +
         "Or ask a more specific question about one of these services.";
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

// Allow pressing Enter to send message
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});