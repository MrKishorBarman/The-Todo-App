import React, { useState } from 'react'
import { useTodo } from '../contexts'


//! Manual
const TodoForm = () => {

  const { addTodo } = useTodo()

  const [todo, setTodo] = useState('')

  const add = (e) => {
    e.preventDefault()

//*   In addition to the boolean value false, javascript also considers the other five values as equivalent to FALSE and they are, undefined, NaN, null, 0, and ""(empty string).The number 0 in any data type such as int(0), float(0.0), BigInt(0n), hexadecimal(0x00), negatives(-0) is considered as a falsy value.

    if (!todo) return

    //*     addTodo({id: Date.now(), todo: todo, completed: false})

    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <form
      className="flex"

      //! Manual  
      onSubmit={add}
//*   The onSubmit event is used when you want to trigger an action or validation when a form is submitted. This event occurs specifically when a user tries to submit a form, either by clicking a submit button or pressing enter within a form field


    >
      <input

        //! Manual 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
//*   onChange is typically used with form elements like input fields, checkboxes, and select boxes. It is triggered when the value of the element changes, such as when a user types something into a text field or selects an option from a dropdown. This event is often used in combination with validation to ensure that the user's input meets certain criteria before submitting the form


//*    onClick, on the other hand, is triggered when a user clicks on an HTML element, such as a button or a link. This event is commonly used to perform actions when a user interacts with a specific element, like submitting a form or navigating to a new page 

        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  )
}

export default TodoForm
