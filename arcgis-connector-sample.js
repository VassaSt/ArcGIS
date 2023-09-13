reearth.ui.show(`
  <style>
    body {
      margin: 0;
    }
    #wrapper {
      background: #232226;
      height: 100%;
      color: white;
      border-radius: 5px;
      padding: 20px 0;
    }
  </style>
  <div id="wrapper">
    <button onclick="download()">Download</button>
  </div>
  <script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
  <script>
    
    let startTime = new Date();

    // expireIn indicate token validity period. 60 is for debugging. It should be 7000 in actual operation.
    // const expireIn = 7000;
    const expireIn = 60;

    //   copy from right side panel menu 
    //let API_URL = 'https://0dfs94wlr3.execute-api.ap-northeast-1.amazonaws.com/dev/'
    let API_URL = 'https://swn33dllx8.execute-api.ap-northeast-1.amazonaws.com/dev/'
    let client_id = 'mkE152IGDlgiIG3S'
    client_secret = 'c579230c978a4368825f8f2b8f915aa5'
    let itemId = 'dd9e20275574425787115096736578b6';
    //   end copy

    let TokenURL = 'https://www.arcgis.com/sharing/rest/oauth2/token'
    let token_url = TokenURL + "?client_id=" + client_id + "&grant_type=client_credentials&client_secret=" + client_secret;
    let token="";
    let param = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Esri-Authorization': ""
        };

    get_token();

    function get_token() {
      fetch(token_url).then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not reach the API" + response.statusText);
        }
      }).then(function(data) {
        token="Bearer " + data['access_token'];
        param['X-Esri-Authorization'] = token;
      }).catch(function(error) {
        console.log(error)
      });
    }



    function download() {
      let currentTime = new Date();
      let timeDiff = (currentTime.getTime() - startTime.getTime()) / 1000;
      if ( timeDiff > expireIn) {
	console.log("token is expiered!");
        get_token();
        startTime=new Date();
      }
      fetch(API_URL, {
	method: 'POST',
	headers: param,
	body: JSON.stringify({"id": itemId})
      }).then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not reach the API" + response.statusText);
        }
      }).then(function(data) {
        if(!data.hasOwnProperty("errorMessage")) {
//          let geojsonData = JSON.parse(data)
          let geojsonData = data
          let center = turf.center(geojsonData)
          // parent.postMessage({type: "showGeojson", data: geojsonData, center}, "*")
          showGeojson(geojsonData, center)
        } else {
          //Show error
          if(data.errorType == "Function.ResponseSizeTooLarge") {
            alert("File size is too large")
          } else {
            console.log(data)
          }
        }
      });
    }

    window.addEventListener("message", function (e) {
      reearth = e.source.reearth
    })

    let geojsonLayerId
    function showGeojson(geojsonData, center){
      if(geojsonLayerId) {
        // refresh
        reearth.layers.overrideProperty(geojsonLayerId, {
          default: {
            url: [],
          },
        });

        // override
        reearth.layers.overrideProperty(geojsonLayerId, {
          default: {
            url: geojsonData,
          },
        });
      } else {
        geojsonLayerId = reearth.layers.add({
          extensionId: "resource",
          isVisible: true,
          title: "geojson-data",
          property: {
            default: {
              url: geojsonData,
              type: "geojson",
              clampToGround: true
            },
          },
        })
      }

      reearth.camera.flyTo({
        lat: center.geometry.coordinates[1],
        lng: center.geometry.coordinates[0],
        height: 3000
      }, {
        duration: 2
      });
    }
  </script>
`);

reearth.ui.postMessage({
  type: "initWidget",
  reearth: reearth
});

