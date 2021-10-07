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
      preventDefault()
      console.log(newChar)
    }

// ADD NEW CHARACTERS //
// let newCharForm = document.getElementById("#add-Char")

      
    static showForm = (e) => {
      console.log(e)    
      let owner = Member.all.find((owner) => owner.id == e) 
      console.log(owner)
      console.log(`owner.id is ${owner.id}` )
      document.querySelector("#actor-container").classList.toggle("hidden-member") //hide actor container
      let newCharFormCont = document.querySelector("#new-char-form-cont").classList.toggle("hidden-char-form")
    }

    

    static newCharacter = (e) => {
      console.log(e)
  
      let owner = Member.all.find((owner) => owner.id == e) 
      console.log(owner)
      console.log(`owner.id is ${owner.id}` )
      document.querySelector("#actor-container").classList.toggle("hidden-member") //hide actor container
      let newCharFormCont = document.querySelector("#new-char-form-cont").classList.toggle("hidden-char-form")
      
      // let newCharSubmitButton = document.querySelector("#newCharSubmitButton")
      newCharSubmitButton.addEventListener("click", console.log("good lord willing"))
      // let newCharForm = document.getElementById("#add-Char")
      // newCharForm.addEventListener("submit", console.log("hey man"))


      // let newCharNameValue = document.getElementById("newCharName").value
      // let newCharImageValue = document.getElementById("newCharImage").value

      // let newChar = {name: newCharNameValue, image: newCharNameImage, member_id: owner.id}
      // debugger
       
        // document.getElementById("new-char-form-cont").hidden = true
      //   newCharForm.addEventListener("submit", () => {
      //     console.log("submitting character info to Post")
      // let newCharNameValue = document.getElementById("newCharName").value
      // let newCharImageValue = document.getElementById("newCharImage").value
      // let newChar = {name: newCharNameValue, image: newCharNameImage, member_id: owner.id}
      // Character.postCharacter(newChar)
      //   })
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




