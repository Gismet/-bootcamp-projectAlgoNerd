import homeIcon from "./assets/home.png";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function ProblemSolving() {

    const [techniques] = useState([
        { title: "Two pointers", id: 32, pagePath: 'unfinished' },
        { title: "Sliding windows", id: 33, pagePath: 'unfinished' },
        { title: "Recursion", id: 34, pagePath: 'unfinished' },
        { title: "Backtracking", id: 35, pagePath: 'unfinished' },
        { title: "Greedy", id: 36, pagePath: 'unfinished' },
        { title: "Divide and conquer", id: 37, pagePath: 'unfinished' },
        { title: "Prefix sum", id: 38, pagePath: 'unfinished' },
        { title: "Dynamic programming", id: 39, pagePath: 'unfinished' },
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
                        techniques.filter((item) =>
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
export default ProblemSolving;