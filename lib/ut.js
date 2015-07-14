var undef;

module.exports.fileTime =  function(date, utc){
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
