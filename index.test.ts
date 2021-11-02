import { strict as assert } from 'assert';
import { getJson } from './build/index.js';

(async () => {
    interface IData {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const get = await getJson<IData>(url, {
        // headers as Record<string, any>
    });
    assert.ok(Object.keys(get).length);
})();
