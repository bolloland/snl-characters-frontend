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

    renderMember = () => {
        console.log(this) // <an instance
        let actorsContainer = document.getElementById("actor-container")
        let div = document.getElementById("div")
        actorsContainer.innerHTML += `<div><img class="memberImage" src=${this.image} /><div>test</div></div>`

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






