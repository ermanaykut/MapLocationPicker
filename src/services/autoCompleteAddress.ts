import { OSM_API_KEY } from "../config";

export const getAddressWithComplete = (
    searched: string,
    onSuccess: (value: any) => void,
  ) => {
    var request = new XMLHttpRequest();

    const URL = 'https://api.openrouteservice.org/geocode/autocomplete?';

    request.open(
      'GET',
      URL + `api_key=${OSM_API_KEY}&text=`+
      searched + '&boundary.country=TR',
    );
   
  
    request.setRequestHeader(
      'Accept',
      'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
    );
  
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        onSuccess(JSON.parse(this.responseText));
      }
    };
  
    request.send();
  };