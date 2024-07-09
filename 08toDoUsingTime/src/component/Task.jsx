import React, { Component } from 'react'
import AllToDo from './AllToDo'
import CompletedToDo from './CompletedToDo'
import edit from '../assets/edit.svg'
import update from '../assets/update.svg'
import del from '../assets/trash.svg'
import './styles.css'
import LoginPage from './LoginPage'

class Task extends Component{
    constructor(props) {
        super(props);

        this.state = {
          logoutStatus: false,
          taskList: [],
          onGoingTaskList: [],
          delayedTaskList: [],
          completedTaskList: [],
          count: 0,
          datetime: '',
          taskname: '',
          counter: 0
        };


      }





      componentDidMount() {
        if (localStorage.getItem('taskList')) {
          let localStorageTaskList = JSON.parse(localStorage.getItem("taskList"));

          this.setState({
            taskList: localStorageTaskList.map((item) =>
              item.src !== "edit" ? { ...item, src: edit, isDisabled: true } : item
            ),
            count: Number(localStorage.getItem("counter")),
          });
        }

        this.interval = setInterval(this.checkForTaskTimeStatus ,2000)

      }





      checkForTaskTimeStatus = () => {

        let delayedTask = this.state.taskList.map(item =>
            item.username === this.props.username && item.datetime.length > 1?
             new Date() - new Date(`${item.datetime}`) > 0 ? {...item, delayed:true}: {...item, delayed: false} :
             {...item}
            )

        this.setState({
            taskList: delayedTask
        })


      }




      componentDidUpdate(prevProps, prevState) {
        localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
        localStorage.setItem("counter", this.state.count);



        if (prevState.taskList !== this.state.taskList) {
          this.setState({
            onGoingTaskList: this.state.taskList.filter(
              (item) => item.isCompleted === false && item.username === this.props.username && !item.delayed
            ),

            delayedTaskList: this.state.taskList.filter(
              (item) => item.isCompleted === false && item.username === this.props.username && item.delayed
            ),

            completedTaskList: this.state.taskList.filter(
              (item) => item.isCompleted === true && item.username === this.props.username
            ),
          });
        }


        if(this.state.logoutStatus){
          clearInterval(this.interval)
        }


      }

      componentWillUnmount(){
        clearInterval(this.interval)
      }


      addClickHandler = (event) => {
        const {count, taskname, datetime, taskList} = this.state
        console.log("add",datetime )
        let input = taskname;

        let trimmedInputValue = input.trim();

        if (trimmedInputValue < 1) {
          alert(`can't add task since input field or datetime field is empty`);
          return;
        }

        const taskDetail = {
          id: count,
          username: this.props.username,
          taskName: trimmedInputValue,
          isCompleted: false,
          src: edit,
          isDisabled: true,
          datetime:datetime,
          delayed: false
        };


        let newTaskList = [...taskList, taskDetail];

        this.setState({
          taskList: newTaskList,
          count: this.state.count + 1,
          taskname: ''
        });

        event.preventDefault();
      };



      updateTaskStatus(task) {
        this.setState((prevstate) => ({
          taskList: prevstate.taskList.map((item) =>
            item.id === task.id
              ? item.isCompleted
                ? { ...item, isCompleted: false }
                : { ...item, isCompleted: true }
              : item
          ),
        }));
      }

      editTaskName(event, { id, isDisabled }) {
        let element = document.getElementsByClassName(id);
        console.log(element[1])


        if (isDisabled) {
          this.setState({
            taskList: this.state.taskList.map((item) =>
              item.id === id
                ? { ...item, src: update, isDisabled: false }
                : { ...item, src: edit, isDisabled: true }
            ),
          });
        } else {
          this.setState({
            taskList: this.state.taskList.map((item) =>
              item.id === id
                ? { ...item, src: edit, isDisabled: true }
                : { ...item, src: edit, isDisabled: true }
            ),
          });
        }

        if (element[0].value === "") {
          this.setState((prevstate) => ({
            taskList: prevstate.taskList.filter((item) => item.id !== id),
          }));
        } else {
          this.setState((prevstate) => ({
            taskList: prevstate.taskList.map((item) =>
              item.id === id ? { ...item, datetime: element[1].value, taskName: element[0].value.trim() } : item
            ),
          }));
        }

        setTimeout(() => {
          element[0].focus();
        }, 100);


        event.preventDefault();
      }

      removeTask = ({ id }) => {
        this.setState((prevstate) => ({
          taskList: prevstate.taskList.filter((item) => item.id !== id),
        }));
      };


      formHandler = (e) => {
        e.preventDefault()
      }


      inputHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
      }


      logout = () => {
        localStorage.removeItem('isLoggedIn')
        this.setState({
            logoutStatus:true
        })
      }

      setCompletionDateTime = (e, {id}) => {
        this.setState({
          taskList: this.state.taskList.map(item => item.id === id ? {...item, datetime: e.target.value} : {...item})
        })
      }


      render() {
        let delayedTask = this.state.delayedTaskList.map(
          (task) => (
             <form
              className={task.isDisabled ? `task-view delayed` : `task-view delayed focused`}
              key={task.id}
            >
              <div className='task-info' >

                <div className='task-input'>
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => this.updateTaskStatus(task)}
                  />
                  <input
                    type="text"
                    className={task.id}
                    id={task.id}
                    defaultValue={task.taskName}
                    disabled={task.isDisabled}
                  />
                </div>

                <div className='task-btn'>
                  <button
                    className="del-btn"
                    type="button"
                    onClick={() => this.removeTask(task)}
                  >
                    <img className="trash" src={del} alt="del" />
                  </button>
                  <button
                    className="edit-btn"
                    type="submit"
                    onClick={(event) => this.editTaskName(event, task)}
                  >
                    <img className="edit" src={task.src} />
                  </button>
                </div>
              </div>

              <div className='task-time'>
                <input
                  className={task.id}
                  type="datetime-local"
                  defaultValue={task.datetime}
                  disabled={task.isDisabled}
                />
              </div>
            </form>

          )
        )

        let taskToBeCompleted = this.state.onGoingTaskList.map(
          (task) => (
            <form
              className={task.isDisabled ? `task-view` : `task-view focused`}
              key={task.id}
            >
              <div className='task-info'>
                <div className='task-input'>
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => this.updateTaskStatus(task)}
                  />
                  <input
                    type="text"
                    className={task.id}
                    id={task.id}
                    defaultValue={task.taskName}
                    disabled={task.isDisabled}
                  />
                </div>

                <div className='task-btn'>
                  <button
                    className='del-btn'
                    type='button'
                    onClick={() => this.removeTask(task)}
                  >
                    <img className="trash" src={del} alt='del' />
                  </button>

                  <button
                    className='edit-btn'
                    type='submit'
                    onClick={(event) => this.editTaskName(event, task)}
                  >
                    <img className="edit" src={task.src} />
                  </button>
                </div>

              </div>


              <div className='task-time'>
                <input
                  type="datetime-local"
                  className={task.id}
                  defaultValue={task.datetime}
                  disabled={task.isDisabled}
                />
              </div>
            </form>

          )
        );

        let taskCompleted = this.state.completedTaskList.map(
          (task) => (
            <form
              className={task.isDisabled ? `task-view completed` : `task-view completed focused`}
              key={task.id}
            >
              <div className='task-info'>

                <div className='task-input'>
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => this.updateTaskStatus(task)}
                    />
                  <input
                    type="text"
                    className={`${task.id} stroke`}
                    id={task.id}
                    value={task.taskName}
                    disabled
                    />
                </div>
                <div>
                  <button className='del-btn' onClick={() => this.removeTask(task)}>
                    <img className='trash' src={del} alt="del" />
                  </button>
                </div>

              </div>

              <div className='task-time'>
                <input
                  className={task.id}
                  type="datetime-local"
                  value={task.datetime}
                  disabled
                />
              </div>
            </form>
          )
        );


        return (
            this.state.logoutStatus ? <LoginPage isLoggedIn={false} username={''}/> :
          <>
          <header>


            <form onSubmit={this.formHandler}>
              <input
                type="text"
                name='taskname'
                value={this.state.taskname}
                placeholder="write your next task..."
                onChange={this.inputHandler}
              />
              <input
                type="datetime-local"
                name='datetime'
                value={this.state.date}
                onChange={this.inputHandler}
                // required
            />
              <button type="submit" onClick={this.addClickHandler}>
                ＋
              </button>
            </form>
          </header>


            <AllToDo onGoingTask={taskToBeCompleted.reverse()} delayedTask={delayedTask.reverse()}/>
            <CompletedToDo completedList={taskCompleted.reverse()} />
            <button className='logout' onClick={this.logout}>Logout</button>
            <div className='username'>{this.props.username}</div>
          </>
        );
      }
}

export default Task
