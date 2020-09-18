function scrollToTarget(id) {
    let element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
    });

}