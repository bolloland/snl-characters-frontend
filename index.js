// any global variables go here
// initialization of application   reads and fetches

document.addEventListener("DOMContentLoaded", () => {
  Member.fetchMembers()

let addMemberForm = document.getElementById("addMember")
addMemberForm.addEventListener("submit", Member.newMember)

let addMemberButton = document.getElementById("showNewMemberForm")
addMemberButton.addEventListener("click", () => {
document.getElementById("form-new-member").hidden = false

let cancelButton = document.querySelector("#cancelButton")
cancelButton.addEventListener("click", () => {
    document.querySelector("#form-new-member").hidden = true
    document.getElementById("submitNewMemberButton").hidden = false
    document.querySelector("#showNewMemberForm").hidden = false
 
})
}
)})