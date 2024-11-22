let quoteContent = document.querySelector(".quote-content");
let nameAuthor = document.querySelector(".name h2");
let imgAuthor = document.querySelector(".img-author img");
let like = document.getElementById("like");
let sound = document.getElementById("sound");
let copy = document.getElementById("copy");
let twitter = document.getElementById("twitter");
let btnQuote = document.querySelector(".new");



let quotes = [
    {
        myQuote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,
        author : "Bernard M. Baruch",
        imgAuthor : "imgs/a1_.jpg"
    },
    {
        myQuote : "“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend” " ,
        author : " Albert Camus",
        imgAuthor : "imgs/a2_.jpg"
    },
    {
        myQuote : "“A friend is someone who knows all about you and still loves you.” " ,
        author : "  Elbert Hubbard",
        imgAuthor : "imgs/a3_.jpg"
    },
    {
        myQuote : "“Omrak Ma Htbaa basha mn gher hob elnass we belblrdaa mttbtrsh albotran sktoo aatraan ya abn aboya” " ,
        author : "  Rfa3y Eldosoky",
        imgAuthor : "imgs/rfa3i1.jpg"
    },
    {
        myQuote : "“Baghirr mn meen..? Tarek, aaaref leeh aalshan akhtrtoo howa we sbtk anta. Tarek maya allshan shratt!” " ,
        author : "  Rfa3y Eldosoky",
        imgAuthor : "imgs/rfa3i1.jpg"
    },
    {
        myQuote : "“Kolha beet ghalabaa omal meen elfagr? Ana we alaaiazoo b allah?” " ,
        author : "  Bassem Samra",
        imgAuthor : "imgs/basem.jpg"
    },
    {
        myQuote : "“mfesh atnen hlwen ymsho maa baad abdn , alhlwa tmshy maa alehhsha aalshan tbynn anha helwa, tb w elwhsh tmshy maa alhlwa leh?, aalshan ttaaaks” " ,
        author : "  Bassem Samra",
        imgAuthor : "imgs/basem.jpg"
    },
    {
        myQuote : "“khleek zy alaabr serk my5rogsh brak, mtatish rabtl ala llkber hy5lek f aain khaloo kber” " ,
        author : "  Rfa3y Eldosoky",
        imgAuthor : "imgs/rfa3i1.jpg"
    },
    {
        myQuote : "“almsayb kolhaa gaya mn alsaan we almshakl bdythaa klma, we alsmkaa aly boaaah mafol saaab astidhaa” " ,
        author : "  Rfa3y Eldosoky",
        imgAuthor : "imgs/rfa3i1.jpg"
    },
    


]

let currentQuoteIndex;
function  randomIndex(){


    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === currentQuoteIndex) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    currentQuoteIndex = newIndex;
    return currentQuoteIndex;
}



btnQuote.addEventListener('click' , function(){
   let index = randomIndex() ;
   quoteContent.innerText = quotes[index].myQuote ;
   nameAuthor.innerText = quotes[index].author ;
   imgAuthor.setAttribute('src', quotes[index].imgAuthor );
});

sound.addEventListener('click', function() {
   
      
  let utterance = new SpeechSynthesisUtterance(quoteContent.innerText);
  speechSynthesis.speak(utterance);
    
});
copy.addEventListener('click', function() {
   
    navigator.clipboard.writeText(quoteContent.innerText);
    
});
twitter.addEventListener('click', function() {
    let tweetText = `${quoteContent.innerText} — ${nameAuthor.innerText}`;
    let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
});