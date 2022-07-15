const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "Sai", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

const emogiTest = document.getElementById("emogiTest")
emogiTest.textContent="Available Emoji's:" +fighters;
document.write ("<br>");
emogiTest.textContent="Available Emoji's:" +fighters;

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
    let x = Math.floor(Math.random()*fighters.length)
        let y = Math.floor(Math.random()*fighters.length)

    if(x===y){
        for( var i = 0; i < fighters.length; i++){ 
    
            if ( arr[i] === fighters[x]) { 
        
                arr.splice(i, 1); 
            }
        
        }
        x = Math.floor(Math.random()*fighters.length)
        stageEl.textContent=fighters[x]+" VS "+fighters[y]
    }else {    
    stageEl.textContent=fighters[x]+" VS "+fighters[y]
    }

 
    
})
