export interface JphUserGeo {
  lat: string;
  lng: string;
}

export interface JphUserAddress {
  city: string;
  geo: JphUserGeo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface JphUserCompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface JphUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: JphUserAddress;
  company: JphUserCompany;
}
