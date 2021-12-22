import Item from "./item";
import ItemForM from "./itemForM";

const Product = () => {
  return (
    <div id="product">
      <div className="sp10"></div>
      <div className="product">
        <p className="productTitle">PRODUCT</p>
        <div className="productLine"></div>
        <div className="sp5"></div>

        <Item title="Cocktail Recipe" description="You can look up over 600 cocktail recipes. It is made by Next.js, Material UI and Firebase(Auth, Firestore)." image="cocktail.png" url="https://cocktail-nine.vercel.app" />

        <Item title="Finding washroom in Vancouver" description="You can find public washroom in Vancouver. It is made by React.js, Material UI and GoogleMapAPI" image="wc.png" url="https://wc-vancouver.vercel.app" />

        <Item title="Real Time Chat Website(MERN stack)" description="It is real time chat website. It is made by React.js, Material UI, Firebase(Auth, Storage), MondoDB and Redux" image="realtime.png" url="https://realtimechat-gamma.vercel.app" />

        <Item title="Clothing Shop Website" description="It is fake cloth shop website. It is made by React.js, Material UI, Firebase(Auth, Strage, Firestore) and Redux." image="shop.png" url="https://shop-tau-bay.vercel.app" />


        <Item title="Corona Info(MERN stack)" description="You can get information of Corona. It is made by React.js, Material UI, MongoDB, Express and Node.js." image="corona.png" url="https://corona-a5aad.web.app" />



        <Item title="Cafe website" description="It is a cafe website. The cafe is located in the center of Zacatecas city in Mexico. It is made by Next.js, Material UI and so on." image="frescura-cafe.png" url="https://frescura-cafe.vercel.app" />

        <Item title="Medical website" description="It is a website for AYA (Adolescent and Young Adult) patients with intractable diseases such as cancer in Japan.It is made by Wordpress, PHP and BootStrap." image="ayaship.png" url="http://ayaship.marine-ocean.com/" />

        <ItemForM title="Hang-Out-Planner(iOS app)" description="App for people who are not familiar with the user's currentlocation(e.g. tourists, transients living in the city, etc.)Shows the directions and route option between each place. It Uses MapKit, WebAPI and Tableview." image="hang.png" url="https://github.com/cookie777/Hang-Out-Planner" />

        <ItemForM title="To Do List(iOS app)" description="App for people who want to manage their schedule. It uses Tableview and Coredata." image="todo.png" url="https://github.com/kengo-taka/ToDoItemWithCoreData" />

        <ItemForM title="Cafe CollectionView(iOS app)" description="App for showing the menu of the cafe. It is made by collectionview, UISearchController and  UICollectionViewDiffableDataSource" image="collection.png" url="https://github.com/kengo-taka/collectionviewAssignment" />

      </div>

    </div>
  );
}

export default Product;