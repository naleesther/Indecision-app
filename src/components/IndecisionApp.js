import React from "react";
import Action from "./Action";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
    };
    handleClearSelectedOption = () =>{
        this.setState(() => ({ selectedOption:undefined }));

    } 
     
   
    handleDeleteOptions = ()=>{
        this.setState (() => ({options: [] }));
    };
  
    handleDeleteOption = (optionToRemove) => {
        this.setState ((prevState) => ({
            options: prevState.options.filter((option) =>{
                return optionToRemove !== option;
            })

        }));
    };
    handlePick = (selectedOption) => {
        const randomNum =Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
            
        }));
    };

    handleAddOption = (option) => {
        if (!option){
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > - 1){
            return 'This option already exist';
        }
        this.setState ((prevState) => ({
             options:prevState.options.concat(option)
            }));

    };
    
    render() {
        const subtitle='Put your life in the hands of a computer';
        return (
            <div>
        <Header  subtitle={subtitle}/>
        <div className="container">
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick = {this.handlePick}
        />
        <div className="widget">
        <Options 
        options={this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOptions
        handleAddOption = {this.handleAddOption}
        />

        </div>
        
        </div>
        <OptionModal 
        selectedOption = {this.state.selectedOption}
        handleClearSelectedOption = {this.handleClearSelectedOption}
        
        />
            </div>
        );
    }
}

export default IndecisionApp;