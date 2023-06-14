const faqs = document.querySelectorAll(".faq")



faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("open")


        const icon = faq.querySelector(".faq i")
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-times"
        } else {
            icon.className = "fa-solid fa-plus"
        }

    })
})

