import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }, [])

    if (openingCrawl) {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    } else {
        return (
            <p className={'farGalaxy'}>
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        );
    }


}

export default OpeningCrawl;