import React from 'react'

export default function RecipeList(props) {
  return (
    <div>
          <h1>PCS Recipes</h1>
          <div>
              <ul className="bulletless">{props.recipes}</ul>
          </div>
    </div>
  )
}
