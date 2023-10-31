import uuid from 'react-native-uuid';
import {images, names, texts} from './constants';

export interface DataItem {
  id: string;
  name: string;
  text: string;
  image: string;
}

function randomElem(arr: string[]) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generateItem(): DataItem {
  return {
    id: uuid.v4().toString(),
    name: randomElem(names),
    text: randomElem(texts),
    image: randomElem(images),
  };
}

const data = Array.from(Array(100), () => {
  return generateItem();
});

export default data;
