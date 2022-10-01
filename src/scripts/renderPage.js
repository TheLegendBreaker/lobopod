setSiteLabel("lobopod");
const removeClass = (el, trgtClass) => {
	console.log(el);
	if (el) el.classList.remove(trgtClass);
};
const addClass = (el, newClass) => {
	if (el) el.classList.add(newClass);
};
const promptGallery = document.querySelector(".prompt-gallery__floor"),
	promptCards = document.querySelectorAll(".prompt-card--gallery"),
	openBtns = document.querySelectorAll(".prompt-gallery__btn");

const toggleShowGallery = () => {
	toggleClass(promptGallery, "prompt-gallery__floor--hidden");
	toggleClass(openBtns[0], "prompt-gallery__btn--hidden");
};

openBtns.forEach((btn) => {
	addAction(btn, "click", toggleShowGallery);
});

promptCards.forEach((card) => {
	let toggleInspectCard = () => {
		const reference = card.querySelector(".reference-card--completed"),
			activeClass = "prompt-card--detached",
			active = document.querySelector("." + activeClass);

		removeClass(reference, "reference-card--hidden-mobile");
		toggleClass(card, activeClass);

		if (active) {
			const activeReference = active.querySelector(
				".reference-card--completed"
			);
			addClass(activeReference, "reference-card--hidden-mobile");
			removeClass(active, activeClass);
		}
	};
	addAction(card, "click", toggleInspectCard);
});
const buildLatestPostRender = (body, data) => {
	const readMore = document.createElement("button"),
		container = document.createElement("article"),
		statement = document.createElement("div");

	statement.classList.add("art-card__artist-statement--truncated");
	statement.classList.add("art-card__artist-statement");
	readMore.classList.add("art-card__btn-show");
	readMore.classList.add("art-card__btn");
	statement.innerHTML = data.content.rendered;
	container.classList.add("art-card__body");
	readMore.innerText = "read more";
	container.innerHTML = body;

	const toggleOpenStatement = () => {
		const cssClass = "art-card__artist-statement--truncated";
		toggleClass(statement, cssClass);
		if (!statement.classList.contains(cssClass)) {
			readMore.classList.remove("art-card__btn-show");
			readMore.classList.add("art-card__btn-less");
			readMore.innerText = "show less";
		} else {
			readMore.classList.add("art-card__btn-show");
			readMore.classList.remove("art-card__btn-less");
			readMore.innerText = "read more";
		}
	};
	addAction(readMore, "click", toggleOpenStatement);

	container.append(statement);
	container.append(readMore);
	return container;
};

const renderLatestPost = (article, data) => {
	const body = `
		<h2 class="art-card__prompt">${data.title.rendered}</h2>
		<figure class="art-card__crop">
			<img class="art-card__img" src="${data._embedded["wp:featuredmedia"][0].source_url}" alt="${data.title.rendered}">
		</figure>
	`;
	const render = buildLatestPostRender(body, data);
	article.append(render);
};
const renderGalleryPost = (article, data) => {
	let markUp = "";
	markUp += '<div class="prompt-card__complete-img-box">';
	markUp += '<img class="prompt-card__complete-img"';
	markUp += 'src="' + data._embedded["wp:featuredmedia"][0].source_url + '"';
	markUp += 'alt="' + data.title.rendered + '">';
	markUp += "</div> ";
	markUp += '<div class="prompt-card__complete-body">';
	markUp += data.content.rendered;
	markUp += "</div>";
	article.innerHTML = markUp;
};
const renderPost = (article, data) => {
	article.innerHTML =
		"<h2>" + data.title.rendered + "</h2>" + data.content.rendered;
};
renderFirstPost = function (cssSelector, response) {
	const article = document.querySelector(cssSelector);
	renderPost(article, response[0]);
};

renderPromptGallery = function () {
	console.log("renderPromptGallery");
	getPostByCategory("complete")
		.then((response) => {
			const cssSelector = ".prompt-card__complete";
			const articles = document.querySelectorAll(cssSelector);
			let article;
			response.forEach((data, i) => {
				article = articles[i];
				const parent = getParentByClass(article, "prompt-card--gallery"),
					reference = parent.querySelector(".reference-card--prompt");
				if (reference) reference.classList.add("reference-card--completed");
				reference.classList.remove("reference-card--prompt");
				renderGalleryPost(article, data);
			});
		})
		.catch((e) => console.log(e));
};
renderComplete = function () {
	getPostByCategory("complete")
		.then((response) => {
			const cssSelector = ".art-card--about";
			if (response.length == 0) {
				return (document.querySelector(cssSelector).innerHTML = "");
			}
			const article = document.querySelector(cssSelector);
			removeClass(article, "art-card--hidden");
			renderLatestPost(article, response[0]);
		})
		.catch((e) => console.log(e));
};
renderAboutMe = function () {
	getPostByCategory("about-me")
		.then((response) => {
			renderFirstPost("#about-me", response);
		})
		.catch((e) => console.log(e));
};
renderContact = function () {
	getPostByCategory("contact")
		.then((response) => {
			renderFirstPost("#contact", response);
		})
		.catch((e) => console.log(e));
};
renderFooter = function () {
	getPostByCategory("footer")
		.then((response) => {
			renderFirstPost("#footer", response);
		})
		.catch((e) => console.log(e));
};
renderAbout = function () {
	getPostByCategory("about")
		.then((response) => {
			renderFirstPost("#about", response);
		})
		.catch((e) => console.log(e));
};

renderPromptGallery();
renderComplete();
renderAboutMe();
renderContact();
renderFooter();
renderAbout();
