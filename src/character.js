

class Character {
    
    static all = []
    constructor(id, name, debut, review, image, script_one, script_two, script_three, likes, member_id) {
        this.id = id
        this.name = name
        this.debut = debut
        this.review = review
        this.image = image
        this.script_one = script_one
        this.script_two = script_two
        this.script_three = script_three
        this.likes = likes
        this.member_id = member_id
        
        Character.all.push(this)
    }
    
    
    // document.querySelector("#actor-container").classList.toggle("hidden-member")
    // document.querySelector("#character-container").classList.toggle("hidden")
 
    // renderMember = () => {
    //     // console.log(this) // <an instance
    //     let actorsContainer = document.getElementById("actor-container")
    //     let div = document.getElementById("div")
    //     actorsContainer.innerHTML += `<div class="memberContainer">
    //         <img class="memberImage" src=${this.image} /><div>
    //         <div>${this.first} ${this.last}</div>
    //         <button id=${this.id} class="show-character" onclick="Character.showCharacters()" type="button">characters</button>
    //         <button id=${this.id} class="edit-member" onclick="Member.editMember()" type="button">edit</button>
    //         <button id=${this.id} onclick="Member.deleteMember()" type="button" style="color: red">&#10060;</button>
    //         </div></div>`
    // }

    static fetchCharacters = (e) => {
        let charID = parseInt(e)
        console.log(charID)
        fetch(`${memberURL}/${charID}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            let chars = json["characters"]
            chars.forEach(c => {
                let char = new Character(c.id, c.name, c.debut, c.review, c.image, c.script_one, c.script_two, c.script_three, c.likes, c.member_id)
                console.log(char)
                char.renderCharacters()
            })
        })

        
     
            // {
        //     json.forEach(player => {
        //     let mem = new Member(player.id, player.first, player.last, player.joined, player.left, player.image, player.characters)
        //     console.log(mem)
        //     mem.renderMember()
        //     //because we're in Class, variable has the method called on it. 
        //     //If we were in index.js, renderMember(mem) would be appropo
        //     })
        //   })
        }






}




