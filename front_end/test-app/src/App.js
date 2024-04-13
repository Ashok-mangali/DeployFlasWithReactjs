// Filename - App.js

// Importing modules
import { useState, useEffect } from "react";
import "./App.css";


function App(){
	const [data, setdata] = useState({})
	useEffect(()=>{
		fetchData();
	},[]);

	const fetchData = async () =>{
		try{
			const response = await fetch("http://127.0.0.1:5000/data")
			const jsonData = await response.json();
			setdata(jsonData)
		}catch(error){
			console.log("Error", error)
		}

	
	}
	return(
		<div className="App">
			<h1>
				Front-end
			</h1>
			<h3>
				{data.Name}
			</h3>
			<h3>
				{data.Age}
			</h3>
			<h3>
				{data.Role}
			</h3>

		</div>
	)
}				

export default App;
