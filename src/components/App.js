import React, {useState} from "react";
import Nav from "./Nav";
import Piglist from "./Piglist"
import Filter from "./Filter"
import hogs from "../porkers_data";

function App() {
	const [sortBy, setSortBy] = useState("name")

	function filterSelection({target: {value}}) {
		setSortBy(value)
	}

	const filteredHogs = hogs
		.sort((hog1, hog2) => {
			if (sortBy === "name") {
				return hog1.name.localeCompare(hog2.name)
			} else return hog1.weight - hog2.weight
		})

	console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<Filter filterSelection={filterSelection} sortBy={sortBy} />
			<Piglist pigs={filteredHogs} />
		</div>
	);
}

export default App;
