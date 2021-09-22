// any global variables go here
// initialization of application   reads and fetches

document.addEventListener("DOMContentLoaded", () => {
  
Member.fetchMembers()

let addMemberForm = document.getElementById("addMember")
addMemberForm.addEventListener("submit", Member.newMember)

let addMemberButton = document.getElementById("showNewMemberForm")
addMemberButton.addEventListener("click", () => {
document.getElementById("form-new-member").hidden = false
})

let submitEdits = document.getElementById("form-edit-member")
submitEdits.addEventListener("submit", Member.patchMemberEdits)

let returnButton = document.getElementById("gotoMainPage")
returnButton.addEventListener("click", () => {
console.log("yo")
document.querySelector("#character-container").classList.toggle("hidden")
document.querySelector("#actor-container").classList.toggle("hidden-member")
})
})
