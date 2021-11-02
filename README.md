# get-json
A zero-dependency module to `GET` JSON without any fuzz.

## Usage
```ts
interface IData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
const get = await getJson<IData>(url, {
    // headers as Record<string, any>
});
```