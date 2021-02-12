import css from './style.css'
const gameArea = document.getElementById('gameArea')
const grid = document.getElementById('grid')
const player = document.getElementById('player')

// center the player on start
player.style.cssText = 'left:230px;'

function addControls(player){
    document.addEventListener('keydown', (event) => {
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
                    console.log('about to fire weapon!')
                    fireWeapon(pos, gameArea);
                    setTimeout(10000);
                    // slow the gun down
            } else {
                return
            }
        }
    }) 
}
function fireWeapon(pos, gameArea){
    //
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
                    detectCollision(projectile)
                    if (topPos < 3){
                        projectile.remove()
                        return
                    }
                }, 10*i)
            })(i)
        }
    //
}
function projectilePos(projectile){
    gameArea.appendChild(projectile) 
}
function invaderFactory(rowNumber) {
    return {
        rowNumber: rowNumber,
        cssProperties: `margin:10px; width:80px; height:80px; background-color:blue; color:white;`,
        addDiv(){
            return document.createElement('div')
        }
    }
}
function createInvaders(invaderFactory){
    try {
        for (let i = 0; i < 20; i++){ //adjust later
            (function (i){
                setTimeout(function () {
                        let invader = invaderFactory(i)
                        let sprite = invader.addDiv()
                        sprite.style.cssText = invader.cssProperties
                        sprite.setAttribute('id', `invader-${[i]}`)
                        sprite.setAttribute('class', 'invader')
                        grid.insertBefore(sprite,grid.firstChild)
                        sprite.textContent = [i]
                }, 1500*i)
            })(i)
        }
    } catch(error) {
        console.error(error)
    }
}
function shiftGrid(grid){
    for (let i = 0; i < 150; i++){
        (function (i){
            setTimeout(function () {
                grid.style.paddingTop = `${1 * i}px`
            }, 1200*i)
        })(i)
    }
}
function detectCollision(projectile){
    let invaders = document.querySelectorAll('.invader')
    let projectileTop = parseFloat(projectile.style.top)
    let projectileLeft = parseFloat(projectile.style.left)
    invaders.forEach((element) => {
        let invadersPos = element.getBoundingClientRect()
        let left = parseFloat(invadersPos.left)
        let top = parseFloat(invadersPos.top)
        top += 40
        if (top == projectileTop && left == projectileLeft){
            //(function (i){
              //  setTimeout(function () {
                //    projectile.style.backgroundColor = 'purple'
                //}, 100*i)
            //})(i)
            invaders[i].remove()
            projectile.remove()
            return
        }
    })
    return
}
// start the game
addControls(player)
createInvaders(invaderFactory)
shiftGrid(grid)