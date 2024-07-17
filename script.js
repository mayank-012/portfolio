const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.getElementsByClassName('section'));
for (let section of sections) {
  const children = section.getElementsByClassName('fade-delay');
  for (let count = 0; count < children.length; count++) {
     children[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
 }
 const children1 = section.getElementsByClassName('fade-delay1');
 for (let count = 0; count < children1.length; count++) {
    children1[count].setAttribute('style', 'transition-delay: ' + 0 + 's');
}
observer.observe(section);
}
});