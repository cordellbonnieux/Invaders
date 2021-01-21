import css from './style.css'
const gameArea = document.getElementById('gameArea')
const player = document.getElementById('player')

// center the player on start
player.style.cssText = 'left:230px;'

function addControls(player){
    document.addEventListener('keyup', (event) => {
        let pos = window.getComputedStyle(player)
        let left = parseFloat(pos.left)
        let right = parseFloat(pos.right)
        if (event.key == 'a'){
            left -= 20
            left.toString()
            if (left > 0){
                player.style.cssText = `left:${left}px`
            } else {
                return
            }
        }
        if (event.key == 'd'){
            right -= 20
            right.toString()
            if (right > 0){
                player.style.cssText = `right:${right}px`
            } else {
                return
            }
        }
        if (event.key == 'w'){
            if (right > 0){
                fireWeapon(pos, gameArea)
            } else {
                return
            }
        }
    }) 
}
function fireWeapon(pos, gameArea){
    let newLeft = parseFloat(pos.left)
    newLeft += 18 
    let projectile = document.createElement('div')
    projectile.setAttribute('class', 'projectile')
    projectile.style.cssText = `position:absolute; width:4px; height:4px; background-color:blue; border-radius:1px; left:${newLeft}px; top:510px;`
    for (let i = 0; i < 510; i++){
        (function (i){
            setTimeout(function () {
                let topPos = 510 - [i]
                projectile.style.cssText += ` top:${topPos}px;`
                projectilePos(projectile)
            }, 10*i)
        })(i)
    }
}
function projectilePos(projectile){
    gameArea.appendChild(projectile) 
}
addControls(player)
