function getinfo() {
	document.getElementById("delete").style.visibility = 'visible'
	var type = document.getElementById("typehere").value
	var addComment = document.getElementById('comment').value
	var text = document.createTextNode("Username: " + type)
	var addedComment = document.createTextNode("Comment: " + addComment)
	var newitem = document.createElement('LI')
	newitem.className += "list-group-item"
	var newUsername = document.createElement("H3")
	newUsername.className = "text-left"
	newUsername.appendChild(text)
	var newComment = document.createElement('H4')
	newComment.className = "text-left"
	newComment.appendChild(addedComment)
	var checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.className = "pull-right checkbox";
	newitem.appendChild(checkBox);
	newitem.appendChild(newUsername)
	newitem.appendChild(newComment)
	document.getElementById("getinfo").appendChild(newitem)




}
function deletet(){
	var x = document.getElementById("getinfo");
	
	if(x.childNodes.length == 0){
		$("#delete").hide();
	} else {
		$("#delete").show();
	} 
}
$(document).ready(function(){
	
	$("#delete").click(function(){
		$(".checkbox:checked").each(function(){
			$(this).closest('LI').remove();
		});	
		deletet();
	});
	
});



	