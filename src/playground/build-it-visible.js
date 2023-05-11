class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility : false
        };

    }
    handleVisibilityToggle(){
        this.setState((prevState) =>{
            return{
                visibility:!prevState.visibility
            };

        });
    }
    render(){
        return(
       
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide details':'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey.These are the details you'll see!</p>
                    </div>
    
                )}
            </div>
        );
   

    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


