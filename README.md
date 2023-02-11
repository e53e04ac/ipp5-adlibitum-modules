# ipp5-adlibitum-modules

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-modules
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumModules } from 'e53e04ac/ipp5-adlibitum-modules';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/hold"]);
    B_1(["e53e04ac/ipp5-adlibitum-esm-loader"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  click B_0 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_1 "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader/tree/48b895277ced3af33e185b80bc4a9fe3238d594f";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:fs";
    B_0_0(["readFileSync"]);
  end;
  subgraph "node:path";
    B_1_0(["dirname"]);
    B_1_1(["resolve"]);
  end;
  subgraph "ipp5-adlibitum-esm-loader";
    B_2_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  subgraph "hold";
    B_3_0(["hold"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "ipp5-adlibitum-esm-loader";
    B_0_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  B_0_0 ----> A;
~~~~~
