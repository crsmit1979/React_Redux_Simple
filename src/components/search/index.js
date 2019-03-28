import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {connect} from 'react-redux';
import {doIncrement, addPatient, deletePatient} from '../../actions/patientActions';
import {bindActionCreators} from 'redux';

class PageHeader extends React.PureComponent{
    render() {
        return (
            <h1>Patient Search - {this.props.title}</h1>
        );
    }
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}

class DeleteButton extends React.PureComponent {
    render() {
        return <a onClick={this.props.onDelete}>Delete</a>
    }
}

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    toggleState() {
        //this.setState({visible:!this.state.visible});
    }
    deleteItem(itm){
        this.props.actions.deletePatient(itm);
    }
    
    addItem() {
        console.log("adding item")
        this.props.actions.addPatient(this.state.name);
    }
    changeName(e){
        this.setState({name: e.target.value});
    }
    render() {

        return (
            <div>
                {this.props.counter}
                <button onClick={()=>this.props.actions.doIncrement(4)}>Increment</button>
                <PageHeader title="richard"></PageHeader>
                Name: <input type='name' value={this.state.name} onChange={(e)=>this.changeName(e)}/>
                <button onClick={()=>this.addItem()}>Add</button>
                <button onClick={()=>this.toggleState()}>Toggle</button>
                        <ul>
                        {
                            this.props.names.map((itm, idx) => {
                                return <li key={idx}>
                                            {itm.name} 
                                            <DeleteButton onDelete={()=>this.deleteItem(itm)}></DeleteButton>
                                        </li>;
                            })
                        }
                        </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.counter,
        names: state.names,
        name:state.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({doIncrement, addPatient, deletePatient}, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);