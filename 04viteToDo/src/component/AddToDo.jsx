import React,{Component} from "react";
import ShowTODo from "./ShowToDo";
import CompletedToDo from "./CompletedToDo";
import del from '../assets/trash.svg'
import edit from '../assets/edit.svg'
import update from '../assets/update.svg'
import './styles.css'

class AddToDo extends Component{
    constructor(){
        super()

        this.state = {
            taskList: [],
            onGoingTaskList: [],
            completedTaskList: [],
            count: 0
        }

        this.inputRef = React.createRef()

    }

    componentDidMount(){

        if(localStorage.length > 0){
            let localStorageTaskList = JSON.parse(localStorage.getItem('taskList'))

            this.setState({
                taskList: localStorageTaskList.map(item => item.src !== 'edit' ? {...item, src:edit, isDisabled:true} : item),
                count: Number(localStorage.getItem('counter'))
            })
        }

        this.inputRef.current.focus()
        console.log("component did mount")

        return null
    }




    componentDidUpdate(prevProps, prevState){
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
        localStorage.setItem('counter', this.state.count)

        if(prevState.taskList !== this.state.taskList){
            console.log('component didupdate inside if')
            this.setState({
                onGoingTaskList: this.state.taskList.filter(item => item.isCompleted === false),
                completedTaskList: this.state.taskList.filter(item => item.isCompleted === true)
            })
        }



    }



    addClickHandler = (event) => {
        let input = this.inputRef.current

        let trimmedInputValue = input.value.trim()

        if(trimmedInputValue < 1){
            alert(`can't add task since input field is empty`)
            input.focus()
            return
        }

        const taskDetail = {
            id: this.state.count,
            taskName: trimmedInputValue,
            isCompleted: false,
            src:edit,
            isDisabled: true
        }

        let newTaskList = [...this.state.taskList,taskDetail]

        this.setState({
            taskList: newTaskList,
            count: this.state.count + 1
        })

        input.value = ''
        input.focus()
        event.preventDefault()
    }





    updateTaskStatus(task){

        this.setState(prevstate => ({
            taskList: prevstate.taskList.map(item =>
                item.id === task.id ? item.isCompleted ? {...item, isCompleted:false} : {...item, isCompleted:true}
                : item
            )
        }))

    }


    editTaskName(event, {id, isDisabled}){
        let element = document.getElementsByClassName(id)

        console.log("Non-Trimmed:",element[0].value, element[0].value.length)
        console.log("Trimmed: ", element[0].value, element[0].value.trim().length )

        if(isDisabled){
            this.setState({
                taskList: this.state.taskList.map(item =>
                    item.id === id ? {...item, src:update, isDisabled: false} : {...item, src:edit, isDisabled:true}
                )
            })

        }else{
            this.setState({
                taskList: this.state.taskList.map(item =>
                    item.id === id ? {...item, src:edit, isDisabled:true} : {...item, src:edit, isDisabled: true}
                )
            })
        }


        if(element[0].value === ''){
            this.setState(prevstate => ({
                taskList: prevstate.taskList.filter(item => item.id !== id)
            }))

        }else{
            this.setState(prevstate => ({
                taskList: prevstate.taskList.map(item =>
                    item.id === id ? {...item, taskName:element[0].value.trim()}
                    : item
                )
            }))
        }


        setTimeout(()=>{
            element[0].focus()
        },100)

        console.log("focused")

        event.preventDefault()

    }



    removeTask = ({id}) => {

        this.setState((prevstate) => ({
            taskList: prevstate.taskList.filter(item => item.id !== id)
        }))

    }

    render(){
        console.log("rendered")

        let taskToBeCompleted = this.state.onGoingTaskList.map(task =>
            // <section className={task.isDisabled ? `taskView` : `taskView focused`} key={task.id}>
                <form className={task.isDisabled ? `taskView` : `taskView focused`} key={task.id}>
                    <div>
                        <input type="checkbox" checked={task.isCompleted} onChange={() => this.updateTaskStatus(task)}/>
                        <input type="text" className={task.isCompleted ? `stroke ${task.id}` : `${task.id}`} id={task.id} defaultValue={task.taskName} disabled={task.isDisabled}/>
                    </div>
                    {console.log(task.taskName.length)}
                    <div>
                        <button className="del-btn" type="button" onClick={() => this.removeTask(task)}><img className="trash" src={del} alt="del"/></button>
                        <button className="edit-btn" type="submit" onClick={(event) => this.editTaskName(event,task)}><img className="edit" src={task.src} /></button>
                    </div>
                </form>
            // </section>

        )

        let taskCompleted = this.state.completedTaskList.map(task =>
            // <section className="taskView" key={task.id}>
                <form className={task.isDisabled ? `taskView` : `taskView focused`} key={task.id}>
                    <div>
                        <input type="checkbox" checked={task.isCompleted} onChange={() => this.updateTaskStatus(task)}/>
                        <input type="text" className={task.isCompleted ? `stroke ${task.id}` : `${task.id}`}  id={task.id}  value={task.taskName} disabled/>
                    </div>
                    <div>
                        <button className="del-btn" onClick={() => this.removeTask(task)}><img className="trash" src={del} alt="del"/></button>
                    </div>
                </form>
            // </section>

        )

        return(

            <>
            <form className="addToDo">
                <input type="text" placeholder="write your next task..." ref={this.inputRef}/>
                <button type="submit" onClick={this.addClickHandler}>＋</button>
            </form>

            <ShowTODo onGoingTask={taskToBeCompleted.reverse()} />
            <CompletedToDo completedList={taskCompleted.reverse()}/>

            </>
        )
    }
}

export default AddToDo
