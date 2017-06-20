var quotes = [
  'Tacos are tasty',
  'Movies are good',
  'I like toast',
  'I hate cold weather'
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
