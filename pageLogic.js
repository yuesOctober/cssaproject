function printSponsorList(){
	var list;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "../sponsorList.json", true);
	xhr.send();

	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var jsonData = xhr.responseText;
			console.log(jsonData);
			list = JSON.parse(xhr.responseText);
		}
	}
}

printSponsorList();