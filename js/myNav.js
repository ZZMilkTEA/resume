let navCallback = function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let id = entry.target.id;
            let bullets = $("nav .nav-bullet");
            bullets.removeClass("active");
            switch (id) {
                case 'about-me': bullets.eq(0).addClass("active");break;
                case 'career-objective': bullets.eq(1).addClass("active");break;
                case 'my-skills': bullets.eq(2).addClass("active");break;
                case 'my-projects': bullets.eq(3).addClass("active");break;
                case 'interest': bullets.eq(4).addClass("active");break;

            }

            // observer.unobserve(entry.target);
        } else {

        }
    });
}


let clientHeightHalf = document.documentElement.clientHeight / 2;
let navOptions = {
    rootMargin: `-${clientHeightHalf - 1}px 0px -${clientHeightHalf}px 0px`
}

let navScrollObserver = new IntersectionObserver(navCallback,navOptions);

let navElements = [];
navElements.push(document.querySelectorAll('article section'));

navElements.forEach((nodes) => {
    nodes.forEach((el) => {
        navScrollObserver.observe(el);
    })
})

window.onresize = function(){
    let clientHeightHalf = document.documentElement.clientHeight / 2;
    navOptions = {
        rootMargin: `-${clientHeightHalf - 1}px 0px -${clientHeightHalf}px 0px`
    }
}
