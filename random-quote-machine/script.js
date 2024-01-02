fetch('./quotes.json')
  .then(response => response.json())
  .then(data => {
    // Use the data from the JSON file here
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function getRandomQuote() {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
  }
  
  function getQuote() {
    let randomQuote = getRandomQuote();
  
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    $('#tweet-quote').attr(
      'href',
      'https://twitter.com/intent/tweet?hashtags=quotes&related=knowledgeforgegames&text=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );

    $('facebook-quote').attr(
      'href',
      'https://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
    $('.quote-text').animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $('#text').text(randomQuote.quote);
    });
  
    $('.quote-author').animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $('#author').html(randomQuote.author);
    });
  
    var color = Math.floor(Math.random() * colors.length);
    $('html body').animate(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      1000
    );
    $('.button').animate(
      {
        backgroundColor: colors[color]
      },
      1000
    );
  }
  
  $(document).ready(function () {
    getQuotes().then(() => {
      getQuote();
    });
  
    $('#new-quote').on('click', getQuote);
  });