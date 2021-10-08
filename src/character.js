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
    
    static postCharacter = (newChar) => {
     
            //fetch method to post new character info
      console.log(newChar)
      return fetch(charURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(newChar)
          })
          .then(resp => resp.json())
          .then(data => {
            let newChara = new Character(data.id, data.name, data.debut, data.review, data.image, data.script_one, data.script_two, data.script_three, data.likes, data.member_id)
            newChara.renderCharacters()
            
          })
          
          // let clearMemberForm = document.getElementById("addMember")
          // clearMemberForm.reset()
    }

// ADD NEW CHARACTERS //
    static newCharacter = (e) => {
      console.log(e)
  
      let owner = Member.all.find((owner) => owner.id == e) 
      let ownerId = owner.id
      // console.log(owner)
      console.log(`owner.id is ${owner.id}` )
      document.querySelector("#actor-container").classList.toggle("hidden-member") //hide actor container
      let newCharFormCont = document.querySelector("#new-char-form-cont").classList.toggle("hidden-char-form")
      
      let newCharSubmitButton = document.getElementById("add-Char")
      newCharSubmitButton.addEventListener("submit", (e) => {
        e.preventDefault()
        // let newCharName = e.target.name.value
        // let newCharImage = e.target.image.value
        // let charLikes = 0
        let newChar = {name: e.target.name.value, image: e.target.image.value, member_id: ownerId, likes: 0} 
        this.postCharacter(newChar)
        e.target.reset() 

        console.log(ownerId)
        // this.postCharacters
        document.querySelector("#actor-container").classList.toggle("hidden-member")
        this.fetchCharacters(ownerId)
      })
    
    }

// LIKE BUTTON //
    static addLike = (charID) => {
    let likedChar = Character.all.find((char) => char.id == charID);
    likedChar.likes += 1;
    likedChar = {
      likes: likedChar.likes,
    };

    let likeCounters = document.querySelectorAll(".like-button");
    let likeCounter
    likeCounters.forEach((ele) => {
      if (parseInt(ele.id) == charID) {
        likeCounter = ele;
      }
    });
    // console.log(likeCounter)
    fetch(`${charURL}/${charID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedChar),
    })
    .then((resp) => {
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
        //
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




