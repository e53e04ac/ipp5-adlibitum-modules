/*!
    @e53e04ac/ipp5-adlibitum-modules/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { Ipp5AdlibitumEsmLoader } from 'ipp5-adlibitum-esm-loader';

export declare namespace Ipp5AdlibitumModules {

    type EventSpecs = Record<never, never>;

    type ModuleMap = Record<string, unknown>;

    type DefineCallback<TModuleMap extends ModuleMap, ModuleName extends keyof TModuleMap> = {
        (context: {
            readonly moduleName: ModuleName;
            readonly defined: Self<TModuleMap>['defined'];
            readonly undefined: Self<TModuleMap>['undefined'];
            readonly require: Self<TModuleMap>['require'];
        }): Promise<TModuleMap[ModuleName]>;
    };

    type Options<TModuleMap extends ModuleMap> = {
        readonly __GenericTypes__?: {
            readonly TModuleMap: TModuleMap;
        };
    };

    type _Self<TModuleMap extends ModuleMap> = {
        readonly options: Get<Options<TModuleMap>>;
        readonly _options: Get<unknown>;
        readonly defineCallbackMap: {
            [ModuleName in keyof TModuleMap]?: DefineCallback<TModuleMap, ModuleName>;
        };
        readonly modulePromiseMap: {
            [ModuleName in keyof TModuleMap]?: Promise<TModuleMap[ModuleName]>;
        };
        readonly getNullable: {
            <TModuleName extends keyof TModuleMap>(moduleName: TModuleName): Promise<null | TModuleMap[TModuleName]>;
        };
        readonly adlibitumEsmLoader: Get<Ipp5AdlibitumEsmLoader>;
    };

    type Self<TModuleMap extends ModuleMap> = EventEmitter<EventSpecs> & {
        readonly _Ipp5AdlibitumModules: Get<_Self<TModuleMap>>;
        readonly moduleNames: Get<string[]>;
        readonly defined: {
            <TModuleName extends keyof TModuleMap>(moduleName: TModuleName): boolean;
        };
        readonly undefined: {
            <TModuleName extends keyof TModuleMap>(moduleName: TModuleName): boolean;
        };
        readonly define: {
            <TModuleName extends keyof TModuleMap>(moduleName: TModuleName, defineCallback: DefineCallback<TModuleMap, TModuleName>): void;
        };
        readonly defineFromCode: {
            (params: {
                readonly moduleName: string;
                readonly pathFromMainDir: string;
                readonly mainDir: string;
                readonly code: string;
            }): void;
        };
        readonly defineFromCodes: {
            (params: {
                readonly mainDir: string;
                readonly modules: {
                    readonly moduleName: string;
                    readonly pathFromMainDir: string;
                    readonly code: string;
                }[];
            }): void;
        };
        readonly defineFromFile: {
            (params: {
                readonly mainDir: string;
                readonly moduleName: string;
                readonly pathFromMainDir: string;
            }): Promise<void>;
        };
        readonly defineFromFiles: {
            (params: {
                readonly mainDir: string;
                readonly modules: {
                    readonly moduleName: string;
                    readonly pathFromMainDir: string;
                }[];
            }): Promise<void>;
        };
        readonly require: {
            <TModuleName extends keyof TModuleMap>(moduleName: TModuleName): Promise<TModuleMap[TModuleName]>;
        };
        readonly requireUntyped: {
            (moduleName: string): Promise<unknown>;
        };
        readonly undefine: {
            <TModuleName extends keyof TModuleMap>(moduleName: TModuleName): void;
        };
        readonly undefineUntyped: {
            (moduleName: string): void;
        };
        readonly undefineAll: {
            (): void;
        };
    };

    type Constructor = {
        <TModuleMap extends ModuleMap>(options: Options<TModuleMap>): Self<TModuleMap>;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5AdlibitumModules<TModuleMap extends Ipp5AdlibitumModules.ModuleMap> = Ipp5AdlibitumModules.Self<TModuleMap>;

export declare const Ipp5AdlibitumModules: Ipp5AdlibitumModules.ConstructorWithCompanion;
