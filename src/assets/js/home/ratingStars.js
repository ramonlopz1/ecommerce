(() => {
    const ratingStars = document.querySelectorAll('#produto__rating i')

    ratingStars.forEach((star, idx) => {
        star.addEventListener('click', () => {
            ratingStars.style.backgroundColor = "blue"
        })
    })
})()