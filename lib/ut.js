var undef;

module.exports.fileTime = function(date, utc){
	var z = this, d = date ? date : new Date;
	if (utc)
		return d.getUTCFullYear()+'-'+z.padZ(d.getUTCMonth()+1)+'-'+z.padZ(d.getUTCDate())+'_'+z.padZ(d.getUTCHours())+z.padZ(d.getUTCMinutes())+z.padZ(d.getUTCSeconds())+'UTC';
	return d.getFullYear()+'-'+z.padZ(d.getMonth()+1)+'-'+z.padZ(d.getDate())+'_'+z.padZ(d.getHours())+z.padZ(d.getMinutes())+z.padZ(d.getSeconds());
}

module.exports.prettyTime = function(date, utc){
	var z = this, d = date ? date : new Date;
	if (utc)
		return z.padZ(d.getUTCMonth()+1)+'/'+z.padZ(d.getUTCDate())+'/'+d.getUTCFullYear()+' '+z.padZ(d.getUTCHours())+':'+z.padZ(d.getUTCMinutes())+':'+z.padZ(d.getUTCSeconds())+' UTC';
	return z.padZ(d.getMonth()+1)+'/'+z.padZ(d.getDate())+'/'+d.getFullYear()+' '+z.padZ(d.getHours())+':'+z.padZ(d.getMinutes())+':'+z.padZ(d.getSeconds());
}

module.exports.padZ = function(n, m){
	if (m == undef)
		m = 2;
	while ((n+'').length < m)
		n = '0'+n;
	return n;
}

module.exports.isNumeric = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n)
}

module.exports.getFirstChild = function(o){
	for (var k in o)
		return o[k]
}

module.exports.getFirstKey = function(o){
	for (var k in o)
		return k
}

// similar to php's array_flip
// if optional useChildKeyInstead is passed, values stay in place and keys are overwritten
module.exports.flipObjKeyVals = function(obj,useChildKeyInstead){
	var newObj = {}, key
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (useChildKeyInstead)
				newObj[obj[key][useChildKeyInstead]] = obj[key]
			else
				newObj[obj[key]] = key
		}
	}
	return newObj
}

module.exports.pluckFromArray = function(array,key,value,fromIndex){
	if (Array.isArray(array)) {
		for (var i=fromIndex||0;i<array.length;++i) {
			if (array[i][key] == value)
				return array[i]
		}
	}
}

