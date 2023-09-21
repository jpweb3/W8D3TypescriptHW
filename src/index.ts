//Solution

interface Attackable{
    attack():void
}
interface Defendable{
    defend():void
}
interface CollectGoldable{
    collectgold():void
}
interface Healable{
    heal():void
}



class Club implements Attackable{
    attack(){
        console.log("Pulvrerize my opponent!")
    }
}
class Sword implements Attackable{
    attack(){
        console.log("Slice my Way to Victory!")
    }
}
class BowAndArrow implements Attackable{
    attack(){
        console.log("The Sound of Silence")
    }
}
class StarDust implements Attackable{
    attack(){
        console.log("A sprinkle of fairy dust to confuse opponents")
    }
}

class Shield implements Defendable{
    defend(){
        console.log("Defends against direct attacks but weak against arrows")
    }
}
class Armor implements Defendable{
    defend(){
        console.log("Covers entire body but slows speed")
    }
}
class Tunic implements Defendable{
    defend(){
        console.log("Allows warrior to hide but weak against direct attacks")
    }
}
class FairyWings implements Defendable{
    defend(){
        console.log("Wings that allow warrior to fly a short distance to escape a direct hit")
    }
}
class Collection implements CollectGoldable {
    collectgold(){
        console.log("Picks up all gold within collection radius")
    }
}

class PixieDust implements Healable{
    heal(){
        console.log("A dust that heals allies in battle")
    }
}

//abstract class Ogre implements Attackable, Defendable, CollectGoldable{  //Should we create 4 individual classes or 1
//    protected swimAbility$: Swimmable                            //Warrior class that gets extended by each character
//    protected quackAbility$: Quackable
//    protected flyAbility$: Flyable
//}    
abstract class Warrior implements Attackable, Defendable, CollectGoldable, Healable{
    protected attackAbility$: Attackable
    protected defendAbility$: Defendable
    protected collectAbility$: CollectGoldable
    protected healAbility$: Healable
    
    set attackAbility(at:Attackable){
        this.attackAbility$=at
    }
    
    set defendAbility(def:Defendable){
        this.defendAbility$=def
    }
    
    set collectAbility(cg:CollectGoldable){
        this.collectAbility$=cg
    }

    set healAbility(cg:Healable){
        this.healAbility$=cg
    }
   
    attack():void{
        this.attackAbility$.attack()
    }
    
    defend():void{
        this.defendAbility$.defend()
    }
    
    collectgold():void{
        this.collectAbility$.collectgold()
    }

    heal():void{
        this.healAbility$.heal()
    }
}

class Ogre extends Warrior {
    attackAbility$ = new Club()
    defendAbility$ = new Shield()
    collectAbility$ = new Collection()
}

class Peons extends Warrior {
    attackAbility$ = new Club()
    defendAbility$ = new Shield()
    collectAbility$ = new Collection()
}

class Knights extends Warrior {
    attackAbility$ = new Sword()
    defendAbility$ = new Armor()
    collectAbility$ = new Collection()
}

class Archer extends Warrior {
    attackAbility$ = new BowAndArrow()
    defendAbility$ = new Tunic()
    collectAbility$ = new Collection()
}

class Fairy extends Warrior {
    attackAbility$ = new StarDust()
    defendAbility$ = new FairyWings()
    collectAbility$ = new Collection()
    healAbility$ = new PixieDust()
}

let Jason = new Archer
Jason.defend()

let Shrek = new Ogre
Shrek.attack()
Shrek.attackAbility = new Sword()
Shrek.attack()