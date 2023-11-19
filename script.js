const panels = document.querySelectorAll('.panel')

// Add active class to what panel we click on 

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Call backfunction to remove active class on other panels so they don't override

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}