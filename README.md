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
  click B_0 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_1 "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader/tree/8765899e6fb91e1f9e473907511e3c0e12488b77";
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
