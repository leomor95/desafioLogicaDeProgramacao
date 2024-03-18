class hero{
    constructor(name,age,type){
        this.heroName = name
        this.heroAge = age
        this.heroType = type
    }
    attackStyle(){
        let attackStyle = ""
        switch(this.heroType){
            case "mago":
            attackStyle = "magia"
            return attackStyle
            break
            case "guerreiro":
            attackStyle = "espada"
            return attackStyle
            break
            case "monge":
            attackStyle = "artes marciais"
            return attackStyle
            break
            case "ninja":
            attackStyle = "shuriken"
            return attackStyle
        }
    }
    attack(){
        console.log(`O ${this.heroType} atacou usando ${this.attackStyle()}`)
    }
}
let newHero = new hero("Heroi",28,"ninja")
newHero.attack()
