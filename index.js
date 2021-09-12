// any global variables go here
// initialization of application   reads and fetches

document.addEventListener("DOMContentLoaded", () => {
  Member.fetchMembers()

let addMemberForm = document.getElementById("addMember")
addMemberForm.addEventListener("submit", Member.newMember)


});