// any global variables go here
// initialization of application   reads and fetches

document.addEventListener("DOMContentLoaded", () => {
  Member.fetchMembers()

let addMemberForm = document.getElementById("addMember")
addMemberForm.addEventListener("submit", Member.newMember)

let addMemeberButton = document.getElementById("showNewMemberForm")
addMemeberButton.addEventListener("click", () => {
// console.log("clicked!")
document.getElementById("form-new-member").hidden = false
}
)})