// your code goes here
import {Weapon} from "./Weapon";

export class Bow extends Weapon {
  private instanceDurabilityModifier: number;
  constructor(baseDamage : number,baseDurability : number,value : number , weight : number) {
    super('Bow',baseDamage,baseDurability,value,weight);
    this.instanceDurabilityModifier = super.getDurabilityModifier();
  }

  public polish() : void {
    const modifier = super.getModifier();
    const effectiveDurability  = this.curDurability + this.instanceDurabilityModifier;

    if (effectiveDurability < 1) {
      this.instanceDurabilityModifier += modifier;
    }

  }
}