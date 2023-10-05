import React from "react";
import Carousel from "../Layouts/Carousel";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import "./Home.css";

/**
 * The Home component represents the home page of the application.
 * It includes a navigation bar, a carousel, and sections about Marvel and Marvel characters.
 */
const Home = () => {
  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div>
        <Carousel />
      </div>

      {/* Header Section */}
      <header className="bg-danger text-white text-center py-5">
        <h1>Welcome to the Marvel Universe</h1>
      </header>

      {/* Main Content Section */}
      <main className="container my-5">
        <section>
          <h2>About Marvel</h2>
          <p>
            The Marvel Universe is a vast and dynamic fictional universe that has captured the imaginations of readers
            and viewers for decades. Created by iconic comic book creators like Stan Lee, Jack Kirby, and Steve Ditko,
            this universe is home to a plethora of superheroes and supervillains, each with their own unique powers,
            origins, and storylines. From the friendly neighborhood Spider-Man to the mighty Avengers, including Iron
            Man, Thor, and Captain America, the Marvel Universe is a place where extraordinary individuals fight to
            protect the world from various threats, both terrestrial and cosmic. With its rich history, complex
            characters, and interconnected narratives, the Marvel Universe has become a cultural phenomenon, spanning
            comic books, movies, TV shows, and more, making it a beloved and enduring part of popular culture.
          </p>
        </section>

        <section>
          <h2>About Marvel Characters</h2>
          <div className="row">
            <p>
              The Marvel Universe is home to a vast and diverse array of characters that have captured the hearts and
              imaginations of fans around the world. From iconic superheroes like Spider-Man, Iron Man, and Captain
              America to formidable villains like Thanos and Loki, each character brings a unique set of powers,
              personalities, and backstories to the ever-expanding Marvel multiverse. Whether it's the extraordinary
              abilities of mutants like the X-Men, the cosmic adventures of the Guardians of the Galaxy, or the mystical
              world of Doctor Strange, Marvel's characters span a wide range of genres and themes, making the Marvel
              Universe a rich and compelling tapestry of heroism, conflict, and redemption. With decades of
              storytelling, these characters continue to evolve and resonate with audiences, making the Marvel Universe
              a timeless and beloved part of pop culture.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
