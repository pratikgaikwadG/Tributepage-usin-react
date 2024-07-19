import React from "react";

class HeaderByFunction extends React.Component {
    render(){
        console.log(this.props);

        return(
            <>
            <h1>Virat Kohli - A RUN MACHINE{this.props.name}</h1>
            </>
        );
    }
}

export default HeaderByFunction