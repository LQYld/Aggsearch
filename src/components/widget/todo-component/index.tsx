import {
  currentTodoItem,
  localStorageCurrentTodoItemName,
  isBrowser
} from '@/jotai'
import { IconInbox } from '@douyinfe/semi-icons/lib/es'
import { useAtom } from 'jotai'
import type { ITodoList } from '@/jotai/types'
import './styles.css'
export default function TodoComponent() {
  const stopColor = '#b1a8fe'
  const [todoList, setTodoList] = useAtom(currentTodoItem)
  const updateToDoItemChange = (index) => {
    const copyTodoList = JSON.parse(JSON.stringify(todoList))
    copyTodoList[index].checked = !copyTodoList[index].checked
    setTodoList(copyTodoList)
    if (isBrowser()) {
      window.localStorage.setItem(
        localStorageCurrentTodoItemName,
        JSON.stringify(copyTodoList)
      )
    }
  }
  return (
    <div className="relative">
      <svg
        viewBox="0 0 0 0"
        style={{
          position: 'absolute',
          zIndex: '-1',
          opacity: 0
        }}
      >
        <defs>
          <linearGradient
            id="boxGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="25"
            y2="25"
          >
            <stop offset="0%" stopColor={stopColor} />
            <stop offset="100%" stopColor={stopColor} />
          </linearGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor={stopColor} />
            <stop offset="100%" stopColor={stopColor} />
          </linearGradient>

          <path
            id="todo-line"
            stroke="url(#lineGradient)"
            d="M21 12.3h168v0.1z"
          ></path>
          <path
            id="todo-box"
            stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          ></path>
          <path
            id="todo-check"
            stroke="url(#boxGradient)"
            d="M10 13l2 2 5-5"
          ></path>
          <circle id="todo-circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>
      <div className="todo-list">
        {(todoList as ITodoList[]).map((node, nodeIndex) => {
          return (
            <label className="todo" key={`todo_component_${nodeIndex}`}>
              <input
                className="todo-state"
                type="checkbox"
                checked={node.checked}
                onChange={() => {
                  updateToDoItemChange(nodeIndex)
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 200 25"
                className="todo-icon"
              >
                <use xlinkHref="#todo-line" className="todo-line"></use>
                <use xlinkHref="#todo-box" className="todo-box"></use>
                <use xlinkHref="#todo-check" className="todo-check"></use>
                <use xlinkHref="#todo-circle" className="todo-circle"></use>
              </svg>

              <div className="todo-text">{node.value}</div>
            </label>
          )
        })}
        {todoList.length <= 0 && (
          <div className="no-empty">
            <div>
              <IconInbox size="extra-large" />
            </div>
            <div>No data available today .</div>
          </div>
        )}
      </div>
    </div>
  )
}
