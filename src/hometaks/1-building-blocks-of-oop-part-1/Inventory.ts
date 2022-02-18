import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
  protected items : Item[];
  constructor() {
    this.items  = []
  }
  public addItem (item : Item) : void {
    this.items.push(item);
  }

  public sort() : void;
  public sort(comparator : ItemComparator) : void;

  public sort(comparator? : ItemComparator) : void {
    if (comparator) {
      this.items.sort(comparator.compare)
    } else {
      this.items.sort()
    }
  }

  public toString() : string {
    return this.items.map((item) => item.toString()).join('\n')
  }
}
