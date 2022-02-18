// your code goes here
import {Consumable} from "./Consumable";

const SLICE_WEIGHT = 200;

export class Pizza extends Consumable {
  protected numberOfSlice: number;
  protected sliceEaten: number;

  constructor(numberOfSlice: number, spoiled: boolean) {
    super('Pizza', 1, numberOfSlice * SLICE_WEIGHT, spoiled);
    this.numberOfSlice = numberOfSlice
    this.sliceEaten = 0;
  }

  public eat(): string {
    if (!this.isConsumed()) {
      if (this.sliceEaten < this.numberOfSlice) {
        this.sliceEaten += 1
      }
      if (this.sliceEaten >= this.numberOfSlice) {
        super.setConsumed(true);
      }
      return `You eat the ${this.name}`
    } else {
      return super.use()
    }
  }

}

// if (!this.isConsumed() && !this.isSpoiled()){
//   if (this.sliceEaten < this.numberOfSlice) {
//     this.sliceEaten += 1
//     return `You eat the ${this.name}`
//   }
//   if (this.sliceEaten >= this.numberOfSlice) {
//     super.setConsumed(true);
//   }
// }
// return super.use();