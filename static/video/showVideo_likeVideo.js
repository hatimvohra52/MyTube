
function like(type_){
		csrftoken = Cookies.get("csrftoken");
		video_id = Number(document.getElementById("video_id").value);
		json = {"type_":type_,"video_id":video_id};
		likes = document.getElementById("likes");
		dislikes = document.getElementById("dislikes");
		fetch("/api/like_video/",{
			method:"POST",
			headers:{
				"Accept": "application/json, html/plain, */*",
				"Content-Type": "application/json",
				"X-CSRFToken":csrftoken
			},
			body: JSON.stringify(json)
		}).then(function(response){
			return response.json();
		}).then(function(json){
			console.log(json);
			if (json.created_like){
				likes.innerHTML = Number(likes.innerHTML) + 1;
			} else if (json.deleted_like){
				likes.innerHTML = Number(likes.innerHTML) - 1;
			}
			if (json.created_dislike){
				dislikes.innerHTML = Number(dislikes.innerHTML) + 1;
			} else if (json.deleted_dislike){
				dislikes.innerHTML = Number(dislikes.innerHTML) - 1;
			}
		})
	}

window.onload = function(){
	document.getElementById("like_a").onclick = () => {
		authenticated = document.getElementById("authenticated").value;
		console.log(authenticated);
		if (authenticated == "True"){
			like("like");
		} else {
			document.getElementById("signin_popup_button").click();
		}
		return false;
	}
	document.getElementById("dislike_a").onclick = () =>{
		authenticated = document.getElementById("authenticated").value;
		if (authenticated == "True"){
			like("dislike");
		} else {
			document.getElementById("signin_popup_button").click();
		}		
		return false;
	}
}
