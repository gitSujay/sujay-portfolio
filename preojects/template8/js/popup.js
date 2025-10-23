$(document).ready(function () {
	$.ajax({
		url: 'https://red-alert-api-d2z82.ondigitalocean.app/proofPopups?offerId=608b075afb8549001170db18',
		crossDomain: true,
		type: 'GET',
		cors: true,
		secure: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		headers: { Accept: 'application/json' },
		beforeSend: function (xhr) {
			xhr.withCredentials = true;
		},
	}).done(runPopups);

	function runPopups(data) {
		if (!data) {
			return;
		}

		let index = 0;

		// interval that shows popups
		const interval = setInterval(() => {
			const item = data[index];
			runOnePopup(item);

			// start from 0 if no next items
			if (data[index + 1]) {
				index++;
			} else {
				index = 0;
			}
		}, 15000);

		// generates and adds popup to html
		function runOnePopup(item) {
			const delay = 5000;
			const showTime = 10000;

			const popupHtml = `
				<div class="popup animate__animated animate__faster">
					<div class="close text-danger">
					<i class="bi bi-x"></i>
					</div>
					<div class="image">
						<img src=${item.image} width="70" height="70" alt=${item.product} />
					</div>
					<div class="content">
						<div class="title">
							${item.name} from ${item.city}
						</div>
						<div class="text">purchased ${item.product}</div>
						<div class="date">${item.date}</div>
						<div class="link">
							<i class='fas fa-check-circle'></i> by <span>${item.company}</span>
						</div>
					</div>
				</div>
			`;

			setTimeout(() => {
				$('body').prepend(popupHtml);
				$('.popup').addClass('animate__fadeInUp');
				$('.popup').removeClass('animate__fadeOutDown');

				// close popups
				$('.popup .close').click(function () {
					clearInterval(interval);
					$('.popup').remove();
				});
			}, delay);

			setTimeout(() => {
				$('.popup').addClass('animate__fadeOutDown');
				$('.popup').removeClass('animate__fadeInUp');

				// delete popup from html after animation
				setTimeout(() => {
					$('.popup').remove();
				}, 300);
			}, delay + showTime);
		}


		$('head').append(
			`<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' />`
		);
	}
});