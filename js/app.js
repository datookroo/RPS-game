const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const body = document.querySelector('body');

const cont = document.querySelector('#cont');
const cont2 = document.querySelector('#cont2');
const result = document.querySelector('#result');
const resp = document.querySelector('#resp');
const again = document.querySelector('button');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');

let me = document.querySelector('#me');
let cpu = document.querySelector('#cpu');

const x = ['rock', 'paper', 'scissor'];

function selection(){
    let random = Math.floor(Math.random() * x.length);
    let item = x[random];
    return item;
};

let attempt = 0;

    rock.addEventListener('click', () => {
        select1.textContent = '-rock selected'
        let select = selection();
        select2.textContent = "-" + select + " selected";
        if(select == 'paper'){
            cpu.textContent++;
            
            if(cpu.textContent == 3) {
                cont.style.display = 'none';
                cont2.style.display = 'none';
                result.textContent = `${me.textContent}:${cpu.textContent} `;
                result.style.display = "block";

                if(me.textContent > cpu.textContent){
                    resp.style.display = 'block';
                    resp.textContent = "You Win";
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';

                }else {
                    resp.style.display = 'block'
                    resp.textContent = "You Lose"
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }

            }
        }else if(select == 'scissor'){
            me.textContent++;

            
            if(me.textContent == 3) {
                cont.style.display = 'none';
                cont2.style.display = 'none';
                result.textContent = `${me.textContent}:${cpu.textContent} `;
                result.style.display = "block";

                if(me.textContent > cpu.textContent){
                    resp.style.display = 'block';
                    resp.textContent = "You Win";
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }else {
                    resp.style.display = 'block'
                    resp.textContent = "You Lose"
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }
            }  
        } 
    })

    paper.addEventListener('click', () => {
        select1.textContent = ' - paper selected'
        let select = selection();
        select2.textContent = "-" + select + " selected" ;
        if(select == 'scissor'){
            cpu.textContent++;
            
            if(cpu.textContent == 3) {
                cont.style.display = 'none';
                cont2.style.display = 'none';
                result.textContent = `${me.textContent}:${cpu.textContent} `;
                result.style.display = 'block';

                if(me.textContent > cpu.textContent){
                    resp.style.display = 'block';
                    resp.textContent = "You Win";
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }else {
                    resp.style.display = 'block'
                    resp.textContent = "You Lose"
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }

            }
        }else if(select == 'rock'){
            me.textContent++;
            
            if(me.textContent == 3) {
                cont.style.display = 'none';
                cont2.style.display = 'none';
                result.textContent = `${me.textContent}:${cpu.textContent} `;
                result.style.display = "block";

                if(me.textContent > cpu.textContent){
                    resp.style.display = 'block';
                    resp.textContent = "You Win";
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }else {
                    resp.style.display = 'block'
                    resp.textContent = "You Lose"
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }
            }
        }
    })

    scissor.addEventListener('click', () => {
        select1.textContent = 'scissor selected'
        let select = selection();
        select2.textContent = "-" + select + " selected";
        if(select == 'rock'){
            cpu.textContent++;
            
            if(cpu.textContent == 3) {
                cont.style.display = 'none';
                cont2.style.display = 'none';
                result.textContent = `${me.textContent}:${cpu.textContent} `;
                result.style.display = 'block';

                if(me.textContent > cpu.textContent){
                    resp.style.display = 'block';
                    resp.textContent = "You Win";
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }else {
                    resp.style.display = 'block'
                    resp.textContent = "You Lose"
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }
            }
        }else if(select == 'paper'){
            me.textContent++;
            
            if(me.textContent == 3) {
                cont.style.display = 'none';
                cont2.style.display = 'none';
                result.textContent = `${me.textContent}:${cpu.textContent} `;
                result.style.display = "block";

                if(me.textContent > cpu.textContent){
                    resp.style.display = 'block';
                    resp.textContent = "You Win";
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }else {
                    resp.style.display = 'block'
                    resp.textContent = "You Lose"
                    again.style.display = 'block'
                    body.style.display = 'flex';
                    body.style.justifyContent = 'center';
                    body.style.alignItems = 'center';
                }
            }
        }    
    })







