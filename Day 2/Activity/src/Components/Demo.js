import {Award} from 'lucide-react';
import "../Assests/css/style.css";
const Demo = () =>
{
    return (
        <>
             <h1 align="center">STUDENT DETAILS</h1>
            <form className="f1">
                <input type="text" name="name" id="" placeholder="Name" className="fx1"/>
                    <input type="email" name="" id="" placeholder="Email" className="fx1"/>
                    <input type="number" name="" id="" placeholder="Phone" className="fx1"/>
                    <input type="text" name="" id="" placeholder="Username" className="fx1"/>
                    <input type="password" name="" id="" placeholder="Password" className="fx1"/>

                    <button className='mybtn'><Award/>Register</button>
            </form>
        </>
    )
}
export default Demo;