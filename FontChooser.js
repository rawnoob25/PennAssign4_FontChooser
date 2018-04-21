class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.toggleHide = this.toggleHide.bind(this);
		this.state = {bold:this.props.bold, size:Number(this.props.size)};
    }
    
    toggleHide() {
    	const v = document.getElementById('boldCheckbox');
    	if(v.hidden) {
    		if(this.state.bold === 'true'){
    			v.checked = true;
    		} else {
    			v.checked = false;
    		}
    		v.hidden = false;
    		(document.getElementById('decreaseButton')).hidden = false;
    		(document.getElementById('fontSizeSpan')).hidden = false;
    		(document.getElementById('increaseButton')).hidden = false;


    	} else {
    		v.hidden = true;
    		(document.getElementById('decreaseButton')).hidden = true;
    		(document.getElementById('fontSizeSpan')).hidden = true;
    		(document.getElementById('increaseButton')).hidden = true;
    	}
    }

    handleCheck(o) {
	    if(o.checked) {
	    	this.setState({bold:'true'});
	    	o.checked = false;
	    } else {
	    	this.setState({bold:'false'});
	    	o.checked = true;
	    }
    }

    decrement() {
    	const s = this.state.size;
    	if(s>this.props.min){
    		this.setState({size:(s-1)});
    	}
    }

    increment() {
    	const s = this.state.size;
    	if(s<this.props.max){
    		this.setState({size:(s+1)});
    	}
    }

    resetSize() {
    	this.setState({size:Number(this.props.size)});
    }
    render() {
    	const wt = this.state.bold === 'true'?'bold':'normal';
    	const sz = this.state.size;
    	const fontSizeSpanColor = (this.state.size>this.props.min && this.state.size<this.props.max)?'black':'red';
    	const fontSizeSpanStyle = {color:fontSizeSpanColor};
		const textStyle = {fontWeight:wt, fontSize:sz};
		return (
		       <div>
			       <input type="checkbox" id="boldCheckbox" onClick={this.handleCheck.bind(this)} hidden='true'/>
			       <button id="decreaseButton" hidden='true' onClick={this.decrement.bind(this)}>-</button>
			       <span id="fontSizeSpan" hidden='true' style={fontSizeSpanStyle} onClick={this.resetSize.bind(this)}>{this.state.size}</span>
			       <button id="increaseButton" onClick={this.increment.bind(this)} hidden='true'>+</button>
			       <span id="textSpan" style={textStyle} onClick={this.toggleHide}>{this.props.text}</span>
		       </div>
		);
    }
}

