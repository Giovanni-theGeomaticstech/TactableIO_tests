# TactableIO_tests
Test of current knowledge in technologies


## File Structure

* Written in: `JavaScript (ES5-6) and TypeScript` 

## Node Modules Installed
* `"axios": "^0.21.1",`
* `"babel-jest": "^27.0.2"`
* `"events": "^3.3.0"`
* `"inversify": "^5.1.1"`
* `"lodash": "^4.17.21"`
* `"reflect-metadata": "^0.1.13"`
* `"typescript": "^4.3.2"`

### Interface File
* `interface_tactable.js`

### Classes that Implement Interface (ApiManager, TodoClient)
* `tactable_class.ts`

### Creating Injection Container Config
* `inversify_tactable.config.ts`

### API Container
* `tactable_api.ts`

### Tests
* `jest.config.js` (default configs)
* `test_helper.ts` (Helper functions for tests)
* `/tests`
    * `tactable_http.test.ts` (Mocked Tests for Client Rest Calls)
    * `tactble_integration.test.ts` (Injection test)
