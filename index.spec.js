//import { f } from ".";
// vscode infers module import style:
//  https://code.visualstudio.com/docs/languages/javascript
const { f } = require('.');
const { g } = require('./index2');

describe('Name of the group', () => {
    it('should ', () => {
        expect(f()).toBe(40);
        expect(g()).toBe(42);
    });
});