import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => setPlanets(data.map(item => item.name)));
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