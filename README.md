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
  click B_0 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_1 "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader/tree/ec57889dc649acf536a2d65b8f5b44dfb449eff3";
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
