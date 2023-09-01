import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainPage from "./pages/mainPage";
export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "footer"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
