function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {props.imgUrl ? <img src={props.imgUrl} className="card-img-top" alt={props.imgAlt} /> : null}
      <div className="card-body">
        {props.children}
        <a href="/" className="btn btn-primary" >Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;