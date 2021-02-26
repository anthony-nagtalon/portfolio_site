import React from 'react';
import Container from 'react-bootstrap/Container'

import Card from '../components/Card'

import firstImg from '../assets/images/card1.png';
import secondImg from '../assets/images/card2.jpg';
import thirdImg from '../assets/images/card3.jpg';
import { Row } from 'react-bootstrap';


class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Title 1',
                    imgSrc: firstImg,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Title 2',
                    imgSrc: secondImg,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title 3',
                    imgSrc: thirdImg,
                    link: 'https://google.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(items.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={e => this.handleCardClick(item.id, e)} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;