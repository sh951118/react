import React, { Fragment, Component } from 'react';

class App extends Component {
    constructor(){
        super(...arguments);
    }

    onLoginSubmit(event){
        event.preventDefault();
        console.log(event.target.email.value + ":" + event.target.password.value);
    }

    render(){
        return (
            <form onSubmit={ this.onLoginSubmit.bind(this) }>
                <div>
                    이메일 : <input name='email' type="text"/>
                </div>
                <br/>
                <div>
                    password : <input name='password' type="password" />
                </div>
                <br/>
                <button type='submit'>로그인</button>
            </form>
        );
    }
}
export { App };