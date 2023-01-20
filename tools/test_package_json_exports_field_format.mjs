import * as assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import test from 'node:test';

function parseJSON(text) {
    try {
        const o = JSON.parse(text);
        return o;
    }
    catch (_e) {
        return null;
    }
}

async function loadJSON(cwd, dir) {
    const relativePath = path.join(dir, './package.json');
    const absPath = path.resolve(cwd, relativePath);
    const content = await fs.readFile(absPath, {
        encoding: 'utf8',
        flag: 'r',
    });
    const parsed = parseJSON(content);
    assert.notStrictEqual(parsed, null, `could not load ${absPath}`);
    return parsed;
}

function getExportsField(obj) {
    const exports = obj.exports;
    assert.strictEqual(typeof exports, 'object', 'exports field must be object');
    assert.ok(!!exports, 'exports field is nothing');
    return exports;
}

function* iterateKeysOfExportsFieldDeeply(obj, prefix) {
    assert.strictEqual(typeof prefix, 'string');

    for (const [key, value] of Object.entries(obj)) {
        const route = `${prefix}::${key}`;

        if (typeof value === 'object') {
            assert.notStrictEqual(value, null, `${route}'s value is null`);
            yield* iterateKeysOfExportsFieldDeeply(value, route);
            continue;
        }

        assert.strictEqual(typeof value, 'string', `${route} is not string`);

        yield Object.freeze({
            route,
            key,
            value,
        });
    }
}

async function checkWhetherFileExist(parentDir, filename) {
    assert.strictEqual(typeof parentDir, 'string', `should set parentDir`);
    assert.strictEqual(typeof filename, 'string', `should set filename`);

    const filepath = path.resolve(parentDir, filename);
    const stat = await fs.stat(filepath);
    assert.ok(stat.isFile(), `${filename} must be file`);
}

const TestMode = Object.freeze({
    CJS: 'commonjs',
    ESM: 'es_module',
});

const EXT_ES_MODULE = '.js';
const EXT_COMMONJS = '.cjs';
const EX_D_TS = '.d.ts';
const EX_D_CTS = '.d.cts';

async function testBasicConditionObject(mode, t, conditionValue) {
    await t.test('should be condition object', (_t) => {
        assert.strictEqual(typeof conditionValue, 'object');
        assert.notStrictEqual(conditionValue, null);
    });

    await t.test('contains expected fields', (_t) => {
        const keys = Object.keys(conditionValue);
        assert.deepStrictEqual(keys, ['types', 'default']);
    });

    const valueDefault = conditionValue.default;
    const valueTypes = conditionValue.types;

    switch (mode) {
        case TestMode.ESM:
            await t.test(`check 'default' file name style is ${EXT_ES_MODULE}`, (_t) => {
                assert.ok(valueDefault.endsWith(EXT_ES_MODULE));
            });
            await t.test(`check 'types' file name style is ${EX_D_TS}`, (_t) => {
                assert.ok(valueTypes.endsWith(EX_D_TS));
            });
            break;
        case TestMode.CJS:
            await t.test(`check 'default' file name style is ${EXT_COMMONJS}`, (_t) => {
                assert.ok(valueDefault.endsWith(EXT_COMMONJS));
            });
            await t.test(`check 'types' file name style is ${EX_D_CTS}`, (_t) => {
                assert.ok(valueTypes.endsWith(EX_D_CTS));
            });
            break;
        default:
            throw new RangeError(`unknown mode: ${mode}`);
    }
}

async function testComplexConditionObject(t, conditionValue) {
    await t.test('should be condition object', (_t) => {
        assert.strictEqual(typeof conditionValue, 'object');
        assert.notStrictEqual(conditionValue, null);
    });

    await t.test('`import` field is condition', async (t) => {
        await testBasicConditionObject(TestMode.ESM, t, conditionValue.import);
    });

    await t.test('`require` field is condition', async (t) => {
        await testBasicConditionObject(TestMode.CJS, t, conditionValue.require);
    });

    await t.test('contains expected fields', (_t) => {
        const keys = Object.keys(conditionValue);
        assert.deepStrictEqual(keys, ['import', 'require', 'default']);
    });
}

await test(`Check package.json's 'exports' field format`, async (t) => {
    const targetDir = process.env.TARGET_DIR;
    assert.ok(!!targetDir, 'TARGET_DIR envvar should be set');

    const json = await loadJSON(process.cwd(), targetDir);
    const exports = getExportsField(json);

    await t.test(`This script tests whether the file specied in \`exports\` field in package.json exist`, async (t) => {
        const assetion = checkWhetherFileExist.bind(null, targetDir);

        const runningTests = [];
        for (const { route, value } of iterateKeysOfExportsFieldDeeply(exports, '')) {
            const running = t.test(route, async (_t) => {
                await assetion(value);
            });
            runningTests.push(running);
        }
        await Promise.all(runningTests);
    });

    await t.test(`check condition object's format`, async (t) => {
        const runningTests = [];
        for (const [exportedPath, value] of Object.entries(exports)) {
            const running = t.test(exportedPath, async (t) => {
                if (exportedPath.startsWith('./cjs/')) {
                    await testBasicConditionObject(TestMode.CJS, t, value);
                } else if (exportedPath.startsWith('./esm/')) {
                    await testBasicConditionObject(TestMode.ESM, t, value);
                } else {
                    await testComplexConditionObject(t, value);
                }
            });

            runningTests.push(running);
        }
        await Promise.all(runningTests);
    });
});
