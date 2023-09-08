import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from "@mui/material";
import { Product } from "../../models/products";
interface Props {
  product:Product
}
export default function ProductCard({product}:Props) {
    return (
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
                <ListItemText>
                    {product.name} - {product.price}
                </ListItemText>
            </ListItemAvatar>
        </ListItem>
    );
}
