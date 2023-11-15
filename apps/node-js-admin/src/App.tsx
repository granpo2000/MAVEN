import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PedidoList } from "./pedido/PedidoList";
import { PedidoCreate } from "./pedido/PedidoCreate";
import { PedidoEdit } from "./pedido/PedidoEdit";
import { PedidoShow } from "./pedido/PedidoShow";
import { ClienteList } from "./cliente/ClienteList";
import { ClienteCreate } from "./cliente/ClienteCreate";
import { ClienteEdit } from "./cliente/ClienteEdit";
import { ClienteShow } from "./cliente/ClienteShow";
import { EmailList } from "./email/EmailList";
import { EmailCreate } from "./email/EmailCreate";
import { EmailEdit } from "./email/EmailEdit";
import { EmailShow } from "./email/EmailShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Node.Js"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pedido"
          list={PedidoList}
          edit={PedidoEdit}
          create={PedidoCreate}
          show={PedidoShow}
        />
        <Resource
          name="Cliente"
          list={ClienteList}
          edit={ClienteEdit}
          create={ClienteCreate}
          show={ClienteShow}
        />
        <Resource
          name="Email"
          list={EmailList}
          edit={EmailEdit}
          create={EmailCreate}
          show={EmailShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
      </Admin>
    </div>
  );
};

export default App;
