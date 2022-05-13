// console.log('hi there');

// const logSomething = () => {
//   console.log('something')
// };

import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaayb');
charactersCollection.sort();
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
console.log(charactersCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);

linkedlist.sort();
// const sorter3 = new Sorter(linkedlist);
// sorter.sort();
linkedlist.print()