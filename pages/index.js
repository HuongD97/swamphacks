import axios from 'axios';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            quantity: null
        }
    }

    async componentDidMount() {
        const result = await axios.post('/getItem', {
            id: 2
        });
        console.log(result);
        let newItems = this.state.items;
        newItems.push(result.data);

        this.setState({ items: newItems });
        console.log('this.state.items', this.state.items);
    }

    handleClick = () => {
        console.log('clicked!');
    }

    render() {
        return(
            <div>
                {this.state.foodName}
            </div>
        );
    }
}

export default Index;
