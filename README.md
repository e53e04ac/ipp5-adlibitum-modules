# ipp5-adlibitum-modules

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-modules
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumModules } from 'e53e04ac/ipp5-adlibitum-modules';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-adlibitum-modules"]);
  B0(["e53e04ac/hold"]);
  B1(["e53e04ac/ipp5-adlibitum-esm-loader"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/hold";
  click B1 href "https://github.com/e53e04ac/ipp5-adlibitum-esm-loader";
  subgraph "e53e04ac/ipp5-adlibitum-modules";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
