import React, { Component } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getItems();
    };

    onDeleteClick(id) {
        this.props.deleteItem(id);
    };

    render() { //EL ERROR SALE POR EL TRANSITION, SI AL HACER DEPLOY O ALGO ASI TIRA ERROR, BORRALO Y CAMBIALO POR UN DIV NORMAL Y YA FUE

        const { items } = this.props.item;
        return (
            <div className="container">
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {this.props.isAuthenticated
                                    ?
                                    <Button
                                        className="btn btn-danger sm remove-btn"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;
                                    </Button>
                                    :
                                    null
                                    }
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default  connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);