import {Comparable} from './Comparable';
let counter = 0
let id = 0;

export abstract class Item implements Comparable<Item> {
  protected name: string;
  protected value: number;
  public weight: number;
  private readonly id: number;

  protected constructor(name: string, value: number, weight: number) {
    this.id = id++;
    this.name = name;
    this.value = value;
    this.weight = weight
    counter++
  }


  static get numberOfItems() {
    return counter;
  }

  public compareTo(other: Item): number {
    return this.value > other.value ? 1 : -1
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
  }

  public reset(): void {
    counter = 0;
  }

  public getId() : number {
    return this.id;
  }

  public getValue() : number {
    return this.value;
  }

  public getWeight() : number {
    return this.weight;
  }

  public set setName(newName : string) {
    this.name = newName;
  }

  public use() :void {
    return
  }

  public eat() :void {
    return
  }

  public polish():void {
    return
  }

}
