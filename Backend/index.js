const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://mdblist.p.rapidapi.com/',
  params: {s: 'jaws'},
  headers: {
    'X-RapidAPI-Key': '5e74bb87abmshd5708532ca7a530p1479a3jsn1589ed8ca33b',
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}