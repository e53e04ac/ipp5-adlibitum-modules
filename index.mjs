/*!
    @e53e04ac/ipp5-adlibitum-modules/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { readFile as fsReadFile } from 'node:fs/promises';
import { dirname as pathDirname } from 'node:path';
import { resolve as pathResolve } from 'node:path';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { Ipp5AdlibitumEsmLoader } from 'ipp5-adlibitum-esm-loader';

/** @type {import('.').Ipp5AdlibitumModules.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<typeof options>['__GenericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['TModuleMap']} TModuleMap */

    const _options = ({});

    /** @type {import('.').Ipp5AdlibitumModules._Self<TModuleMap>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        defineCallbackMap: {

        },
        modulePromiseMap: {

        },
        getNullable: (async (moduleName) => {
            const defineCallback = _self.defineCallbackMap[moduleName];
            if (defineCallback == null) {
                return null;
            }
            let modulePromise = _self.modulePromiseMap[moduleName];
            if (modulePromise == null) {
                modulePromise = defineCallback({
                    moduleName,
                    defined: self.defined,
                    undefined: self.undefined,
                    require: self.require,
                });
                _self.modulePromiseMap[moduleName] = modulePromise;
            }
            const module = await modulePromise;
            if (module == null) {
                return null;
            }
            return module;
        }),
        adlibitumEsmLoader: hold(() => {
            return Ipp5AdlibitumEsmLoader({});
        }),
    });

    /** @type {import('.').Ipp5AdlibitumModules.Self<TModuleMap>} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5AdlibitumModules: (() => {
            return _self;
        }),
        moduleNames: (() => {
            return Object.keys(_self.defineCallbackMap);
        }),
        defined: ((moduleName) => {
            return (moduleName in _self.defineCallbackMap);
        }),
        undefined: ((moduleName) => {
            return !self.defined(moduleName);
        }),
        define: ((moduleName, defineCallback) => {
            self.undefine(moduleName);
            _self.defineCallbackMap[moduleName] = defineCallback;
        }),
        defineFromCode: ((params) => {
            const { mainDir, moduleName, pathFromMainDir, code } = params;
            const dir = pathDirname(pathResolve(mainDir, pathFromMainDir));
            const { defineCallback } = _self.adlibitumEsmLoader().loadFromCode({ code });
            self.define(moduleName, async (context) => {
                return await defineCallback(async (id) => {
                    const isLocalModule = (id.startsWith('./') || id.startsWith('../')) && id.endsWith('/index.mjs');
                    if (!isLocalModule) {
                        return await import(id);
                    }
                    const moduleNameMatch = (/\/([^/]+)\/index\.mjs$/).exec(id);
                    const moduleName = moduleNameMatch?.[1];
                    if (moduleName == null) {
                        throw new Error();
                    }
                    if (context.defined(moduleName)) {
                        return await context.require(moduleName);
                    }
                    return await import(pathResolve(dir, id));
                });
            });
        }),
        defineFromCodes: ((params) => {
            const { mainDir, modules } = params;
            for (const module of modules) {
                self.defineFromCode({ mainDir, ...module });
            }
        }),
        defineFromFile: (async (params) => {
            const { mainDir, pathFromMainDir } = params;
            const path = pathResolve(mainDir, pathFromMainDir);
            const code = await fsReadFile(path, 'utf8');
            self.defineFromCode({ ...params, code });
        }),
        defineFromFiles: (async (params) => {
            const { mainDir, modules } = params;
            for (const module of modules) {
                await self.defineFromFile({ mainDir, ...module });
            }
        }),
        require: (async (moduleName) => {
            const module = await _self.getNullable(moduleName);
            if (module == null) {
                throw new Error(`Not Found: ${moduleName.toString()}`);
            }
            return module;
        }),
        requireUntyped: (async (moduleName) => {
            return self.require(moduleName);
        }),
        undefine: ((moduleName) => {
            Reflect.deleteProperty(_self.modulePromiseMap, moduleName);
            Reflect.deleteProperty(_self.defineCallbackMap, moduleName);
        }),
        undefineUntyped: ((moduleName) => {
            self.undefine(moduleName);
        }),
        undefineAll: (() => {
            for (const moduleName of self.moduleNames()) {
                self.undefine(moduleName);
            }
        }),
    });

    return self;

});

/** @type {import('.').Ipp5AdlibitumModules.Companion} */
const companion = ({});

/** @type {import('.').Ipp5AdlibitumModules.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5AdlibitumModules };
