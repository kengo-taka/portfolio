import { Grid, Link } from "@mui/material";


const ItemForM = (props) => {
  return (
    <Grid container key={props.title} className="productEachBox">
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="productImageForM" onClick={() => window.open(props.url)}>
          <img src={props.image} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="productBox">
          <p className="productName">{props.title}</p>
          <div className="productEachLine"></div>
          <p className="productDescription">{props.description}</p>
          <div className="sp5"></div>
          <p className="visitButton" onClick={() => window.open(props.url)}>Visit</p>
        </div>
      </Grid>
      <div className="itemLine"></div>
    </Grid>
  );
}

export default ItemForM;