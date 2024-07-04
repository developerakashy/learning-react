import React,{Component} from "react";
import axios from 'axios'

class PostList extends Component{
    constructor(){
        super()

        this.state = {
            posts:[],
            errMsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)

            this.setState({
                posts: res.data
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errMsg: 'Error retreiving data'
            })
        })
    }

    render(){
        const {posts, errMsg} = this.state
        return(
            <div>
                <h1>List Of Post</h1>
                { posts.length ? posts.map(post => <h2 key={post.id}>{post.id} {post.title}</h2> ) : <h2>{errMsg}</h2> }
            </div>
        )
    }
}

export default PostList
