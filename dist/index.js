//Solution
class Club {
    attack() {
        console.log("Pulvrerize my opponent!");
    }
}
class Sword {
    attack() {
        console.log("Slice my Way to Victory!");
    }
}
class BowAndArrow {
    attack() {
        console.log("The Sound of Silence");
    }
}
class StarDust {
    attack() {
        console.log("A sprinkle of fairy dust to confuse opponents");
    }
}
class Shield {
    defend() {
        console.log("Defends against direct attacks but weak against arrows");
    }
}
class Armor {
    defend() {
        console.log("Covers entire body but slows speed");
    }
}
class Tunic {
    defend() {
        console.log("Allows warrior to hide but weak against direct attacks");
    }
}
class FairyWings {
    defend() {
        console.log("Wings that allow warrior to fly a short distance to escape a direct hit");
    }
}
class Collection {
    collectgold() {
        console.log("Picks up all gold within collection radius");
    }
}
class PixieDust {
    heal() {
        console.log("A dust that heals allies in battle");
    }
}
//abstract class Ogre implements Attackable, Defendable, CollectGoldable{  //Should we create 4 individual classes or 1
//    protected swimAbility$: Swimmable                            //Warrior class that gets extended by each character
//    protected quackAbility$: Quackable
//    protected flyAbility$: Flyable
//}    
class Warrior {
    set attackAbility(at) {
        this.attackAbility$ = at;
    }
    set defendAbility(def) {
        this.defendAbility$ = def;
    }
    set collectAbility(cg) {
        this.collectAbility$ = cg;
    }
    set healAbility(cg) {
        this.healAbility$ = cg;
    }
    attack() {
        this.attackAbility$.attack();
    }
    defend() {
        this.defendAbility$.defend();
    }
    collectgold() {
        this.collectAbility$.collectgold();
    }
    heal() {
        this.healAbility$.heal();
    }
}
class Ogre extends Warrior {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new Club();
        this.defendAbility$ = new Shield();
        this.collectAbility$ = new Collection();
    }
}
class Peons extends Warrior {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new Club();
        this.defendAbility$ = new Shield();
        this.collectAbility$ = new Collection();
    }
}
class Knights extends Warrior {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new Sword();
        this.defendAbility$ = new Armor();
        this.collectAbility$ = new Collection();
    }
}
class Archer extends Warrior {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new BowAndArrow();
        this.defendAbility$ = new Tunic();
        this.collectAbility$ = new Collection();
    }
}
class Fairy extends Warrior {
    constructor() {
        super(...arguments);
        this.attackAbility$ = new StarDust();
        this.defendAbility$ = new FairyWings();
        this.collectAbility$ = new Collection();
        //healAbility$ = new Collection()
    }
}
let Jason = new Archer;
Jason.defend();
let Shrek = new Ogre;
Shrek.attack();
Shrek.attackAbility = new Sword();
Shrek.attack();
