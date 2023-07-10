const weddingButton = document.querySelector('.blog-wedding-button')
const allButton = document.querySelector('.blog-all-button')
const familyButton = document.querySelector('.blog-family-button')
const engagementButton = document.querySelector('.blog-engagement-button')

const allWeddings = document.querySelectorAll('.wedding-post')
const allFamilies = document.querySelectorAll('.family-post')
const allEngagements = document.querySelectorAll('.engagement-post')
// blog filters
weddingButton.addEventListener('click', weddingClick)
familyButton.addEventListener('click', familyClick)
engagementButton.addEventListener('click', engagementClick)
allButton.addEventListener('click', showAllPosts)

function weddingClick() {
  weddingButton.classList.add('highlight')
  allButton.classList.remove('highlight')
  familyButton.classList.remove('highlight')
  engagementButton.classList.remove('highlight')
  for (var i = 0; i < allFamilies.length; i += 1) {
    allFamilies[i].classList.add('hide-blog-post')
  }
  for (var i = 0; i < allEngagements.length; i += 1) {
    allEngagements[i].classList.add('hide-blog-post')
  }
  for (var i = 0; i < allWeddings.length; i += 1) {
    allWeddings[i].classList.remove('hide-blog-post')
  }
}

function engagementClick() {
  engagementButton.classList.add('highlight')
  allButton.classList.remove('highlight')
  familyButton.classList.remove('highlight')
  weddingButton.classList.remove('highlight')
  for (var i = 0; i < allFamilies.length; i += 1) {
    allFamilies[i].classList.add('hide-blog-post')
  }
  for (var i = 0; i < allWeddings.length; i += 1) {
    allWeddings[i].classList.add('hide-blog-post')
  }
  for (var i = 0; i < allEngagements.length; i += 1) {
    allEngagements[i].classList.remove('hide-blog-post')
  }
}

function familyClick() {
  familyButton.classList.add('highlight')
  allButton.classList.remove('highlight')
  weddingButton.classList.remove('highlight')
  engagementButton.classList.remove('highlight')
  for (var i = 0; i < allWeddings.length; i += 1) {
    allWeddings[i].classList.add('hide-blog-post')
  }
  for (var i = 0; i < allEngagements.length; i += 1) {
    allEngagements[i].classList.add('hide-blog-post')
  }
  for (var i = 0; i < allFamilies.length; i += 1) {
    allFamilies[i].classList.remove('hide-blog-post')
  }
}

function showAllPosts() {
  allButton.classList.add('highlight')
  weddingButton.classList.remove('highlight')
  familyButton.classList.remove('highlight')
  engagementButton.classList.remove('highlight')
  for (var i = 0; i < allWeddings.length; i += 1) {
    allWeddings[i].classList.remove('hide-blog-post')
  }
  for (var i = 0; i < allFamilies.length; i += 1) {
    allFamilies[i].classList.remove('hide-blog-post')
  }
  for (var i = 0; i < allEngagements.length; i += 1) {
    allEngagements[i].classList.remove('hide-blog-post')
  }
}
