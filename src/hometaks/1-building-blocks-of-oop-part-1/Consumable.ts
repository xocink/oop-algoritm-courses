// your code goes here
import {Item} from "./Item";

export abstract class Consumable extends Item {
  private spoiled: boolean;
  protected consumed: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  public eat(): string {
    return `You eat the ${this.name}`
  }

  public use() : string {
    if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`
    }else  {
        return `You eat the ${this.name}\nYou feel sick`
    }
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  public toString(): string {
    return super.toString();
  }

  protected setConsumed (value : boolean) : void {
    this.consumed = value;
  }
}