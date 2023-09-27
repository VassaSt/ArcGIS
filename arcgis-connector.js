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
    margin-bottom: 6px;
  }

  .layer-list__item:last-of-type {
    margin-bottom: 0;
  }


  .item-title__wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 8px 60% 8px 8px;
    background: inherit;
    border: none;
    cursor: pointer;
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
    border: none;
    padding: 16px 16px;
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
    cursor: pointer;
  }

  ._show {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.633488 7.23029C0.361227 7.65186 0.17435 7.98409 0.0747807 8.18322C-0.0249269 8.38264 -0.0249269 8.61736 0.0747807 8.81678C0.17435 9.01591 0.361227 9.34814 0.633488 9.76971C1.0841 10.4674 1.6158 11.1647 2.22804 11.8178C4.01009 13.7187 6.10597 14.875 8.5 14.875C10.894 14.875 12.9899 13.7187 14.772 11.8178C15.3842 11.1647 15.9159 10.4674 16.3665 9.76971C16.6388 9.34814 16.8256 9.01591 16.9252 8.81678C17.0249 8.61736 17.0249 8.38264 16.9252 8.18322C16.8256 7.98409 16.6388 7.65186 16.3665 7.23029C15.9159 6.53257 15.3842 5.83526 14.772 5.18221C12.9899 3.28135 10.894 2.125 8.5 2.125C6.10597 2.125 4.01009 3.28135 2.22804 5.18221C1.6158 5.83526 1.0841 6.53257 0.633488 7.23029ZM3.26159 10.8489C2.71171 10.2623 2.23071 9.63152 1.82358 9.00113C1.70803 8.8222 1.60554 8.65415 1.51638 8.5C1.60554 8.34584 1.70803 8.1778 1.82358 7.99887C2.23071 7.36848 2.71171 6.73765 3.26159 6.15112C4.79984 4.51032 6.55552 3.54167 8.50004 3.54167C10.4446 3.54167 12.2002 4.51032 13.7385 6.15112C14.2884 6.73765 14.7694 7.36848 15.1765 7.99887C15.2921 8.1778 15.3945 8.34584 15.4837 8.5C15.3945 8.65415 15.2921 8.8222 15.1765 9.00113C14.7694 9.63152 14.2884 10.2623 13.7385 10.8489C12.2002 12.4897 10.4446 13.4583 8.50004 13.4583C6.55552 13.4583 4.79984 12.4897 3.26159 10.8489ZM8.5 11.3333C6.93519 11.3333 5.66667 10.0648 5.66667 8.5C5.66667 6.93519 6.93519 5.66667 8.5 5.66667C10.0648 5.66667 11.3333 6.93519 11.3333 8.5C11.3333 10.0648 10.0648 11.3333 8.5 11.3333ZM9.91667 8.5C9.91667 9.2824 9.2824 9.91667 8.5 9.91667C7.7176 9.91667 7.08333 9.2824 7.08333 8.5C7.08333 7.7176 7.7176 7.08333 8.5 7.08333C9.2824 7.08333 9.91667 7.7176 9.91667 8.5Z" fill="%23141414"/></svg>');
    background-repeat: no-repeat;
    background-position: center center;
  }

  ._hide {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.04565 3.98846L0.195262 1.13807C-0.0650873 0.877722 -0.0650873 0.455612 0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4.50362 3.56081C4.50847 3.56552 4.51327 3.57032 4.51801 3.5752L7.05546 6.11265C7.05701 6.11418 7.05855 6.11573 7.06009 6.11728L9.88281 8.94C9.8843 8.94148 9.88579 8.94297 9.88727 8.94446L12.4236 11.4808C12.4285 11.4855 12.4333 11.4903 12.438 11.4952L15.8047 14.8619C16.0651 15.1223 16.0651 15.5444 15.8047 15.8047C15.5444 16.0651 15.1223 16.0651 14.8619 15.8047L11.884 12.8269C10.7307 13.569 9.3885 13.9774 8 14C5.7468 14 3.77421 12.9117 2.09698 11.1226C1.52075 10.508 1.02033 9.8517 0.596224 9.19502C0.339978 8.79825 0.164094 8.48557 0.0703819 8.29814C-0.0264925 8.10439 -0.023193 7.87566 0.0792296 7.68478C0.83357 6.279 1.8398 5.02644 3.04565 3.98846ZM3.9914 4.93421C2.96687 5.80092 2.09956 6.83879 1.42837 8.00213C1.512 8.14663 1.60805 8.30407 1.71628 8.47165C2.09946 9.06496 2.55217 9.65868 3.06969 10.2107C4.51746 11.755 6.16987 12.6667 7.9891 12.6668C9.02133 12.6499 10.0276 12.3692 10.9143 11.8571L9.36655 10.3094C8.75636 10.6918 8.00709 10.8167 7.29027 10.6336C6.34544 10.3923 5.60766 9.65456 5.36637 8.70973C5.18331 7.99291 5.30817 7.24364 5.69064 6.63345L3.9914 4.93421ZM6.68526 7.62807C6.60569 7.86671 6.59375 8.12728 6.65824 8.37981C6.77889 8.85223 7.14778 9.22111 7.62019 9.34176C7.87272 9.40625 8.1333 9.39431 8.37193 9.31474L6.68526 7.62807ZM13.4641 10.6368C13.1824 10.3997 13.1462 9.97916 13.3832 9.69744C13.8293 9.16735 14.2271 8.59877 14.572 7.9985C14.4883 7.85382 14.3921 7.69617 14.2837 7.52835C13.9005 6.93504 13.4478 6.34132 12.9303 5.78929C11.4825 4.24501 9.83013 3.33333 7.99843 3.33333C7.57882 3.33235 7.16051 3.38015 6.75194 3.47579C6.39344 3.5597 6.03479 3.33711 5.95088 2.97861C5.86696 2.62011 6.08956 2.26146 6.44806 2.17755C6.95726 2.05835 7.4786 1.99877 8 2C10.2532 2 12.2258 3.08833 13.903 4.87737C14.4792 5.49201 14.9797 6.1483 15.4038 6.80498C15.66 7.20175 15.8359 7.51443 15.9296 7.70186C16.0263 7.89527 16.0232 8.12357 15.9213 8.31428C15.4947 9.11227 14.986 9.86355 14.4034 10.5559C14.1664 10.8376 13.7458 10.8738 13.4641 10.6368Z" fill="%23C7C5C5"/></svg>');
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
  <input type="hidden" id="data-store" />
  <div id="layer-list" class="layer-list">

  </div>
  <script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
  <script>
    let reearth;
    let property;
    let layers;
    let newProperty;
    // let layerList = document.getElementById("layer-list");
    let itemEyeID = "itemEye_ID__";

    let startTime = new Date();

    // expireIn indicate token validity period. 60 is for debugging. It should be 7000 in actual operation.
    // const expireIn = 7000;
    const expireIn = 600;

    let dataStore = [];
    dataStore.push({
      itemId: "",
      layerId: "",
      arr: [],
    });

    let iconCoords = Array();



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
        handleData(property);
      }
    });

    function handleData(files) {
      // console.log("files: ", files)
      let API_URL = files.client_data.URL;
      let client_id = files.client_data.client_ID;
      let client_secret = files.client_data.client_secret;


      let TokenURL = 'https://www.arcgis.com/sharing/rest/oauth2/token'
      let token_url = TokenURL + "?client_id=" + client_id + "&grant_type=client_credentials&client_secret=" + client_secret;
      // console.log("token_url: ", token_url);
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
      //  ./getToken


      document.getElementById("layer-list").remove();
      let layerList = document.createElement('div');
      layerList.classList.add("layer-list");
      layerList.id = "layer-list";
      document.getElementById('wrapper').appendChild(layerList);

      let dataList = files.data_list;
      // console.log("dataList: ", dataList);

      i = 0;

      //   console.log("dataItem: ", dataItem);
      // console.log("dataType: ", dataType);


      dataList.forEach(dataItem => {

        if (dataItem.layer_name && dataItem.symbol_ID) {
          i++

          let layerName = dataItem.layer_name;
          let itemID = dataItem.symbol_ID;
          // console.log(itemID);

          let layerList__item = document.createElement('div');
          layerList__item.classList.add('layer-list__item');

          let itemTitle__wrap = document.createElement('button');
          itemTitle__wrap.classList.add('item-title__wrap');
          itemTitle__wrap.id = itemID;


          let itemMarker = document.createElement('div');
          itemMarker.classList.add('item-marker');

          let itemTitle = document.createElement('div');
          itemTitle.classList.add('item-title');
          itemTitle.id = "itemTitle__" + i;
          itemTitle.textContent = layerName;

          let itemEye = document.createElement('button');
          itemEye.classList.add('item-eye');
          itemEye.classList.add('_show');
          itemEyeID = itemEyeID + i;
          itemEye.id = itemEyeID;


          layerList.appendChild(layerList__item);
          layerList__item.appendChild(itemTitle__wrap);
          itemTitle__wrap.appendChild(itemMarker);
          itemTitle__wrap.appendChild(itemTitle);
          layerList__item.appendChild(itemEye);


          let found = dataStore.some(obj => obj.itemId == itemID)
          // console.log(found);
          if (!found) {
            dataStore.push({ itemId: itemID, layerId: "", arr: [], })
          } else {
            let findItemId = dataStore.find(obj => obj.itemId === itemID)
            let layerId = findItemId.layerId;
            layerList__item.id = layerId;
            if (layerId && dataItem.data_type !== "default") {
              console.log(layerId);
              // getting layer Id and data type to override properties, if file downloaded already
              let geoJsonData = reearth.layers.findById(layerId).property.default.url
              console.log(geoJsonData);
              overrideProperties(geoJsonData, dataItem, layerId);
            }
          }

          // console.log("1", dataStore);
          document.getElementById('data-store').setAttribute('data-store', JSON.stringify(dataStore));
        }

        function download(btn_id) {
          let itemID = btn_id;
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

              let center = turf.center(geojsonData);
              // parent.postMessage({type: "showGeojson", data: geojsonData, center}, "*")
              showGeojson(geojsonData, center, btn_id)
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
        //  ./download


        download_btns = document.querySelectorAll('.item-title__wrap');
        // console.log("download_btns: ", download_btns);

        let buttonPressed = e => {
          var isButton = e.target.tagName;

          if (isButton === "BUTTON") {
            let btn_id = e.target.id;
            // console.log(btn_id);

            download(btn_id);
          } else {
            let btn_id = e.target.parentElement.closest('button').id;
            download(btn_id);
          }
        }

        for (let download_btn of download_btns) {
          download_btn.addEventListener("click", buttonPressed);
        }

      });
      //   ./forEach

      

      // hide and show layers
      eye_btns = document.querySelectorAll('.item-eye');

      let handleLayer = e => {
        let layer_id = e.target.parentElement.id;
        reearth.layers.layers;

        var btnClass = e.target.classList;
        // console.log(btnClass);

        if (btnClass.contains('_show')) {
          reearth.layers.hide(layer_id);

          let findlayerId = dataStore.find(obj => obj.layerId === layer_id);
          if (findlayerId.arr.length > 0) {
            findlayerId.arr.forEach((element) => {
              let markerId = element;
              reearth.layers.hide(markerId);
            });
          }

          btnClass.remove('_show');
          btnClass.add('_hide');
        } else {
          reearth.layers.show(layer_id);

          let findlayerId = dataStore.find(obj => obj.layerId === layer_id);
          if (findlayerId.arr.length > 0) {
            findlayerId.arr.forEach((element) => {
              let markerId = element;
              reearth.layers.show(markerId);
            });
          }

          btnClass.remove('_hide');
          btnClass.add('_show');
        }

      }

      for (let eye_btn of eye_btns) {
        eye_btn.addEventListener("click", handleLayer);
      }
    };
    //  ./handleData


    let geojsonLayerId
    function showGeojson(geojsonData, center, btn_id) {
      if (!document.getElementById(btn_id).parentElement.hasAttribute('id')) {
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

        reearth.camera.flyTo({
          lat: center.geometry.coordinates[1],
          lng: center.geometry.coordinates[0],
          height: 50000
        }, {
          duration: 2
        });


        let found = dataStore.some(obj => obj.itemId == btn_id)
        if (found) {
          let filtrItemId = dataStore.find(obj => obj.itemId === btn_id)
          filtrItemId.layerId = geojsonLayerId;
          // console.log(filtrItemId);
        }

        document.getElementById(btn_id).parentElement.setAttribute('id', geojsonLayerId);
        // let test = document.getElementById(btn_id).parentElement.id;
      } else {
        // console.log("has id");

        reearth.camera.flyTo({
          lat: center.geometry.coordinates[1],
          lng: center.geometry.coordinates[0],
          height: 50000
        }, {
          duration: 2
        });
      }
    };
    //  ./showGeojson


    // override properties from default point marker or icon to circle
    function overridePoinProperties(geoJsonData, layerId, strokeProp, radius, pointFill) {

      let geoJson = turf.featureCollection([]);

      turf.featureEach(geoJsonData, function (currentFeature, featureIndex) {

        var center = turf.getCoord(currentFeature);
        var options = { steps: 10, units: 'meters' };
        var circle = turf.circle(center, radius, options);
        circle.properties["fill"] = pointFill;
        // console.log("circle", circle);

        var line = turf.polygonToLine(circle);
        // console.log(line)
        line.properties = strokeProp;
        geoJson.features.push(circle);
        geoJson.features.push(line);
      });

      parent.postMessage({ type: "Properties", layerId, geoJson }, "*");
    }


    // override properties from default point marker or circle to icon
    function overrideIconProperties(iconCoords, layerId, imageUrl, imageSize) {
      let geoJson = turf.featureCollection([]);
      parent.postMessage({ type: "Properties", layerId, geoJson }, "*");

      let findlayerId = dataStore.find(obj => obj.layerId === layerId)
      // console.log(findlayerId.arr.length);
      if (findlayerId.arr.length == 0) {

        iconCoords.forEach((element) => {

          let long = element[0];
          let lat = element[1];

          let markerId = reearth.layers.add({
            extensionId: "marker",
            isVisible: true,
            title: "marker",
            property: {
              default: {
                image: imageUrl,
                imageSize: imageSize,
                heightReference: "clamp",
                location: {
                  lat: lat,
                  lng: long,
                },
              }
            }
          });

          let findlayerId = dataStore.find(obj => obj.layerId === layerId)
          if (findlayerId) {
            findlayerId.arr.push(markerId);
          }
        })
      } else {
        findlayerId.arr.forEach((element) => {
          let markerId = element;
          reearth.layers.show(markerId);
          reearth.layers.overrideProperty((markerId), {
            default: {
              image: imageUrl,
              imageSize: imageSize,
            }
          });
        });
      }
    }

    function overrideLineProperties(geoJsonData, layerId, lineProp) {

      let geoJson = turf.featureCollection([]);

      turf.featureEach(geoJsonData, function (currentFeature, featureIndex) {
        currentFeature.properties = lineProp;
        geoJson.features.push(currentFeature);
      })
      parent.postMessage({ type: "Properties", layerId, geoJson }, "*");
    }


    function overridePolygonProperties(geoJsonData, layerId, polygonFill, polygonProp) {
      let geoJson = turf.featureCollection([]);

      // Need to check  if it Polygon or not 

      turf.featureEach(geoJsonData, function (currentFeature, featureIndex) {
        currentFeature.properties["fill"] = polygonFill;
        let line = turf.multiLineString(turf.getCoords(currentFeature)[0]);
        line.properties = polygonProp;

        geoJson.features.push(currentFeature);
        geoJson.features.push(line);
        // console.log(line);
      });

      // console.log("Polygon :", geoJson);

      parent.postMessage({ type: "Properties", layerId, geoJson }, "*");
    }

    // getting properties from widget and override them
    function overrideProperties(geoJsonData, dataItem, layerId) {
      let dataType = dataItem.data_type

      // take not only dataType, but geometry type too
      switch (dataType) {
        case 'point':

        for (let i = 0; i < geoJsonData.features.length; i++) {
            if (geoJsonData.features[i].geometry.type === "Point" || "MultiPoint") {
             console.log("Point", geoJsonData.features[i].geometry.type)
             } else {
              console.log("Else :", geoJsonData.features[i].geometry.type)
             }
           }

          let findlayerId = dataStore.find(obj => obj.layerId === layerId);
          if (findlayerId.arr.length > 0) {
            findlayerId.arr.forEach((element) => {
              let markerId = element;
              reearth.layers.hide(markerId);
            });
          }

          // console.log(dataItem.point_color, dataItem.point_size, dataItem.point_outline_color, dataItem.point_outline_width);
          let strokeProp = ({ "stroke": dataItem.point_outline_color || "#000000", "stroke-width": dataItem.point_outline_width || "3" });
          let radius = dataItem.point_size || "1500";
          let pointFill = dataItem.point_color || "yellow";

          overridePoinProperties(geoJsonData, layerId, strokeProp, radius, pointFill);
          break

        case 'icon':

        for (let i = 0; i < geoJsonData.features.length; i++) {
            if (geoJsonData.features[i].geometry.type === "Point" || "MultiPoint") {
             console.log("Point", geoJsonData.features[i].geometry.type)
             } else {
              console.log("Else :", geoJsonData.features[i].geometry.type)
             }
           }

          let imageUrl = dataItem.image_URL
          let imageSize = dataItem.image_size || "1";

          turf.featureEach(geoJsonData, function (currentFeature, featureIndex) {
            let coord = turf.getCoords(currentFeature);
            iconCoords.push(coord);
          })


          overrideIconProperties(iconCoords, layerId, imageUrl, imageSize);
          // console.log(dataItem.image_URL, dataItem.image_size);
          break

        case 'line':

        for (let i = 0; i < geoJsonData.features.length; i++) {
            if (geoJsonData.features[i].geometry.type === "LineString" || "MultiLineString") {
             console.log("Lines", geoJsonData.features[i].geometry.type)
             } else {
              console.log("Else :", geoJsonData.features[i].geometry.type)
             }
           }

          // console.log(dataItem.line_color, dataItem.line_width);
          let lineProp = ({ "stroke": dataItem.line_color || "yellow", "stroke-width": dataItem.line_width || "1" });

          overrideLineProperties(geoJsonData, layerId, lineProp);
          break

        case 'polygon':

        for (let i = 0; i < geoJsonData.features.length; i++) {
            if (geoJsonData.features[i].geometry.type === "Polygon" || "MultiPolygon") {
             console.log("Polygon", geoJsonData.features[i].geometry.type)
             } else {
              console.log("Else :", geoJsonData.features[i].geometry.type)
             }
           }

          // console.log(dataItem.polygon_color, dataItem.outline_color, dataItem.outline_width);
          let polygonFill = dataItem.polygon_color || "yellow";
          let polygonProp = ({ "stroke": dataItem.outline_color || "#000000", "stroke-width": "1" });
          // console.log(polygon);

          overridePolygonProperties(geoJsonData, layerId, polygonFill, polygonProp);
          break

        default:
          console.log("other");
          break
      }
    }

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

  reearth.on("message", (msg) => {
  if (msg.type == "Properties") {
  reearth.layers.overrideProperty(msg.layerId, {
  default: {
  url: msg.geoJson,
  type: "geojson",
  clampToGround: true
  },
  })
  }
  })