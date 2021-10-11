// // index.js
// const shortenButton = document.querySelector("#show-short")
//     shortenButton.addEventListener("click", Member.short)

// //index.js
// const cancelCharButt = () => {
//   let actorsContainer = document.getElementById("actor-container")
//         actorsContainer.innerHTML = ""
//   Member.fetchMembers()
//   document.querySelector("#new-char-form-cont").classList.toggle("hidden-char-form") 
// }

//member.js
// static short = () => {
//         let actorsContainer = document.getElementById("actor-container")
//         actorsContainer.innerHTML = ""
//      fetch(memberURL)
//     .then(resp => resp.json())
//     .then(json => {
//         json.forEach(player => {
//         let mem = new Member(player.id, player.first, player.last, player.joined, player.left, player.image, player.characters)
//         console.log(mem)
//             if (mem.last.length <= 5) {
//                 mem.renderMember()
//             }
//     })
//     })}

// add-a-character button
// let addCharButton = document.querySelector("#addCharacter")
//           addCharButton.addEventListener("click", () => {
//           console.log("show that char button!")
//           debugger
//           Character.newCharacter(charID)
//       })

