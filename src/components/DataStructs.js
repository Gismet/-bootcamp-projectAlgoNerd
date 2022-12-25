import homeIcon from "./assets/home.png";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function DataStructures() {

    const [dataStructures] = useState([
        { title: "Arrays", id: 17, pagePath: 'array' },
        { title: "Linked lists", id: 18, pagePath: 'unfinished' },
        { title: "Stacks", id: 19, pagePath: 'unfinished' },
        { title: "Queues", id: 20, pagePath: 'unfinished' },
        { title: "Hash tables", id: 21, pagePath: 'unfinished' },
        { title: "Trees", id: 22, pagePath: 'unfinished' },
        { title: "Heaps", id: 23, pagePath: 'unfinished' },
        { title: "Graphs", id: 24, pagePath: 'unfinished' },
        { title: "Tries", id: 25, pagePath: 'unfinished' },
        { title: "Caches", id: 26, pagePath: 'unfinished' },
        { title: "Bloom Filters", id: 27, pagePath: 'unfinished' },
        { title: "Skip lists", id: 28, pagePath: 'unfinished' },
        { title: "Grids", id: 29, pagePath: 'unfinished' },
        { title: "Spartial trees", id: 30, pagePath: 'unfinished' },
        { title: "B-trees", id: 31, pagePath: 'unfinished' },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value);

    }

    const [darkMode, setDarkMode] = useState('');
    const [cardColor, setCardColor] = useState('')

    const handleDarkMode = () => {
        let toggle = document.querySelector('.darkmode-toggle');
        let switcher = document.querySelector(".darkmode-switcher");

        toggle.classList.toggle('on-off');
        switcher.classList.toggle('slide-mode');
        if (darkMode !== 'darkmode') {
            setDarkMode('darkmode');
            setCardColor('card-color')
        } else {
            setDarkMode('');
            setCardColor('');
        }
    }

    return (
        <div className="algorithms">

            <div className="topnav">
                <ul className="algo-navbar-links">
                    <li><Link to="/"><img src={homeIcon} alt="home icon" /></Link></li>
                    <li className="right"><input className="algo-search-box" type="text" placeholder="search algorithm" onChange={handleSearchInput} /></li>
                </ul>
            </div>

            <div className={`page-content ${darkMode}`}>
                <DarkModeToggle clicker={handleDarkMode} />
                <div className="flex">
                    {
                        dataStructures.filter((item) =>
                            item.title.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((item) => (
                            <Link key={item.id} className="react-link" to={`/datastructures/${item.pagePath}`}><Card color={cardColor} key={item.id} title={item.title} /></Link>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}
export default DataStructures;