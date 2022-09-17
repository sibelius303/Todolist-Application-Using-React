import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setImputValue] = useState('');
	const [inputPrioridad, setImputPrioridad] = useState ('');
	const [ todos , setTodos ] = useState([])

	function handleChange(e){
		const value= e.target.value
		setImputValue(value);
	}

	function changePrioridad(e){
		const prioridadI = e.target.value;
		setImputPrioridad(prioridadI);

	}

	
	function handleAdd(e){
		let copia = [...todos];
		copia.push(inputValue);
		copia.push(inputPrioridad);
		setTodos(copia);
		setImputValue('');
		setImputPrioridad('');

	}


	return (
		<div className="text-center">
			<div className="todoImput">
				<input type="text" placeholder="Añadir Tarea" value={inputValue} onChange={handleChange}/>
				<input type="text" placeholder="Prioridad de la Tarea" value={inputPrioridad} onChange={changePrioridad}/>
				<button onClick={handleAdd}>Crear Tarea</button>
			</div>
			<div className="todoContainer">
				{
					todos.map((todo,index)=> {
						return (
							<div className="newTodo" key={index}>
								{todo}
							</div>
						) 
					})
				}	
			</div>

		</div>

	);
};

export default Home;
