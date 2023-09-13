reearth.ui.show(`
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap');

  html,
  body {
    margin: 0;
    width: 312px;
  }

  #wrapper {
    box-sizing: border-box;
    display: flex;
    width: 312px;
    padding: 12px;
    flex-direction: column;
    border-radius: 4px;
    background: #F5F5F5;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .title-p {
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    color: #13C2C2;
    text-align: center;
  }

  .close {
    width: 20px;
    height: 20px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.625 4.375L4.375 15.625" stroke="%23595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.625 15.625L4.375 4.375" stroke="%23595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: center center;
  }

  .layer-title {
    display: flex;
    margin: 0;
    padding: 8px 12px;
    justify-content: center;
    border-radius: 4px 4px 0px 0px;
    background: #FFFFFF;
    color: #13C2C2;
    border: none;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }

  .layer-list {
    display: flex;
    flex-direction: column;
  }

  .layer-list__item {
    display: flex;
    padding: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #E6E6E6;
    color: #141414;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    border: none;
    margin-bottom: 6px;
  }

  .layer-list__item:last-of-type {
    margin-bottom: 0;
  }


  .item-title__wrap {
    display: flex;
    flex-direction: row;
  }

  .item-marker {
    width: 20px;
    height: 20px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.93766 16.1042C10.7091 15.49 11.4803 14.7959 12.202 14.034C14.307 11.8122 15.5837 9.47155 15.5837 7.08333C15.5837 3.17132 12.4123 0 8.50033 0C4.58831 0 1.41699 3.17132 1.41699 7.08333C1.41699 9.47155 2.69369 11.8122 4.79861 14.034C5.52037 14.7959 6.29156 15.49 7.06299 16.1042C7.33342 16.3196 7.58504 16.5099 7.81168 16.6736C7.94979 16.7733 8.05043 16.843 8.10741 16.881C8.34534 17.0397 8.65531 17.0397 8.89324 16.881C8.95022 16.843 9.05086 16.7733 9.18897 16.6736C9.41561 16.5099 9.66723 16.3196 9.93766 16.1042ZM11.1736 13.0597C10.5008 13.7699 9.77789 14.4205 9.05518 14.996C8.85791 15.1531 8.67196 15.2955 8.50033 15.4223C8.32869 15.2955 8.14274 15.1531 7.94547 14.996C7.22276 14.4205 6.49982 13.7699 5.82704 13.0597C3.94758 11.0758 2.83366 9.03365 2.83366 7.08333C2.83366 3.95372 5.37071 1.41667 8.50033 1.41667C11.6299 1.41667 14.167 3.95372 14.167 7.08333C14.167 9.03365 13.0531 11.0758 11.1736 13.0597ZM8.50033 9.91667C6.93552 9.91667 5.66699 8.64814 5.66699 7.08333C5.66699 5.51853 6.93552 4.25 8.50033 4.25C10.0651 4.25 11.3337 5.51853 11.3337 7.08333C11.3337 8.64814 10.0651 9.91667 8.50033 9.91667ZM9.91699 7.08333C9.91699 7.86574 9.28273 8.5 8.50033 8.5C7.71792 8.5 7.08366 7.86574 7.08366 7.08333C7.08366 6.30093 7.71792 5.66667 8.50033 5.66667C9.28273 5.66667 9.91699 6.30093 9.91699 7.08333Z" fill="%23141414"/></svg>');
    background-repeat: no-repeat;
    background-position: center center;
  }

  .item-eye {
    width: 20px;
    height: 20px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.633488 7.23029C0.361227 7.65186 0.17435 7.98409 0.0747807 8.18322C-0.0249269 8.38264 -0.0249269 8.61736 0.0747807 8.81678C0.17435 9.01591 0.361227 9.34814 0.633488 9.76971C1.0841 10.4674 1.6158 11.1647 2.22804 11.8178C4.01009 13.7187 6.10597 14.875 8.5 14.875C10.894 14.875 12.9899 13.7187 14.772 11.8178C15.3842 11.1647 15.9159 10.4674 16.3665 9.76971C16.6388 9.34814 16.8256 9.01591 16.9252 8.81678C17.0249 8.61736 17.0249 8.38264 16.9252 8.18322C16.8256 7.98409 16.6388 7.65186 16.3665 7.23029C15.9159 6.53257 15.3842 5.83526 14.772 5.18221C12.9899 3.28135 10.894 2.125 8.5 2.125C6.10597 2.125 4.01009 3.28135 2.22804 5.18221C1.6158 5.83526 1.0841 6.53257 0.633488 7.23029ZM3.26159 10.8489C2.71171 10.2623 2.23071 9.63152 1.82358 9.00113C1.70803 8.8222 1.60554 8.65415 1.51638 8.5C1.60554 8.34584 1.70803 8.1778 1.82358 7.99887C2.23071 7.36848 2.71171 6.73765 3.26159 6.15112C4.79984 4.51032 6.55552 3.54167 8.50004 3.54167C10.4446 3.54167 12.2002 4.51032 13.7385 6.15112C14.2884 6.73765 14.7694 7.36848 15.1765 7.99887C15.2921 8.1778 15.3945 8.34584 15.4837 8.5C15.3945 8.65415 15.2921 8.8222 15.1765 9.00113C14.7694 9.63152 14.2884 10.2623 13.7385 10.8489C12.2002 12.4897 10.4446 13.4583 8.50004 13.4583C6.55552 13.4583 4.79984 12.4897 3.26159 10.8489ZM8.5 11.3333C6.93519 11.3333 5.66667 10.0648 5.66667 8.5C5.66667 6.93519 6.93519 5.66667 8.5 5.66667C10.0648 5.66667 11.3333 6.93519 11.3333 8.5C11.3333 10.0648 10.0648 11.3333 8.5 11.3333ZM9.91667 8.5C9.91667 9.2824 9.2824 9.91667 8.5 9.91667C7.7176 9.91667 7.08333 9.2824 7.08333 8.5C7.08333 7.7176 7.7176 7.08333 8.5 7.08333C9.2824 7.08333 9.91667 7.7176 9.91667 8.5Z" fill="%23141414"/></svg>');
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
<div id="wrapper">
  <div class="title">
    <p class="title-p">ArcGIS connector</p>
    <div class="close"></div>
  </div>
  <p class="layer-title">Layers: </p>
  <div id="layer-list" class="layer-list">
  </div>
  <script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
  <script>
    let reearth;
    let property;
    let layers;
    let newProperty;
    let layerListItemID = "layerListItem_ID__";

    let startTime = new Date();

    // expireIn indicate token validity period. 60 is for debugging. It should be 7000 in actual operation.
    // const expireIn = 7000;
    const expireIn = 60;


    //   copy from right side panel menu 
    // let client_id = 'mkE152IGDlgiIG3S'
    // client_secret = 'c579230c978a4368825f8f2b8f915aa5'
    // let itemID = 'dd9e20275574425787115096736578b6';

    // new api
    // let API_URL = 'https://swn33dllx8.execute-api.ap-northeast-1.amazonaws.com/dev/'
    // end copy



    window.addEventListener("message", async function (e) {
      if (e.source !== parent) return;
      reearth = e.source.reearth;
      layers = reearth.layers.layers;
      newProperty = e.data.property;

      // getting data from widget
      if (JSON.stringify(property) != JSON.stringify(newProperty)) {
        property = newProperty;
        let clientData = property;
        handleData(clientData);
      }
    })




    function handleData(files) {
      console.log("files: ", files)
      let API_URL = files.client_data.URL;
      let client_id = files.client_data.client_ID;
      let client_secret = files.client_data.client_secret;


      let TokenURL = 'https://www.arcgis.com/sharing/rest/oauth2/token'
      let token_url = TokenURL + "?client_id=" + client_id + "&grant_type=client_credentials&client_secret=" + client_secret;
      console.log("token_url: ", token_url);
      let token = "";
      let param = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Esri-Authorization': ""
      };

      getToken();

      function getToken() {
        fetch(token_url).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Could not reach the API" + response.statusText);
          }
        }).then(function (data) {
          token = "Bearer " + data['access_token'];
          param['X-Esri-Authorization'] = token;
        }).catch(function (error) {
          console.log(error)
        });
      }
      //  ./getToken()

      let dataList = files.data_list;
      console.log("dataList: ", dataList);

      document.getElementById("layer-list").remove();
      let layerList = document.createElement('div');
      layerList.classList.add("layer-list");
      layerList.id = "layer-list";
      document.getElementById('wrapper').appendChild(layerList);

      i = 0;

      //   console.log("dataItem: ", dataItem);

      dataList.forEach(dataItem => {

        let layerName = dataItem.layer_name;
        let itemID = dataItem.symbol_ID;
        // console.log(itemID);
       
        let layerList__item = document.createElement('button');
        layerList__item.classList.add('layer-list__item');
        layerListItemID = layerListItemID + i++;
        layerList__item.id = layerListItemID;
        layerList__item.setAttribute('item-ID', itemID);

        let itemTitle__wrap = document.createElement('div');
        itemTitle__wrap.classList.add('item-title__wrap');

        let itemMarker = document.createElement('div');
        itemMarker.classList.add('item-marker');

        let itemTitle = document.createElement('div');
        itemTitle.classList.add('item-title');
        itemTitle.id = "itemTitle" + i++;
        itemTitle.textContent = layerName;

        let itemEye = document.createElement('div');
        itemEye.classList.add('item-eye');


        layerList.appendChild(layerList__item);
        layerList__item.appendChild(itemTitle__wrap);
        itemTitle__wrap.appendChild(itemMarker);
        itemTitle__wrap.appendChild(itemTitle);
        layerList__item.appendChild(itemEye);



        document.getElementById(layerListItemID).addEventListener('click', download);

        function download() {
          let currentTime = new Date();
          let timeDiff = (currentTime.getTime() - startTime.getTime()) / 1000;
          if (timeDiff > expireIn) {
            console.log("token is expiered!");
            getToken();
            startTime = new Date();
          }
          fetch(API_URL, {
            method: 'POST',
            headers: param,
            body: JSON.stringify({ "id": itemID })
          }).then(function (response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Could not reach the API" + response.statusText);
            }
          }).then(function (data) {
            if (!data.hasOwnProperty("errorMessage")) {
              //  let geojsonData = JSON.parse(data)
              let geojsonData = data;
              console.log("geojsonData: ", geojsonData);
              let center = turf.center(geojsonData)
              // parent.postMessage({type: "showGeojson", data: geojsonData, center}, "*")
              showGeojson(geojsonData, center)
            } else {
              //Show error
              if (data.errorType == "Function.ResponseSizeTooLarge") {
                alert("File size is too large")
              } else {
                // console.log(data)
              }
            }
          });
        }
        //  ./download()
      });
    };
    //  ./handleData()

    let geojsonLayerId
    function showGeojson(geojsonData, center) {
      // if (geojsonLayerId) {
        // console.log("geojsonLayerId: ", geojsonLayerId);
        // refresh
        // reearth.layers.overrideProperty(geojsonLayerId, {
        //   default: {
        //     url: [],
        //   },
        // });

        // // override
        // reearth.layers.overrideProperty(geojsonLayerId, {
        //   default: {
        //     url: geojsonData,
        //   },
        // });
      // } else {
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
      // }

      reearth.camera.flyTo({
        lat: center.geometry.coordinates[1],
        lng: center.geometry.coordinates[0],
        height: 6000
      }, {
        duration: 2
      });
    }
    //  ./showGeojson()

  </script>
  `);

  reearth.on("update", send);
  send();

  function send() {
  reearth.ui.postMessage({
  property: reearth.widget.property,
  layer: reearth.layers.layers
  })
  }