import Layout from "@/components/Common/Layout";
import { NotificationProvider } from "@/store/notification-context";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return <>
  <NotificationProvider>

<Layout>
    <Component {...pageProps} />
  </Layout>
  </NotificationProvider>
  </>
  
}
