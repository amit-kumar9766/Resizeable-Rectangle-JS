//==========-===========Dragging======================================
const el = document.querySelector(".rectangle-full");

let resizing = false;

el.addEventListener("mousedown", mousedown);

function mousedown(e) {
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup",up);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function move(e) {
    if (!resizing) {
      let newX = -prevX +e.clientX;
      let newY = -prevY + e.clientY;

      const rect = el.getBoundingClientRect();

      el.style.left = rect.left + newX + "px";
      el.style.top = rect.top + newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }
  }

  function up() {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", up);
  }
}


//===================Resizing From Here============================

const elm = document.querySelector(".rectangle-full");
const elements = document.querySelectorAll(".rectangle");

elements.forEach((el)=>{
    el.addEventListener("mousedown", down)

    function down(e){
      // console.log(e.target.class)-->why not printing
        console.log(e.target.id)
        resizing = true;
        let curr=e.target;
        let prevX= e.clientX;
        let prevY=e.clientY;

        // console.log(xPrev,yPrev);

        window.addEventListener("mousemove",move)
        window.addEventListener("mouseup",up)

        function move(e){
            const rect = elm.getBoundingClientRect();
            console.log(rect);

            newX=(prevX-e.clientX)
            newY=(prevY-e.clientY)

            if (curr.classList.contains("se")){
               
                elm.style.width = rect.width -newX + "px";
                elm.style.height= rect.height-newY+"px";
              
            }
            else if (curr.classList.contains("sw")){
                elm.style.width = rect.width + (newX) + "px"
                elm.style.height = rect.height - (newY) + "px"
                elm.style.left = rect.left - (newX) + "px"
            }
            else if (curr.classList.contains("ne")){
                elm.style.width = rect.width - (prevX - e.clientX) + "px"
                elm.style.height = rect.height + (prevY - e.clientY) + "px"
                elm.style.top = rect.top - (prevY - e.clientY) + "px"
            }
            else {
                elm.style.width = rect.width + (prevX - e.clientX) + "px"
                elm.style.height = rect.height + (prevY - e.clientY) + "px"
                elm.style.top = rect.top - (prevY - e.clientY) + "px"
                elm.style.left = rect.left - (prevX - e.clientX) + "px"
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }

        function up(e){
            window.removeEventListener("mousedown",down)
            window.removeEventListener("mousemove",move)
            resizing = false;
        }
    }
})