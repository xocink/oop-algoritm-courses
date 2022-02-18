// your code goes here
import {Weapon} from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage : number,baseDurability : number,value : number , weight : number) {
    super('Sword',baseDamage,baseDurability,value,weight);
  }

  public polish() : void {
    const modifier = super.getModifier();
    if ((this.baseDamage * 1.25) > this.curDamage) {
      this.curDamage *=1+modifier;
    } else {
      this.curDamage = this.baseDamage * 1.25;
    }
  }
}