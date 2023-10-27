const shareBtn = document.querySelector('#share-btn')
const popUp = document.querySelector('#share-box')
const popUpmobile = document.querySelector('#share-box-mobile')

shareBtn.addEventListener('click',()=>{
    popUp.classList.toggle('fade-in')
    popUpmobile.classList.toggle('fade-in')
})