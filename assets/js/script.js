/* Author: 

*/


let loadMore = document.querySelector(".cta");
let count = 4;

loadMore.addEventListener("click", loadText);

function loadText() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {
    let user = JSON.parse(xhr.response);

    let text = "";
    for (let i = 0; i <= count; i++) {
      if (i < 30) {
        text += `
        <ul>
            <li><p>ID:- ${user[i]["id"]}</p></<li>
            <li><p>Title:- ${user[i]["title"]}</p></<li>
            <li><p>Body:- ${user[i]["body"]}</p></<li>
        </ul>`;

        if (i === 29 ) {
          loadMore.innerHTML = "Load less";
        }
      }
    }
    
    if (count === -1){
      loadMore.innerHTML = "load more"
    }


    if (loadMore.innerHTML == "Load less") {
      for (let x = 4; x >= 0; x--){
        count --;
      }
    }
    else
    {
      count += 5;
    }
      
    document.querySelector(".post-container").innerHTML = text;
  };
  xhr.send();
}





















