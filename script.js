import {personal_information} from "./text.js";
import {it_interests} from "./text.js";
import {ideal_career_position} from "./text.js";
import {personal_profile} from "./text.js";
import {project_idea} from "./text.js";


const pages = ["personal_information","it_interests","ideal_career_position","personal_profile","project_idea"]
const imports = [personal_information,it_interests,ideal_career_position,personal_profile,project_idea]

let element = document.getElementById("personal_information");
element.classList.add("active")
document.getElementById("display_text").innerHTML = imports[0]





    window.onclick = e => {
    
        try{
        let element = document.getElementById(e.target.id).classList;
       // console.log(e.target.id)

        let index = 0
        while (index< pages.length){
           if (e.target.id == pages[index] && (e.target.id != "")){

        class_list() 
        element.add("active");
        contents(e.target.id)
        } index++
    
    }}
        catch(err){
        //   console.log("The Error is:"+ err)

        }

    }

    //Add page contents
    let contents =(target)=>{

        let index = 0
        
        while (index< pages.length){
            if (target===pages[index]){
                document.getElementById("display_text").innerHTML = imports[index]
                break
            }
        index ++
        
        }
    }
    
    //removes active page high lighted
    let class_list =()=>{
        const actives = document.querySelectorAll(".active");
    for (let i = 0; i< actives.length;i++){
        actives[i].classList.remove("active")
    }}

