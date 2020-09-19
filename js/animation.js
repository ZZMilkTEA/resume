let callback = function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('before-enter');
            entry.target.classList.add('enter');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('enter');
            entry.target.classList.add('before-enter');
        }
      });
}
let options = {
    rootMargin: '-10px 0px 10px 0px'
}

let animatedScrollObserver = new IntersectionObserver(callback,options);

function bind (el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
}
let elements = [];
elements.push(document.querySelectorAll('section *'));

elements.forEach((nodes) => {
    nodes.forEach((el) => {
        bind(el);
    })
})
