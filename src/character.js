let charURL = "http://localhost:3000/characters"

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
    
    // static newCharacter = (e) => {
    //     e.preventDefault()
    //     console.log("submitted new member!")
        
    //     let newCharNameValue = document.getElementById("newCharName").value
    //     let newCharImageValue = document.getElementById("newCharImage").value

    //     // if (newCharFirstValue.length == 0 || newCharLastValue.length == 0 || 
    //     //     newCharJoinedValue.length == 0 || newCharLeftValue.length == 0 || 
    //     //     newCharImageValue.length == 0) {
    //     //         alert("Please fill in all fields")
    //     //         return false
    //     //     }
    //     //     return true
        
    //     let newChar = {first: memberFirstValue, last: memberLastValue, joined: memberJoinedValue, left: memberLeftValue, image: memberImageValue}
    //     document.getElementById("form-new-member").hidden = true
    //     Member.postMember(member)
    // }

    static addLike = (charID) => {
    let likedChar = Character.all.find((char) => char.id == charID);

    likedChar.likes += 1;

    likedChar = {
      likes: likedChar.likes,
    };

    let likeCounters = document.querySelectorAll(".like-button");
    let likeCounter;

    likeCounters.forEach((ele) => {
      if (parseInt(ele.id) == charID) {
        likeCounter = ele;
      }
    });

    fetch(`${charURL}/${charID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedChar),
    }).then((resp) => {
      resp.json()
      likeCounter.innerHTML = `${likedChar.likes} Likes`
    })
  };
    
    renderCharacters = (creator) => {
        console.log(this) 
       
        // let chars = this["characters"]
        // console.log(chars)
        // document.querySelector("#actor-container").innerHTML= ""
        // document.querySelector("#character-container").classList.toggle("hidden")
        let charBox = document.getElementById("charBox")
        let div = document.getElementById("div")
        charBox.innerHTML += `<div class="char-image">
        <div>
        <h2>
        ${this.name}
        <button id=${this.id} class="like-button" onclick="Character.addLike(${this.id})" type="button"> ${this.likes} Likes </button>
        </h2>
        <img class="charImage" src=${this.image} /><div>
        </div>`
    }
    
    static fetchCharacters = (e) => {
        document.querySelector("#actor-container").classList.toggle("hidden-member")
        document.querySelector("#character-container").classList.toggle("hidden")
        document.querySelector("#newMemberFormButton").classList.toggle("new-member-button")
        let creator = Member.all.find(mem => mem.id == e)
        // getMemberName(creator)
        let charID = parseInt(e)
        // console.log(charID)
        fetch(`${memberURL}/${charID}`)
        .then(resp => resp.json())
        .then(json => {
            let chars = json["characters"]
            chars.forEach(c => {
                let char = new Character(c.id, c.name, c.debut, c.review, c.image, c.script_one, c.script_two, c.script_three, c.likes, c.member_id)
                // console.log(char)
                char.renderCharacters(creator)
            })
        })
    }
        




}




