import React from 'react';

export default class FoodListItem extends React.Component {
    render(){
        // this.props.name = 'kickscar';
        // 단방향임으로 타고 넘어 온 값은 수정이 안된다.
        return (
            <li>{this.props.name} : {this.props.quantity}</li>
        );
    }
}