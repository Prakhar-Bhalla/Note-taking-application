import("./index.css");
var fm = document.querySelector("form");
        var tb = document.querySelector("table");
        fm.addEventListener("submit", addItem);
        var btn = document.querySelector("button");
        btn.addEventListener("click", deleteAll);

        function deleteAll() {
            var items = tb.querySelectorAll("tr");
            for(var i = 1; i< items.length; i++) {
                items[i].remove();
            }
        }

        function addItem(event) {
            event.preventDefault();
            var name = document.getElementById("name").value;
            var quantity = document.getElementById("quantity").value;
            var priority = document.getElementById("priority").value;
            if(name.length > 0) {
                createRow(name, quantity, priority);
            }
            document.getElementById("priority").value = "";
            document.getElementById("name").value = "";
            document.getElementById("quantity").value = "";
        }

        function createRow(name, quantity, priority) {
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = name;
            var td2 = document.createElement("td");
            td2.textContent = quantity;
            var td3 = document.createElement("td");
            td3.textContent = priority;
            if(priority == "H") {
                td3.style.color = "red";
            }
            var td4 = document.createElement("td");
            td4.textContent = "Mark";
            td4.addEventListener("click", markComplete);

            var td5 = document.createElement("td");
            td5.textContent = "Delete";
            td5.addEventListener("click", makeDelete);

            row.append(td1, td2, td3, td4, td5);
            tb.appendChild(row);
        }

        function markComplete(e) {
            e.target.textContent = "completed";
            e.target.removeEventListener("click", markComplete);
            e.target.parentNode.style.backgroundColor = "purple";
        }

        function makeDelete(e) {
            e.target.parentNode.remove();
        }




/*  npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader


 {
    "presets": ["@babel/env", "@babel/preset-react"]
  } */