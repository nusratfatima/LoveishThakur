import Introduction from "./introduction";
import Experience from "./experiance";
import Movies from "./movies";
import Video from "./video";
import Brands from "./brands";
import Technologies from "./technologies";

export default function HomePage() {
  return (
    <>
      <section id="home"><Introduction /></section>
      <section id="experience"><Experience /></section>
      <section id="work"><Movies /></section>
      <section id="brands"><Brands /></section>
      <section id="technologies"><Technologies /></section>
      <section id="contact"><Video /></section>
    </>
  );
}
