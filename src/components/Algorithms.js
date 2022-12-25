import homeIcon from "./assets/home.png";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";


function Algorithms() {

    const [algorithms] = useState([
        { title: "Binary search", id: 1, pagePath: 'binarysearch' },
        { title: "Breath-first search", id: 2, pagePath: 'unfinished' },
        { title: "Depth-first search", id: 3, pagePath: 'unfinished' },
        { title: "Merge sort", id: 4, pagePath: 'unfinished' },
        { title: "Quick sort", id: 5, pagePath: 'unfinished' },
        { title: "Kruskal's algrithm", id: 6, pagePath: 'unfinished' },
        { title: "Floyd Warshall algorithm", id: 7, pagePath: 'unfinished' },
        { title: "Dijkstra's algrithm", id: 8, pagePath: 'unfinished' },
        { title: "Bellman Ford algorithm", id: 9, pagePath: 'unfinished' },
        { title: "Kadane's algorithm", id: 10, pagePath: 'unfinished' },
        { title: "Lee algorithm", id: 11, pagePath: 'unfinished' },
        { title: "Flood fill algorithm", id: 12, pagePath: 'unfinished' },
        { title: "Union find", id: 13, pagePath: 'unfinished' },
        { title: "Insertion sort", id: 14, pagePath: 'unfinished' },
        { title: "Heap sort", id: 15, pagePath: 'unfinished' },
        { title: "Quickselect algorithm", id: 16, pagePath: 'unfinished' }
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
                        algorithms.filter((item) =>
                            item.title.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((item) => (
                            <Link key={item.id} className="react-link" to={`/algorithms/${item.pagePath}`}><Card color={cardColor} key={item.id} title={item.title} /></Link>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}
export default Algorithms;