var horoscopes = [
  "Your influence can help create a peaceful outcome if you speak up kindly and gently.",
  "Engaging with strangers might become your new favorite thing.",
  "Wait a few days before committing to anything, as you may have a better offer coming soon.",
  "Allow yourself to hit pause on the analytical monologue in your brain and get carried away.",
  "Spend your spare time finding the answers to the mysteries of the universe.",
  "Your enthusiasm is contagious, and you could have a profound effect on the people you talk to now.",
  "It will be a nerve-wracking day for you, so keep a stable mind.",
  "Put all of your effort on the thing that you consider to be of the highest priority.",
  "Be tactful about the things that you are saying."
]

function newHoroscope() {
  var randomNumber = Math.floor(Math.random() * (horoscopes.length));
  document.getElementById('horoscope-display').innerHTML = horoscopes[randomNumber];
}
