export class Listing {
  _id: string;
  title: string;
  description: string;
  latitude: string;
  longitude: string;
  authorName: string;
  authorid: string;

  constructor(obj: any = null) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}
