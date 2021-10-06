
const memberURL = "http://localhost:3000/members"

class Member {
    
    static all = []
    constructor(id, first, last, joined, left, image, characters) {
        this.id = id
        this.first = first
        this.last = last
        this.joined = joined
        this.left = left
        this.image = image
        this.characters = characters

        Member.all.push(this)
    }

    static postMember = (member) => {
        fetch(memberURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(member)
          })
          .then(resp => resp.json())
          .then(data => {
            let mem = new Member(data.id, data.first, data.last, data.joined, data.left, data.image, data.characters)
            mem.renderMember()
            
            let clearMemberForm = document.getElementById("addMember")
            clearMemberForm.reset()
             
          })
          .catch(error => {
              alert("Warning! Danger, Will Robinson!");
              document.body.innerHTML = error.message;
            })
        }

        static cancelNewForm = () => {
            console.log("cancellll??!")
            document.querySelector("#form-new-member").hidden = true
        }
        
        static newMember = (e) => {
            e.preventDefault()
            console.log("submitted new member!")
            
            let memberFirstValue = document.getElementById("memberFirst").value
            let memberLastValue = document.getElementById("memberLast").value
            let memberJoinedValue = document.getElementById("memberJoined").value
            let memberLeftValue = document.getElementById("memberLeft").value
            let memberImageValue = document.getElementById("memberImage").value

            
            let member = {first: memberFirstValue, last: memberLastValue, joined: memberJoinedValue, left: memberLeftValue, image: memberImageValue}
            document.getElementById("form-new-member").hidden = true
            Member.postMember(member)
        }

        static editMember = () => {
            let memberID = parseInt(event.target.id)
            console.log(memberID)
            document.getElementById("form-edit-member").hidden = false
            // document.getElementById("submitNewMemberButton").hidden = true
            // document.getElementById("submitUpdateButton").hidden = false
            // document.querySelector("#showNewMemberForm").hidden = true
            fetch(`${memberURL}/${memberID}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                
                document.querySelector("#editMember > h3").innerText = `Edit info for: ${data.first} ${data.last}`
                document.querySelector("#editMemberFirst").value = data.first
                document.querySelector("#editMemberLast").value = data.last
                document.querySelector("#editMemberJoined").value = data.joined
                document.querySelector("#editMemberLeft").value = data.left
                document.querySelector("#editMemberImage").value = data.image
                })
            }

        static patchMemberEdits = (e) => {
            e.preventDefault()
            console.log("about to patch")
        }

        
        static deleteMember = () => {
 
            let txt;
            let r = confirm("You sure? This will delete this Player and ALL their characters!!");
            if (r == true) {
            txt = "You pressed OK!";
            let memberID = parseInt(event.target.id)
                // console.log(event)
                fetch(`${memberURL}/${memberID}`, {
                    method: "DELETE",
                })
                .then(resp => {
                    let actorsContainer = document.getElementById("actor-container")
                    actorsContainer.innerHTML = ""
                    document.querySelector("#actor-container").classList.toggle("hidden-member")
                    Member.fetchMembers()
                })
         
            } else {
            txt = "You pressed Cancel!";
            }
        }
        
        renderMember = () => {
        // console.log(this) // <an instance
        let actorsContainer = document.getElementById("actor-container")
        let div = document.getElementById("div")
        actorsContainer.innerHTML += `<div class="memberContainer">
            <img class="memberImage" src=${this.image} /><div>
            <div>${this.first} ${this.last}</div>
            <button id=${this.id} class="show-character" onclick="Character.fetchCharacters(${this.id})" type="button">characters</button>
            <button id=${this.id} class="edit-member" onclick="Member.editMember()" type="button">edit</button>
            <button id=${this.id} onclick="Member.deleteMember()" type="button" style="color: red">&#10060;</button>
            </div></div>`

    }
    // <button id=${this.id} class="show-character" onclick="Character.showCharacters()" type="button">characters</button>


    static fetchMembers = () => {
    document.querySelector("#actor-container").classList.toggle("hidden-member")
    fetch(memberURL)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(player => {
        let mem = new Member(player.id, player.first, player.last, player.joined, player.left, player.image, player.characters)
        console.log(mem)
        mem.renderMember()
        //because we're in Class, variable has the method called on it. 
        //If we were in index.js, renderMember(mem) would be appropo
        })
      })
    }
    }






