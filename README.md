# ipp5-adlibitum-modules

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-modules
~~~~~

~~~~~ mjs
import { const Ipp5AdlibitumModules } from 'e53e04ac/ipp5-adlibitum-modules';
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
  click B_0 "https://github.com/e53e04ac/hold/tree/8fc3f6696d1c7ed6d184d90c5e33298cc9228991";
  click B_1 "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader/tree/3734dd4cc39b5b66e79912e72e9dbe7661eb9038";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-modules";
    E_0(["Ipp5AdlibitumModules"]);
  end;
  M(["index.mjs"])
  subgraph "node:fs";
    I_0_0(["readFileSync"]);
  end;
  subgraph "node:path";
    I_1_0(["dirname"]);
    I_1_1(["resolve"]);
  end;
  subgraph "ipp5-adlibitum-esm-loader";
    I_2_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  M ----> I_3_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-modules";
    E_0(["const Ipp5AdlibitumModules"]);
  end;
  M(["index.d.ts"])
  subgraph "ipp5-adlibitum-esm-loader";
    I_0_0(["Ipp5AdlibitumEsmLoader"]);
  end;
  M ----> I_0_0;
  E_0 ----> M;
~~~~~
