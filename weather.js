// let data = {
//     "coord": {
//       "lon": 116.3972,
//       "lat": 39.9075
//     },
//     "weather": [
//       {
//         "id": 803,
//         "main": "Clouds",
//         "description": "曇りがち",
//         "icon": "04d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 9.94,
//       "feels_like": 8.65,
//       "temp_min": 9.94,
//       "temp_max": 9.94,
//       "pressure": 1022,
//       "humidity": 14,
//       "sea_level": 1022,
//       "grnd_level": 1016
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 2.65,
//       "deg": 197,
//       "gust": 4.84
//     },
//     "clouds": {
//       "all": 53
//     },
//     "dt": 1646542386,
//     "sys": {
//       "type": 1,
//       "id": 9609,
//       "country": "CN",
//       "sunrise": 1646520066,
//       "sunset": 1646561447
//     },
//     "timezone": 28800,
//     "id": 1816670,
//     "name": "北京市",
//     "cod": 200
//   };
  
  ////////// 課題3-2 ここからプログラムを書こう
  let b = document.querySelector('#sendRequest');
  b.addEventListener('click', sendRequest);
  
  
  // 通信を開始する処理
  function sendRequest() {
    let i = document.querySelector('input[name="id"]');
    let id=i.value;
      // URL を設定
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
  
      // 通信開始
      axios.get(url)
          .then(showResult)   // 通信成功
          .catch(showError)   // 通信失敗
          .then(finish);      // 通信の最後の処理
  }
  
  // 通信が成功した時の処理
  function showResult(resp) {
      // サーバから送られてきたデータを出力
      let data = resp.data;
  
      // data が文字列型なら，オブジェクトに変換する
      if (typeof data === 'string') {
          data = JSON.parse(data);
      }
  
      // data をコンソールに出力
      console.log(data);
  
      // data.x を出力
      console.log(data.name);
      console.log(data.coord.lon);
      console.log(data.coord.lat);
      console.log(data.main.temp_min);
      console.log(data.main.temp_max);
      console.log(data.main.humidity);
      console.log(data.wind.speed);
      console.log(data.wind.deg);
      let p1 = document.querySelector('p#name');
      p1.textContent = ("都市名: "+data.name);
      let p2 = document.querySelector('p#lon');
      p2.textContent = ("緯度: "+data.coord.lon);
      let p3 = document.querySelector('p#lat');
      p3.textContent = ("経度: "+data.coord.lat);
      let p4 = document.querySelector('p#temp_min');
      p4.textContent = ("最低気温: "+data.main.temp_min);
      let p5 = document.querySelector('p#temp_max');
      p5.textContent = ("最高気温: "+data.main.temp_max);
      let p6 = document.querySelector('p#humidity');
      p6.textContent = ("湿度: "+data.main.humidity);
      let p7 = document.querySelector('p#speed');
      p7.textContent = ("風速: "+data.wind.speed);
      let p8 = document.querySelector('p#deg');
      p8.textContent = ("風向: "+data.wind.deg);
  }
  
  // 通信エラーが発生した時の処理
  function showError(err) {
      console.log(err);
  }
  
  // 通信の最後にいつも実行する処理
  function finish() {
      console.log('Ajax 通信が終わりました');
  }
