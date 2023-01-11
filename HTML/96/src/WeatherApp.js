import React from 'react'
import GetWeather from './GetWeather'
import Todo from './Todo'

export default function WeatherApp({todos}) {
    return (
        todos.map(todo =>{
            return <Todo key={todo.id} todo={todo}/>
        })
  
  )
}
