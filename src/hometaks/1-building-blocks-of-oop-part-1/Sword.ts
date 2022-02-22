// your code goes here
import {Weapon} from "./Weapon";

export class Sword extends Weapon {
  private instanceDamageModifier: number;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('Sword', baseDamage, baseDurability, value, weight);
    this.instanceDamageModifier = super.getDamageModifier()
  }

  public polish(): void {
    const modifier = super.getModifier();
    const damageAfterModify = this.curDamage + this.instanceDamageModifier;
    if ((this.baseDamage * 1.25) > damageAfterModify) {
      this.instanceDamageModifier += modifier;
    }
  }
}