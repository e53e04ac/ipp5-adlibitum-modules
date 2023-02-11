# ipp5-adlibitum-modules

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-modules
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumModules } from 'e53e04ac/ipp5-adlibitum-modules';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-adlibitum-modules"]);
  subgraph "dependencies";
    B_0(["e53e04ac/hold"]);
    B_1(["e53e04ac/ipp5-adlibitum-esm-loader"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  click B_0 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_1 "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader/tree/4a6a19db368c0283467d8bd7dc3a526d7109aebb";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-adlibitum-modules"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:fs"
    D0(["readFileSync"]);
  end;
  subgraph "node:path"
    D1(["dirname"]);
    D2(["resolve"]);
  end;
  subgraph "ipp5-adlibitum-esm-loader"
    D3(["Ipp5AdlibitumEsmLoader"]);
  end;
  subgraph "hold"
    D4(["hold"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D3 --import--> C1;
~~~~~
