import React from 'react'
import { useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

  const { data: todos, isLoading } = useGetTodosQuery();

  return (
    <>
      <div>TodoApp - RTK Query</div>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>
      <pre>...</pre>

      <ul>
        {todos?.map(({ id, title, completed }) =>
          <li key={id}>
            <strong> {completed ? 'Done' : 'Pending'} </strong>
            {title}
          </li>
        )}
      </ul>

      <button>
        Next Todo
      </button>
    </>
  )
}
