import { InertiaLink } from "@inertiajs/inertia-react";

const Layout = ({children}) => (
  <>
    {children}
  </>
)



export default page => <Layout>{page}</Layout>;
