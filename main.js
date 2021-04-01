/*

    MAIN.JS BY SOORAJ GUPTA 

*/
document.querySelectorAll('button3d').forEach( (element) => {
    let msgs = element.innerHTML.split( ";" );
    let href = element.getAttribute( "link" );
    element.remove();
    let b = document.createElement('div');
    b.className = "bscene";
    b.innerHTML = `
    <a href = "${href}">
        <div class = "bfig">
            <button class = "btn up" style = "margin: 0px;"><h1>${msgs[1]}</h1><h1 class = "shad">${msgs[1]}</h1></button>
            <button class = "btn front" style = "margin: 0;"><h1>${msgs[0]}</h1><h1 class = "shad">${msgs[0]}</h1></button>
        </div>
    </a>
    `;
    document.getElementsByClassName( "buttons" )[0].appendChild( b );
} );

setTimeout( function(){ document.body.style.opacity = "1"; }, 10);
var base  = document.getElementsByClassName("front")[0].getBoundingClientRect().top + window.scrollY - 100;
var margin = document.getElementsByClassName("front")[0].clientHeight - 10;
setInterval( function() {
    //if( document.getElementsByClassName("front")[0].getBoundingClientRect().top + margin < )
    if( window.innerWidth < 1000 ){
            for( var i = 0; i < document.getElementsByClassName("front").length; i++ ){
                if( Math.abs(base -  Math.abs ( document.getElementsByClassName("front")[i].getBoundingClientRect().top ) ) <= margin )
                {
                    document.getElementsByClassName("front")[i].parentElement.className = "bfig open";
                }
                else
                {
                    document.getElementsByClassName("front")[i].parentElement.className = "bfig"
                }
            }
        }
    }, 200);
