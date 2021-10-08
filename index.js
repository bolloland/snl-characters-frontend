// any global variables go here
// initialization of application reads and fetches

document.addEventListener("DOMContentLoaded", () => {
  
    Member.fetchMembers()

    document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")
    let addMemberForm = document.getElementById("addMember")
    addMemberForm.addEventListener("submit", Member.newMember)

    let addMemberButton = document.getElementById("showNewMemberForm")
    addMemberButton.addEventListener("click", () => {
    document.getElementById("form-new-member").hidden = false
    document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")
    })

    let submitEdits = document.getElementById("form-edit-member")
    submitEdits.addEventListener("submit", Member.patchMemberEdits)

    // let addCharButton = document.querySelector("#addCharacter")
    //   addCharButton.addEventListener("click", () => {
    //     console.log("show that char button!")
    //     Character.newCharacter()
       
    //   })


    let returnButton = document.querySelector("#gotoMainPage")
    returnButton.addEventListener("click", () => {
    console.log("returning to Main...")
    document.querySelector("#character-container").classList.toggle("hidden")
    document.querySelector("#actor-container").classList.toggle("hidden-member")
    document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")

    let charBox = document.getElementById("charBox")
    charBox.innerHTML = ""  

    })

    
    
})


const cancelButt = () => {
  Member.cancelNewForm()
  document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")
}