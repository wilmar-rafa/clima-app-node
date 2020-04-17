const axios=require('axios');

const getLugarLatLng= async(dir)=>{


	const encodeUrl=encodeURI(dir);
	//console.log(encodeUrl);

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
	  timeout: 100000,
	  headers: {'x-rapidapi-key': '2f106fb6ffmshfdcf144b3b03fcfp1af49fjsn29dff6aa1723'}
	});


	const resp= await instance.get();
		/*.then(response=>{
			console.log(response.data.Results[0]);
		})
		.catch(error=>{
			console.log("Error",error);
		});*/
	if (resp.data.Results.length===0){
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data		= resp.data.Results[0];
	const direccion	= data.name;
	const lat 		= data.lat;
	const lng 		= data.lon;

	return {
		direccion,
		lat,
		lng
	}

}

module.exports={
	getLugarLatLng
}
