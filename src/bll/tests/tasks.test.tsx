import {StateType} from "bll/store";
import {v1} from "uuid";
import {FilterTaskType, TasksReducer, TasksStateType} from "bll/reducers/tasksReducer";
import {
    addTask,
    changeTaskStatus,
    changeTaskTitle, filterCheckedItems,
    filterTasksByStatus, removeTasksStatus,
    setCheckedItems
} from "bll/actions/tasksActions";
import exp from "constants";

let startState: TasksStateType
beforeEach(() => {
    startState = {
        "tasks": [
            {id: '1',
                title: "Тестовое задание",
                status: false,
                description:'Тестовое задание',
                date: '27.09.2023',
                timeAtWork: 10,
                finishDate: '28.09.2023',
                priority: 1,},
            {id: '2',
                title: "Покрытие тестами",
                status: false,
                description:'Сделать тесты',
                date: '27.09.2023',
                timeAtWork: 10,
                finishDate: '28.09.2023',
                priority: 1,

            }
        ],
        "filter": 'all',
        "checkedId": []

    };
})
test("correct task should be added ", () => {
        const action = addTask("learn JS",'learn all about objects','12.09.2023')
        const endState = TasksReducer(startState, action)
        expect(endState.tasks.length).toBe(3)
        expect(endState.tasks[2].id).toBeDefined()
        expect(endState.tasks[2].title).toBe('learn JS')

    }
)
test("title of specified task should be changed", () => {
    const action = changeTaskTitle('1', 'Hello World')
    const endState = TasksReducer(startState, action)
    expect(endState.tasks[0].title).toBe('Hello World')
    expect(endState.tasks[0].status).toBe(false)
})
test("status of specified task should be changed", () => {
    const action = changeTaskStatus('1', true)
    const endState = TasksReducer(startState, action)
    expect(endState.tasks[0].status).toBe(true)
    expect(endState.tasks[1].status).toBe(false)
})
test("correct filter of specified task should be changed", () => {
    const newFilter: FilterTaskType = 'completed'
    const action = filterTasksByStatus(newFilter)
    const endState = TasksReducer(startState, action)
    expect(endState.filter).toBe(newFilter)
})
test("correct checked of specified tasks should be changed", () => {
    const action = setCheckedItems(['1', '2'])
    const endState = TasksReducer(startState, action)
    expect(endState.checkedId.length).toBe(2)
})
test("correct filter checked of specified task should be changed", () => {
    const action = filterCheckedItems(['1'])
    const endState = TasksReducer(startState, action)
    expect(endState.checkedId.length).toBe(1)
})
test("remove status of specified task should be changed ",()=>{
    const action = removeTasksStatus(true)
    const endState = TasksReducer(startState, action)
    expect(endState.tasks[0].status).toBe(true)
    expect(endState.tasks[1].status).toBe(true)
})
