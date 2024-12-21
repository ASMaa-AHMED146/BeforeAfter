let numberOfBubbles=4;
let line=document.querySelector(".line"),
items=document.querySelector(".bubbles .items");
let next=document.querySelector(".buttons .next");
let pre=document.querySelector(".buttons .pre");

function start() {
createLines();
createItems();    
}
start();
function createLines()
{
    for(let i=0 ;i<numberOfBubbles-1;i++)
    {
        let smallline=document.createElement('div');
        smallline.classList.add('nochecked');
        line.appendChild(smallline); 
    }
}

function createItems()
{
    for(let i=0 ;i<numberOfBubbles;i++)
        {
            let smallitem=document.createElement('div');
            smallitem.classList='down';
            smallitem.innerHTML=`<span>
                        <i class='bx bx-check ' ></i>
                    </span>`;
            items.appendChild(smallitem);
        }
}
let arraybubbles=document.querySelectorAll(".items .down");
let arraykines=document.querySelectorAll(".line div");
let currentbubble=1;
let currentline=0;
arraybubbles[0].classList.add('checked');

next.addEventListener('click',()=>{
    if(currentbubble<arraybubbles.length)
    {
        if(currentbubble==1)
        {           
            pre.classList.toggle('no')
        }
        arraykines[currentline].classList.toggle('checked');
        arraykines[currentline].classList.toggle('nochecked');
        setTimeout(()=>{
            arraybubbles[currentbubble].classList.toggle('checked');
            currentbubble++;
        },1000);
        currentline++;
        if(currentbubble==arraybubbles.length-1)
        {
            next.classList.toggle('no')
        }
    }
})
pre.addEventListener('click',()=>{
    if(currentbubble>1)
    {
        currentbubble--;
        if(currentbubble==arraybubbles.length-1)
        {  
            next.classList.toggle('no');
        }
        else if(currentbubble==1)
        {
            pre.classList.toggle('no');
        }
        arraybubbles[currentbubble].classList.toggle('checked');
        setTimeout(()=>{
            currentline--;
        arraykines[currentline].classList.toggle('checked');
        arraykines[currentline].classList.toggle('nochecked');
          
        },300);     
    }
})
