
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

    static showCharacters = () => {
        console.log("showing characters")
        let charBlock = document.getElementById("character-container")
        let actorsContainer = document.getElementById("actor-container")
        charBlock.hidden = false
        actorsContainer.hidden = true
    }









}




