// your code goes here
import {Weapon} from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage : number,baseDurability : number,value : number , weight : number) {
    super('Bow',baseDamage,baseDurability,value,weight);
  }

  public polish() : void {
    const modifier = super.getModifier();
    if ((this.curDurability) < 1) {
      this.curDurability += modifier;
    } else {
      this.curDurability = 1;
    }
  }
}