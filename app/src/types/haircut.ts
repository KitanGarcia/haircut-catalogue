import { ObjectId } from "mongodb";

interface Haircut {
  _id?: ObjectId;
  id: number;
  price: number;
  imageUrl: string;
}

export default Haircut;
