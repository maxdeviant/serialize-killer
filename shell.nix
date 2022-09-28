with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "serialize-killer";

  buildInputs = [
    nodejs
    yarn
  ];
}
