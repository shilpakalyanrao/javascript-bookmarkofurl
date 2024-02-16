 var list = document.getElementById("list");
    var add = document.getElementById("additem");
    var deleteall = document.getElementById("deleteall");
    function isvalidurl(url) {
        var pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
        return pattern.test(url);
    }

    add.addEventListener("click", () => {
        var inputurl = document.getElementById("inputurl");
        var url = inputurl.value;
        var p = document.querySelector("p");
        if (isvalidurl(url)) {
            var li = document.createElement("li");
            li.innerHTML = `<a href=${url}>${url}</a>
                             <div class="btnsection">
                  <button class="edit">edit</button>
                     <button class="delete">delete</button>
                 </div><hr>`;
            inputurl.value = "";
            list.appendChild(li);
            editli(li);
            deleteli(li);
        }
        else {
            alert("Enter valid url");
        }

    });
    function editli(li) {
        var editbtn = li.querySelector(".edit");
        var a = li.querySelector("a");
        editbtn.addEventListener('click', () => {
            var newurl = prompt("Edit url", a.getAttribute("href"));
            if (newurl && isvalidurl(newurl)) {
                a.setAttribute('href', newurl);
                a.innerHTML = newurl;
            }
            else {
                alert("Enter valid url");
            }
        });
    }
    function deleteli(li) {
        var deletebtn = li.querySelector(".delete");
        deletebtn.addEventListener('click', () => {
            li.remove();
        })
    }
    deleteall.addEventListener('click', () => {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    });
</script>
