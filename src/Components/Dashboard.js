import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItems';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <h1 className="alert alert-warning">welcome to dashboard</h1>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </div>
        )
    }
}


export default Dashboard;