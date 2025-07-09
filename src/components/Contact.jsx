import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function getPlanets() {
        const res = await fetch(`${base_url}/v1/planets`);
        const data = await res.json();
        setPlanets(data.map(item => item.name));
    }

    useEffect(() => {
        getPlanets().then(() => console.log('Planets were loaded'));
    }, [])

    return (
        <form className="container" onSubmit={e => {
            e.preventDefault();
        }}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label>Planet
                <select name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.."></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Contact;