import { useEffect } from "react";

function App() {

	useEffect(() => {
		fetch(
			"http://localhost:1337/api/tasks",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `bearer ${import.meta.env.VITE_API_KEY}`
				}
			}
		).then(res => res.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => console.log(err))
		
	}, [])
	
	return <div className="App"></div>
}

export default App
