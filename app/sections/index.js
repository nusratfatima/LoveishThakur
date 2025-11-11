import Introduction from "./sections/introduction";
import Experience from "./sections/experiance";
import Movies from "./sections/movies";
import Video from "./sections/video";

export default function HomePage() {
  return (
    <>
      <section id="home"><Introduction /></section>
      <section id="experience"><Experience /></section>
      <section id="work"><Movies /></section>
      <section id="contact"><Video /></section>
    </>
  );
}
