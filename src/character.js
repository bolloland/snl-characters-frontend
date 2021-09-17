

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
    
    
    
    renderCharacters = () => {
        console.log(this) 
        // let chars = this["characters"]
        // console.log(chars)
        // document.querySelector("#actor-container").classList.toggle("hidden-member")
        // document.querySelector("#character-container").classList.toggle("hidden")
        let charBox = document.getElementById("charBox")
        let div = document.getElementById("div")
        charBox.innerHTML += `<div class="char-image">
            <img class="charImage" src=${this.image} /><div>
            <div>${this.name}</div>
            <button id=${this.id} class="show-character" onclick="Character.showCharacters()" type="button">characters</button>
            <button id=${this.id} class="edit-member" onclick="Member.editMember()" type="button">edit</button>
            <button id=${this.id} onclick="Member.deleteMember()" type="button" style="color: red">&#10060;</button>
            </div></div>`
    }

    static fetchCharacters = (e) => {
        let charID = parseInt(e)
        // console.log(charID)
        fetch(`${memberURL}/${charID}`)
        .then(resp => resp.json())
        .then(json => 
        // { let memb = json
        //     console.log(memb)
        // })
            {
            // console.log(json)
            let chars = json["characters"]
            chars.forEach(c => {
                let char = new Character(c.id, c.name, c.debut, c.review, c.image, c.script_one, c.script_two, c.script_three, c.likes, c.member_id)
                // console.log(char)
                char.renderCharacters()
            })
        })
    }
        




}




