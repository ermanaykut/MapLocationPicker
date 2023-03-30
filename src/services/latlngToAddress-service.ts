import { OSM_API_KEY } from "../config";


export const getAddressFromPoint = (
    longitude: number,
    latitude: number,
    onSuccsess: (value: any) => void,
  ) => {
    const URL = 'https://api.openrouteservice.org/geocode/reverse?';

    var request = new XMLHttpRequest();
  
    request.open(
      'GET',
      URL + `api_key=${OSM_API_KEY}&point.lon=${longitude}&point.lat=${latitude}`,
    );
  
    request.setRequestHeader(
      'Accept',
      'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
    );
  
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        onSuccsess(JSON.parse(this.responseText));
      }
    };
  
    request.send();
  };
  //