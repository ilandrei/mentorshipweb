export class Listing {
  guid: string;
  title: string;
  description: string;
  latitude: string;
  longitude: string;
  authorName: string;

  constructor(obj: any = null) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}
