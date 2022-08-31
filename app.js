const buttonRating1 = document.getElementById('1')
const buttonRating2 = document.getElementById('2')
const buttonRating3 = document.getElementById('3')
const buttonRating4 = document.getElementById('4')
const buttonRating5 = document.getElementById('5')
let value = 0;


const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', () => {
    if (value === 0) {
        alert("Pleas select a rate number")
    } else {
        document.querySelector('.submited-rating').classList.remove('hidden')
        document.querySelector('.main-content').classList.add('hidden')
        document.querySelector('.rating-value').innerHTML = `You selected ${value} out of 5`
    }
})


function rating() {

    buttonRating1.addEventListener('click', () => {
        value = buttonRating1.value;
    })

    buttonRating2.addEventListener('click', () => {
        value = buttonRating2.value;
    })


    buttonRating3.addEventListener('click', () => {
        value = buttonRating3.value;
    })


    buttonRating4.addEventListener('click', () => {
        value = buttonRating4.value;
        console.log(value);
    })


    buttonRating5.addEventListener('click', () => {
        value = buttonRating5.value;
    })
}
rating()