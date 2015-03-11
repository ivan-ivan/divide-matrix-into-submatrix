function toMatrix(data, rowSize) {
	var res = [];
	for(var i = 0; i < data.length; i += rowSize) {
		res.push(data.slice(i, i + rowSize));
	}
	return res;
}