function createElWithClass(el, className) {
	var element = document.createElement(el);
	element.classList.add(className);
	return element;
}

function createStreamInfo(data, title) {

	var liElGame = document.createElement('li');
	var spanGame = document.createElement('span');
	var textGame = document.createTextNode(title + ': ');
	var textDataGame = document.createTextNode(data);

	spanGame.appendChild(textGame);
	liElGame.appendChild(spanGame);
	liElGame.appendChild(textDataGame);
	
	return liElGame;
}

// cheking if a channel has a logo image, if not return an placeholder
function imgSource(data){
	return data ? data : 'http://via.placeholder.com/100x100';
}

function channelDivEl(data) {

	var textNode, titleElement;

	var divChannelElement = createElWithClass('div', 'channel');
	// Create the logo div container and give the logo class to it
	var divLogoElement = createElWithClass('div', 'logo');
	// Create the img element
	var logoImageElement = document.createElement('img');
	// Create a div container for the channel information
	var divStreamInfoElement = createElWithClass('div', 'stream-info');
	// Create a div content for the channel data
	var divStreamContentEl = createElWithClass('div', 'stream-content');
	// Create the span element that visually will tell if the channel it's online or offline
	// this element it's gone stay in the left position of the title element.
	var statusElement = document.createElement('span');
	// Create the subtitle element
	var streamDetailsElement = document.createElement('p');

	// check if the channel is online
	if (data.stream) {

		logoImageElement.src = imgSource(data.stream.channel.logo);

		statusElement.className = 'online';
		titleElement = document.createElement('a');
		titleElement.href = data.stream.channel.url;
		textNode = document.createTextNode(data.stream.channel.display_name);
		streamDetailsElement.textContent = data.stream.channel.status;

		titleElement.appendChild(statusElement);
		titleElement.appendChild(textNode);

		divStreamContentEl.appendChild(titleElement);
		divStreamContentEl.appendChild(streamDetailsElement);

		var streamTitle = createStreamInfo(data.stream.game, 'Game');
		var streamDate = createStreamInfo(data.stream.game, 'Date');
		var streamViewers = createStreamInfo(data.stream.game, 'Viewers');

		var ulStreamEl = document.createElement('ul');
		ulStreamEl.appendChild(streamTitle);
		ulStreamEl.appendChild(streamDate);
		ulStreamEl.appendChild(streamViewers);

		divStreamContentEl.appendChild(ulStreamEl);
		
	} else {

		logoImageElement.src = imgSource(data.logo);
		logoImageElement.classList.add('img-offline');
		

		// statusElement.className = 'offline';
		// titleElement = document.createElement('h3');
		// textNode = document.createTextNode(data.display_name);
		// streamDetailsElement.textContent = 'offline';
		// divStreamInfoElement.classList.add('si-offline');

		// titleElement.appendChild(statusElement);
		// titleElement.appendChild(textNode);

		// streamInfoContent.appendChild(statusElement);
		// streamInfoContent.appendChild(statusElement);

	}

	// append image to the logo div
	divLogoElement.appendChild(logoImageElement);
	// append logo div into the main div as the first child
	divChannelElement.appendChild(divLogoElement);

	// append the content to the channel div info
	divStreamInfoElement.appendChild(divStreamContentEl);

	// append logo div into the main div as the second child
	divChannelElement.appendChild(divStreamInfoElement);

	return divChannelElement;
}


