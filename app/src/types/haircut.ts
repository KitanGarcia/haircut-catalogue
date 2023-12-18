import { ObjectId } from "mongodb";

interface Haircut {
  _id: ObjectId;
  price: number;
  imageUrl: string;
  name?: string;
}

export default Haircut;
