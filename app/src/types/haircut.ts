import { ObjectId } from "mongodb";

interface Haircut {
  name: {
    _id?: ObjectId;
    id: number;
    price: number;
    imageUrl: string;
  };
}

export default Haircut;
