import { useState } from 'react';



function Header({title = "Hello, World!"}){
    console.log(title);
    return (<h1>Simon says, {title}</h1>)
}

function HomePage(){

    const names = ['Ada', 'Grace', 'Margaret'];

    const [likes, setLikes] = useState(0);

    function handleClick(){
        console.log("Increment like count")
        setLikes(likes + 1)


    }

    return (
        <div>
            {/* nested component */}
            <Header/>
            <Header title="Reacting"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}

export default function HomePage(){
    
}



