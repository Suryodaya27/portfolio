import React from "react";
import { AnimatePresence, motion as m, whileHover } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Prepbuddy - Mcq generator",
    description: "Generates mcq on users input data and it is a web-based platform designed to offer users an engaging way to test their knowledge",
    imageSrc: "https://img.icons8.com/?size=80&id=114416&format=png",
    liveLink: "https://prep-buddy-next.vercel.app",
    githubLink: "https://github.com/Suryodaya27/prpe-buddy-next"
  },
  {
    id: 2,
    title: "Apna Mart - Online Grocery Store",
    description: "Platform for users to Buy groceries online with features such as cart updation and razorpay",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/1261/1261163.png",
    liveLink: "https://youtu.be/-JezvLU1dow",
    githubLink: "https://github.com/Suryodaya27/marketPoint"
  },
  {
    id: 3,
    title: "TrimTrends - Barber booking site",
    description: "Platform for users to discover and book appointments at local barbershops.",
    imageSrc: "https://img.icons8.com/?size=1x&id=18370&format=png",
    liveLink: "https://www.youtube.com/watch?v=MQEKdOPNHwI&feature=youtu.be",
    githubLink: "https://github.com/Suryodaya27/barber"
  },
  {
    id: 4,
    title: "Ecommerce website using ReactJs",
    description: "You can browse and see Products in this project, add them to your Cart and Wishlist, and update both your cart and wishlist.",
    imageSrc: "https://i.pinimg.com/originals/4a/38/7b/4a387bda853bca3782d73234c786a150.png",
    liveLink: "https://ecommerce-thrift-store.netlify.app/",
    githubLink: "https://github.com/Suryodaya27/ecom"
  },
  {
    id: 5,
    title: "NewsApp using ReactJs",
    description: "You can browse and see the most recent news for many categories in this project. To retrieve news, the newsapi API was used.",
    imageSrc: "https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png",
    liveLink: "https://youtu.be/idGPBShPa_M",
    githubLink: "https://github.com/Suryodaya27/news"
  },
  {
    id: 6,
    title: "The MovieDB using SveltekitJs",
    description: "In this project, the tmdb API was used to retrieve data, and you can utilize the search filter to learn more about any movie.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/4221/4221419.png",
    liveLink: "https://movie-iota-lilac.vercel.app/",
    githubLink: "https://github.com/Suryodaya27/movie"
  },
  {
    id: 7,
    title: "Notes Maker",
    description: "You can create, edit, and delete notes in this project.",
    imageSrc: "https://cdn3d.iconscout.com/3d/premium/thumb/sticky-notes-6292787-5175966.png",
    liveLink: "https://suryodaya27.github.io/MyNotes-Notes-maker/",
    githubLink: "https://github.com/Suryodaya27/MyNotes-Notes-maker"
  }
  
];

export const Projects = () => {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <AnimatePresence>
      <div className="homePage">
        <m.div
          className="text-5xl font-semibold lg:text-7xl pt-10 text-center text-sky-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>My Projects</h1>
        </m.div>

        <div className="px-10 py-10 lg:flex gap-20 lg:flex-row lg:flex-wrap lg:justify-center">
          {projects.map((project) => (
            <m.div
              key={project.id}
              className="bg-sky-200 rounded-md mb-10 text-center py-10 shadow-lg px-6 hover:shadow-2xl lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, duration: 0.01 }}
            >
              <img
                className="mx-auto py-2"
                src={project.imageSrc}
                style={{ height: "100px" }}
                alt={project.title}
              />
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="font-light text-sm py-2">{project.description}</p>
              <p className="text-sm py-2 text-sky-900">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </p>
              <p className="text-sm py-2 text-sky-900">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  Github Link
                </a>
              </p>
            </m.div>
          ))}
        </div>
        <div className="pb-10 flex text-sm gap-6 lg:pb-10 justify-center">
          <h2
            className="bg-sky-300 p-3 rounded-lg w-fit cursor-pointer hover:bg-sky-600"
            onClick={handleClickHome}
          >
            &larr; Back to home
          </h2>
        </div>
      </div>
    </AnimatePresence>
  );
};
