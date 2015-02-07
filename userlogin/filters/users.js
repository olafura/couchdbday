function(doc, req){
	if(doc.type !== 'user') {
		return false;
	}
	return true;
}
