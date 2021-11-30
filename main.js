const json = {
"statusCode": 200,
"message": "Quotes",
"pagination": {
"currentPage": 1,
"nextPage": 2,
"totalPages": 7268
},
"totalQuotes": 72672,
"data": [
{
"_id": "5eb17aadb69dc744b4e70d23",
"quoteText": "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
"quoteAuthor": "Mark Twain",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d24",
"quoteText": "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
"quoteAuthor": "Henry Ford",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d25",
"quoteText": "Wrinkles should merely indicate where smiles have been.",
"quoteAuthor": "Mark Twain",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d26",
"quoteText": "True terror is to wake up one morning and discover that your high school class is running the country.",
"quoteAuthor": "Kurt Vonnegut",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d27",
"quoteText": "A diplomat is a man who always remembers a woman's birthday but never remembers her age.",
"quoteAuthor": "Robert Frost",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d28",
"quoteText": "As I grow older, I pay less attention to what men say. I just watch what they do.",
"quoteAuthor": "Andrew Carnegie",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d29",
"quoteText": "How incessant and great are the ills with which a prolonged old age is replete.",
"quoteAuthor": "C. S. Lewis",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d2a",
"quoteText": "Old age, believe me, is a good and pleasant thing. It is true you are gently shouldered off the stage, but then you are given such a comfortable front stall as spectator.",
"quoteAuthor": "Confucius",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d2b",
"quoteText": "Old age has deformities enough of its own. It should never add to them the deformity of vice.",
"quoteAuthor": "Eleanor Roosevelt",
"quoteGenre": "age",
"__v": 0
},
{
"_id": "5eb17aadb69dc744b4e70d2c",
"quoteText": "Nobody grows old merely by living a number of years. We grow old by deserting our ideals. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.",
"quoteAuthor": "Samuel Ullman",
"quoteGenre": "age",
"__v": 0
}
]
}


$('.random').click(event =>{
	$('.quoteText').fadeOut('fast');
	$('.quoteAuthorName').fadeOut('fast');
	let value = Math.trunc(Math.random() * 10);
	$('.quoteText').fadeIn(2000);
	$('.quoteAuthorName').fadeIn(2000);
	$('.quoteText').text(json.data[value].quoteText);
	$('.quoteAuthorName').text(json.data[value].quoteAuthor);
	if(value == value){
		let value = Math.trunc(Math.random() * 10);
		$('.quoteText').text(json.data[value].quoteText);
		$('.quoteAuthorName').text(json.data[value].quoteAuthor);
	}
});

let listAuthorFrases = [];

$('.quoteAuthor').click(event => {

	$('.authorQuotes').toggle('slow');
	$('.containerText').toggle('slow');
	$('.quoteAuthor').toggle('slow');
	$('.authorQuotesAuthor').text($('.quoteAuthorName').text());
	for (let i = 0; i < json.data.length; i++) {
		if($('.quoteAuthorName').text() == json.data[i].quoteAuthor){
			listAuthorFrases.push(json.data[i].quoteText);
		}else{}
	}
	for(let i = 0; i < listAuthorFrases.length; i++){
		$('.containerTextQuotes').append('<h1 class="text-md-start fs-4 quoteTextAuthor">' + listAuthorFrases[i] + '</h1>');
	}

});
$('.close').click(event => {
	listAuthorFrases.splice(0, listAuthorFrases.length);
	$('.containerTextQuotes').empty();
	$('.authorQuotes').toggle('slow');
	$('.containerText').toggle('slow');
	$('.quoteAuthor').toggle('slow');
});