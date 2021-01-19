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
function fireWeapon(pos, gameArea, left){
    let projectile = document.createElement('div')
    projectile.setAttribute('class', 'projectile')
    projectile.style.cssText = 'position:absolute; width:4px; height:4px; background-color:blue; border-radius:1px; bottom:100px;'
    projectile.style.left += `${left - 10}px` // need to make the bullet move
    //setTimeout(newPos(pos, projectile),500)
    gameArea.appendChild(projectile)
}
function newPos(pos, projectile){

    if (newLeft > 0){

    }
}
addControls(player)
