import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/action/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(personObj);
        // 直接使用createAddPersonAction是没有用的
        // 得需要调用容器提供的操作方法
        this.props.AddPerson(personObj)
    }
    render() {
        return (
            <div>
                <h3>Person</h3>
                <input ref={c=>this.nameNode=c} type="text" placeholder="输入名字" />
                <input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(person=>{
                            return <li key={person.id}>{person.name}---{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({persons:state.persons}),// 映射状态
    {
        AddPerson:createAddPersonAction
    }// 映射状态的方法
)(Person)
