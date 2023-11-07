import { Citrus,Dessert,Boxes,Candy,Cat,CarFront,Carrot,Cherry,Cookie,Croissant,Drama,Fish,FlameKindling,Grape,IceCream2,IceCream } 
from "lucide-react";
const Table=()=>
{
    return (
        <>
        <table border="4px" align="center">
            <tr>
                <td><Citrus /></td>
                <td><Dessert /></td>
                <td><Boxes /></td>
                <td><Candy /></td>
            </tr>
            <tr>
                <td><Cat /></td>
                <td><CarFront /></td>
                <td><Carrot /></td>
                <td><Cherry /></td>
            </tr>
            <tr>
                <td><Cookie /></td>
                <td><Croissant /></td>
                <td><Drama /></td>
                <td><Fish /></td>
            </tr>
            <tr>
                <td><FlameKindling /></td>
                <td><Grape /></td>
                <td><IceCream2 /></td>
                <td><IceCream /></td>
            </tr>
            </table>
            </>
    )
}
export default Table;