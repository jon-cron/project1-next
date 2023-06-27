import Header from "./mainheader";

const { Fragment } = require("react");

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
