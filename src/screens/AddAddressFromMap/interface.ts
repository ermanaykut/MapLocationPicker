export interface IMapFeature {
    accuracy: string;
    continent: string;
    continent_gid: string;
    country: string;
    country_a: string;
    country_gid: string;
    county: string;
    county_a: string;
    county_gid: string;
    gid: string;
    id: string;
    label: string;
    layer: string;
    locality: string;
    locality_gid: string;
    name: string;
    region: string;
    region_a: string;
    region_gid: string;
    source: string;
    source_id: string;
    addendum?: any;
    location: {
      latitude: number;
      longitude: number;
    };
  }