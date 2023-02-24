# ipp5-adlibitum-modules

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-modules
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumModules } from 'ipp5-adlibitum-modules';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["hold"]);
    B_2(["ipp5-adlibitum-esm-loader"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n1c42c278687d626fd9dbc9da241e899e482bac0d"]);
    C_1(["e53e04ac/hold\nccd6d335b2be61f30045be782b2129d08a53ac67"]);
    C_2(["e53e04ac/ipp5-adlibitum-esm-loader\na2b08b77b40b53a25885bf6b266c8b3425260c3d"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/1c42c278687d626fd9dbc9da241e899e482bac0d";
  click C_1 "https://github.com/e53e04ac/hold/tree/ccd6d335b2be61f30045be782b2129d08a53ac67";
  click C_2 "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader/tree/a2b08b77b40b53a25885bf6b266c8b3425260c3d";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-modules";
    E_0(["namespace Ipp5AdlibitumModules"]);
    E_1(["const Ipp5AdlibitumModules"]);
  end;
  M["index.d.ts"]
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_1_0(["Get"]);
  end;
  subgraph "ipp5-adlibitum-esm-loader";
    I_2_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-modules";
    E_0(["Ipp5AdlibitumModules"]);
  end;
  M["index.mjs"]
  subgraph "node:fs/promises";
    I_0_0(["readFile"]);
  end;
  subgraph "node:path";
    I_1_0(["dirname"]);
    I_1_1(["resolve"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
  end;
  subgraph "ipp5-adlibitum-esm-loader";
    I_4_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  E_0 ----> M;
~~~~~
