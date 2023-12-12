import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "daddy"];
let domain = [".com", ".net", ".us", ".gov"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let d = 0; d < domain.length; d++) {
        console.log(`${pronoun[p]}${adj[a]}${noun[n]}${domain[d]}`);
      }
    }
  }
}
