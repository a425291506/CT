function showData(data){
	 $("#Tab").not(":first").remove();
	 for(var i in data){
		 var hl = "<tr>";
		 hl += "<td>"+data[i].dev_id+"</td>";
		 hl += "<td>"+data[i].name+"</td>";
		 hl += "<td>"+data[i].address+"</td>";
		 hl += "<td><a class=\"self_a\" href=\"javascript:toEdit('"+data[i].dev_id+"')\"><img src=\"images/edit.png\"/></a></td>";
		 hl += "<td><a class=\"self_a\" href=\"javascript:del('"+data[i].dev_id+"')\"><img src=\"images/del.png\"/></a></td>";
		 hl += "</tr>";
		 $("#Tab").append(hl);
	 }
}

function toShow(dev_id){
	 var url = getPrePath() + "toShow.action?dev_id="+dev_id;
	 openWindow(url,800,600);
}

function toEdit(dev_id){
	 var url = getPrePath() + "toEdit.action?dev_id="+dev_id;
	 openWindow(url,800,600);
	 query(false);
	
}


