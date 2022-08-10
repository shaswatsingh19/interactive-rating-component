const list = document.querySelectorAll('.list')
const submitBtn  = document.querySelector('.submit')
const mainSection = document.querySelector('.main')
const thankYouSection = document.querySelector('.thank-you')
let feedbackResult = document.querySelector('#feedback-result')
let feedbackValue = 0



list.forEach((el) => {
    el.addEventListener('click',(e) => {
        console.log(e.target.textContent)
        feedbackValue = e.target.textContent
        for(let child of el.children){
            child.classList.remove('list-item-active')
        }
        e.target.classList.toggle('list-item-active')
    })
    
})


submitBtn.addEventListener('click',() => {
    if (feedbackValue != 0){
        mainSection.hidden = true
        thankYouSection.classList.add('thank-you-flex')
        thankYouSection.classList.remove('thank-you-hidden')
        feedbackResult.textContent = `You selected ${feedbackValue} out of 5`
    }else{
        alert('Please provide Feedback first')
    }
})