function generator() {
	var quote = document.getElementById("h1");
	var btn = document.getElementById("btn")
	var author = document.getElementById("author");

	let num = Math.random() * 10;
	let num1 = Math.ceil(num);

	switch (num1) {
		case 1:

		quote.innerHTML = "<span>b</span>e strong now, b'coz things will get better. It might be stormy now, but it can't rain forever.",
		author.innerHTML = "Anonymous";

		break;

		case 2:

		quote.innerHTML = "<span>W</span>hy we Sometimes write 'ETC' in Exams? Because It Means.....E(End Of) T(Thinking) C (Capacity) ;-)",
		author.innerHTML = "Anonymous";

		break;

		case 3:

		quote.innerHTML = "<span>W</span>hy is it so Easy to Fail but so Hard to Succed?",
		author.innerHTML = "Anonymous";

		break;

		case 4:

		quote.innerHTML = "<span>8</span>0% of the exam is always based on 1 lecture that you missed and 1 topic that you didn't prepare",
		author.innerHTML = "Anonymous";

		break;

		case 5:

		quote.innerHTML = "<span>h</span>ated by many, wanted by plenty, disliked by some, confronted by none.",
		author.innerHTML = "Anonymous";

		break;

		case 6:

		quote.innerHTML = "<span>D</span>on't let people rent space in your head just let it go..",
		author.innerHTML = "Anonymous";

		break;

		case 7:

		quote.innerHTML = "<span>t</span>ake the risk, it could lead to something beautiful.",
		author.innerHTML = "Anonymous";

		break;

		case 8:

		quote.innerHTML = "<span>g</span>irl's logic: When you like a guy, do nothing about it and expect him to magically know and make the first move.",
		author.innerHTML = "Anonymous";

		break;

		case 9:

		quote.innerHTML = "<span>d</span>on't waste time giving someone a second chance, when there is someone better waiting for their first",
		author.innerHTML = "Anonymous";

		break;

		case 10:

		quote.innerHTML = "<span>i</span>t might seem like the hardest thing to do, but you have to forget the person who forgot about you.",
		author.innerHTML = "Anonymous";

		break;

		default:

		quote.innerHTML = "<span>t</span>here are so many people out there who will tell you that you can't. What you have for to do is turn around and say watch me.",
		author.innerHTML = "Anonymous";
	}
}