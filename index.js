const faqDropdowns = document.querySelectorAll('.faq-header');

faqDropdowns.forEach(faqDropdowns => {
	faqDropdowns.addEventListener('click', e => {
		const para = e.currentTarget.nextElementSibling;
		const arrow = e.currentTarget.children.item(1);

		arrow.classList.toggle('rotated');
		para.classList.toggle('hidden');
	});
});
