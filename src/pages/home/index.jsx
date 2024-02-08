import { useContext } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";
import ProductDetail from "../../components/productDetail";
import { ShoppingCartContext } from "../../context";

function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    //console.log(context);
    if (context.searchByTitle?.length > 0) {
      console.log(context.searchByTitle);
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return context.errorMsg ? <div>{errorMsg}</div> : <div>We dont have anything :</div>;
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    // <ShoppingCartProvider>
    <Layout>
      <div className="flex items-center justify-center relative sm:w-80 mb-4">
        <h1 className="font-medium text-xl">Vehículos Espetours</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="flex justify-center">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-4 w-full max-w-screen-lg mx-auto">
          {renderView()}
        </div>
      </div>
      <ProductDetail />
    </Layout>
    // </ShoppingCartProvider>
  );
}
export default Home;
