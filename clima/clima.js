const axios=require('axios');

const getClima= async(lat,lng)=>{


	const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=834144c1b43bd296a82370f42472f12d`);
		
	
	return resp.data.main.temp;

}

module.exports={
	getClima
}
