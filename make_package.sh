# Get the current date and format it as YYYYMMDD
DATE=$(date +"%Y%m%d")
# Rename arcgis-connector.html to arcgis-connector.js
mv arcgis-connector.html arcgis-connector.js

if [ -f arcgis-connector-$DATE.zip ]; then
  zip -u arcgis-connector-$DATE.zip arcgis-connector.js reearth.yml
else
  zip arcgis-connector-$DATE.zip arcgis-connector.js reearth.yml
fi

# Rename arcgis-connector.js to its original name
mv arcgis-connector.js arcgis-connector.html