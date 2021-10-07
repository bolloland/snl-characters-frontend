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

    let returnButton = document.getElementById("gotoMainPage")
    returnButton.addEventListener("click", () => {
    console.log("returning to Main...")
    document.querySelector("#character-container").classList.toggle("hidden")
    document.querySelector("#actor-container").classList.toggle("hidden-member")
    document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")
    
    let charBox = document.getElementById("charBox")
    charBox.innerHTML = ""  

    let addCharacterForm = document.getElementById("add-Char")
    addCharacterForm.addEventListener("submit", console.log("addChar submit?"))

    })

    
    
})


let addCharToggleButton = document.querySelector("#addCharacter")
    addCharToggleButton.addEventListener("click", console.log("moo"))

// let charSubmitButton = document.querySelector("#newCharSubmitButton")
// charSubmitButton.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log("please god")
// })




// let shortButton = document.querySelector("#short-button")
// shortButton.addEventListener("click", () => {
// fetch 
// filter - if lastname length < 5 render it
// })


// var myString = "string test";
// var stringLength = myString.length;

// console.log(stringLength);

const cancelButt = () => {
  Member.cancelNewForm()
  document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")
}