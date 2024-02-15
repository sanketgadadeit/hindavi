function click_menu(){
    var a=document.getElementById('list');
    a.style="display:inline";
}

function on_submit(){
    alert("Successfuly Saved");

    var name= document.getElementById("name").value;
    var mob=document.getElementById("mob").value;

    document.getElementById("name1").value=name;
    document.getElementById("mob1").value=mob;

   var a= document.getElementById("payment");
   a.style="display:inline-block";
}

function pay(){
    var image=document.getElementById("image").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1QnfIb9M01giB7nkKGCKhmGxGcE2kzzp_w&usqp=CAU";
    alert(image);
}