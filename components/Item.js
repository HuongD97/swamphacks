const Item = (props) => {
    const item = props.item;
    return (
        <div>
            <img src={item.imageURL} width="300px" height="300px"/>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
        </div>
    );
}

export default Item;