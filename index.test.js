const { strict: assert } = require("assert");
const { getJson } = require('./build/index.js');

/**
 * @typedef IData
 * @prop {number} userId
 * @prop {number} id
 * @prop {string} title
 * @prop {boolean} completed
 */

/**
 * @returns {IData}
 */
async function query() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const get = await getJson(url, {
        // headers as Record<string, any>
    });
    assert.ok(Object.keys(get).length);

    return get;
}

(async () => {
    const get = await query();
})();
