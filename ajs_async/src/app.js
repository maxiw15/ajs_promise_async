import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 500);
    });
  }
}

// (async () => {
//   console.log(JSON.parse(await GameSavingLoader.load()));
// })();
