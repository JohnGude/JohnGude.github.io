import {personal_information} from "./test_text.js";
import {personal_profile} from "./test_text.js";
import {personal_profile2} from "./test_text.js";
import {personal_profile3} from "./test_text.js";
import {personal_profile4} from "./test_text.js";


const pages = ["personal_information","personal_profile","personal_profile2","personal_profile3","personal_profile4"]
const imports = [personal_information,personal_profile,personal_profile2,personal_profile3,personal_profile4]

let element = document.getElementById("personal_information");
element.classList.add("active")
document.getElementById("display_text").innerHTML = imports[0]



window.onclick = e => {

     const actives = document.querySelectorAll(".active");
     for (let i = 0; i< actives.length;i++){
        actives[i].classList.remove("active")
     }

    const element = document.getElementById(e.target.id).classList;
    element.add("active");
    contents(e.target.id)

}

let contents =(target)=>{

    let index = 0
    
    while (index< pages.length){
        if (target===pages[index]){
            document.getElementById("display_text").innerHTML = imports[index]
            break
        }
   
        if (target != pages[index])
            document.getElementById("display_text").innerHTML = ""

    index ++
    
    }
}

