
function cakes(recipe, available) {
	let allIngr = true;
	let canPrepare = [];

	for (key in recipe) {
		if (available[key]>=recipe[key]) {
			canPrepare.push(available[key]/recipe[key])
		} else if ( available[key]<recipe[key]){
			allIngr = false;
		}
		if ( !Object.keys(available).includes(key) ) {
			allIngr = false;
		}
	}

	if (canPrepare.length>0 && allIngr) {
		return Math.floor(Math.min(...canPrepare))
	} else {
		return 0;
	}



  }
