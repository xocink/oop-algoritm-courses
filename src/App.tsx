import {Item} from "./hometaks/1-building-blocks-of-oop-part-1/Item";
import {Sword} from "./hometaks/1-building-blocks-of-oop-part-1/Sword";
import {ItemWeightComparator} from "./hometaks/1-building-blocks-of-oop-part-1/ItemWeightComparator";
import {Inventory} from "./hometaks/1-building-blocks-of-oop-part-1/Inventory";
import {Pizza} from "./hometaks/1-building-blocks-of-oop-part-1/Pizza";

export const App  = () => {

  const inventory: Inventory = new Inventory();

// Create a set of items
  const a: Item = new Sword(30.4219, 0.7893, 300, 2.032);
  const b: Item = new Sword(40, 0.7893, 200, 2);
  const c: Item = new Sword(40, 1, 100, 3);
  const pizza: Item = new Pizza(3, false);

// Add the items to the inventory
  inventory.addItem(a);
  inventory.addItem(b);
  inventory.addItem(c);
  inventory.addItem(pizza);

// Display the inventory
  console.log(inventory.toString());

// Sort by natural order
  inventory.sort();
//
// Display the new inventory
  console.log(inventory.toString());

// Sort by weight
  inventory.sort(new ItemWeightComparator());

// Display the inventory again
  console.log(inventory.toString());

// Use the sword
  console.log(a.use());
  console.log(a.use());


  return (
    <h1>You can look results from usage.ts in console </h1>
  )
}