// your code goes here
import {Item} from "./Item";

export abstract class Weapon extends Item {
  protected baseDamage: number;
  protected baseDurability: number;
  protected curDurability: number;
  protected curDamage: number;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability >= 1 ? 0.95 : baseDurability;
    this.curDamage = this.baseDamage + Weapon.damageModifier;
    this.curDurability = this.baseDurability + Weapon.durabilityModifier;
  }

  static damageModifier = 0.05;
  static durabilityModifier = 0.05;
  private static MODIFIER_CHANGE_RATE = 0.05;

  protected getDamageModifier(): number {
    return Weapon.damageModifier;
  }

  protected getDurabilityModifier(): number {
    return Weapon.durabilityModifier;
  }

  protected getDamage(): number {
    return this.curDamage;
  }

  protected getDurability(): number {
    return this.curDurability;
  }

  public toString(): string {
    return `${super.toString()}, Damage: ${(this.getDamage()).toFixed(2)}, Durability: ${(this.getDurability()).toFixed(2)}`;
  }

  public use(): string {
    // calculating and changing durability
    if (this.curDurability < 0) {
      return `You can\'t use the ${this.name}, it is broken.`;
    } else {

      this.curDurability = this.curDurability - Weapon.MODIFIER_CHANGE_RATE;

      if (this.curDurability > 0) {
        return `You use the ${this.name}, dealing ${(this.getDamage()).toFixed(2)} points of damage.`;

      } else {
        return `You use the ${this.name}, dealing ${(this.getDamage()).toFixed(2)} points of damage. The ${this.name} breaks.`;
      }
    }
  }
  public polish() : void {
    return
  }

  protected getModifier() : number {
    return Weapon.MODIFIER_CHANGE_RATE
  }
}