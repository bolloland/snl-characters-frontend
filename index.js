// any global variables go here
// initialization of application   reads and fetches

document.addEventListener("DOMContentLoaded", () => {
  Member.fetchMembers()

let addMemberForm = document.getElementById("addMember")
addMemberForm.addEventListener("submit", Member.newMember)

let addMemberButton = document.getElementById("showNewMemberForm")
addMemberButton.addEventListener("click", () => {
// console.log("clicked!")
document.getElementById("form-new-member").hidden = false
}
)})