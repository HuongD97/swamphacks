import axios from 'axios';
import Item from '../components/Item';

const ITEMS = [
    { id: 1, name: 'Tomato', quantity: 2, providerId: 2, imageURL: 'https://cdn-images-1.medium.com/max/1600/1*utOmkc67LDksWHdUZhrMrw.jpeg'},
    { id: 2, name: 'Pear', quantity: 3, providerId: 2, imageURL: 'http://www.specialtyproduce.com/sppics/3341.png'},
    { id: 3, name: 'Banana', quantity: 4, providerId: 3, imageURL: 'https://cdn.shopify.com/s/files/1/1078/0310/products/fruit-banana-dole-1_1024x1024.jpg?v=1500709708'}
]
class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    async componentDidMount() {
        this.setState({ items: ITEMS});
    }

    render() {
        const listItems = this.state.items.map((item) => (
            <Item key={item.id} item={item} />
        ));

        return(
            <div>
                {listItems}
            </div>
        );
    }
}

export default Catalog;
