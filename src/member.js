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
        
        static newMember = (e) => {
            e.preventDefault()
            console.log("aroo?")
            
            let memberFirstValue = document.getElementById("memberFirst").value
            let memberLastValue = document.getElementById("memberLast").value
            let memberJoinedValue = document.getElementById("memberJoined").value
            let memberLeftValue = document.getElementById("memberLeft").value
            let memberImageValue = document.getElementById("memberImage").value
            
            let member = {first: memberFirstValue, last: memberLastValue, joined: memberJoinedValue, left: memberLeftValue, image: memberImageValue}
            
            Member.postMember(member)
            
        }
        
        static deleteMember = () => {
            debugger
            let txt;
            let r = confirm("You sure? This will delete this Player and ALL their characters!!");
            if (r == true) {
            txt = "You pressed OK!";
            } else {
                let memberID = parseInt(event.target.id)
                 console.log(event)
                 fetch(`${memberURL}/${memberID}`, {
                     method: "DELETE",
                 })
                 .then(resp => Member.fetchMembers())
             }
            txt = "You pressed Cancel!";
            }
        
        renderMember = () => {
        console.log(this) // <an instance
        let actorsContainer = document.getElementById("actor-container")
        let div = document.getElementById("div")
        actorsContainer.innerHTML += `<div><img class="memberImage" src=${this.image} /><div>
        <button id=${this.id} type="button">edit</button>
        <button id=${this.id} onclick="Member.deleteMember()" type="button" style="color: red">&#x2715</button>
        </div><div>${this.first} ${this.last}</div></div>`

    }


    static fetchMembers = () => {
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






