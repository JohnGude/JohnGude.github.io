import {personal_profile} from "./test_text.js";
import {personal_profile2} from "./test_text.js";

let y = personal_profile2

document.getElementById("personal_profile").addEventListener("click", function(){
    let x = personal_profile
    document.getElementById("display_text").innerHTML = x
});

window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
    console.log(e.target.id);  // to get the element tag name alone
}