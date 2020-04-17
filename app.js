const lugar= require('./lugar/lugar');
const clima= require('./clima/clima');

const argv=require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Direcion de la ciudad para obtener el clima',
		demand: true
	}
}).argv;



/*lugar.getLugarLatLng(argv.direccion)
.then( lugar=>{

	console.log(lugar);

	clima.getClima(lugar.lat,lugar.lng)
	.then(temp=>{
		console.log(`temp: ${temp}`);
	})
	.catch(e=>{
		console.log(e);
	});
	

});*/


	const getInfo = async(direccion)=>{
		try{
			let lugarLatLang = await lugar.getLugarLatLng(direccion);
			let temp		 = await clima.getClima(lugarLatLang.lat,lugarLatLang.lng);

			return `El Clima de ${direccion} es de ${temp}`;
		}catch(e){
			return e;
		}
	}


	getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);