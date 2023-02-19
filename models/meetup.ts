class Meetup {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;

  constructor(id: string, title: string, image: string, description: string, address: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.address = address;
  }
}

export default Meetup;
