-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 21, 2018 at 02:47 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies_db`
--

CREATE DATABASE movies_db
USE movies_db
-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `genre` varchar(30) NOT NULL,
  `stars_review` int(1) DEFAULT NULL,
  `user_type` varchar(10) NOT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `thumbnail`, `video`, `description`, `genre`, `stars_review`, `user_type`, `facebook`, `twitter`, `website`) VALUES
(1, 'Annabelle', 'annabelle.jpg', 'annabelle.mp4', 'Continually whiteboard 24/365 core competencies for 2.0 architectures. Collaboratively utilize viral innovation through inexpensive customer service. Conveniently deploy 24/7 synergy through team building applications. Proactively redefine mission-critica', 'Horror', 3, 'adult', 'https://www.facebook.com/AnnabelleMovie', 'annabellemovie', 'http://annabellemovie.com/'),
(2, 'Moana', 'moana.jpg', 'moana.mp4', 'Globally leverage other\'s cross-platform niche markets rather than next-generation deliverables. Conveniently pontificate top-line internal or \"organic\" sources before installed base niche markets. Completely impact installed base human capital vis-a-vis ', 'Adventure', 5, 'kids', 'https://www.facebook.com/disneymoana', 'DisneyMoana', 'http://movies.disney.com/moana'),
(3, 'The Babadook', 'babadook.jpg', 'babadook.mp4', 'Distinctively streamline intermandated internal or \"organic\" sources whereas user friendly infomediaries. Distinctively leverage other\'s sticky architectures for interoperable channels. Compellingly fashion worldwide partnersh', 'Horror', 4, 'adult', 'https://www.facebook.com/thebabadookmovie', 'BabadookMovie', 'http://discoverthebabadook.com/'),
(4, 'Cloverfield', 'cloverfield.jpg', 'cloverfield.mp4', 'Holisticly reintermediate clicks-and-mortar outsourcing through cross-platform platforms. Enthusiastically morph collaborative technology after focused metrics. Credibly iterate scalable ', 'Horror', 4, 'adult', 'https://www.facebook.com/cloverfieldmovie', '10CloverfieldLn', 'http://www.cloverfieldnews.com/'),
(5, 'The Witch', 'witch.jpg', 'thewitch.mp4', 'Compellingly leverage other\'s unique e-markets rather than standards compliant architectures. Uniquely revolutionize emerging quality vectors before integrated internal or \"organic\" sources. ', 'Horror', 5, 'adult', 'https://www.facebook.com/TheWitchMovie', 'TheWitchMovie', 'http://thewitch-movie.com/'),
(6, 'It Comes at Night', 'itcomesatnight.jpg', 'itcomesatnight.mp4', 'Progressively integrate compelling infrastructures whereas an expanded array of systems. Phosfluorescently harness e-business data with inexpensive manufactured products. Holisticly productize enterprise sources and magnetic ', 'Horror', 5, 'adult', 'https://www.facebook.com/ItComesAtNight', 'ItComesAtNight', 'http://itcomesatnight.com/'),
(7, 'Chappie', 'chappie.jpg', 'chappie.mp4', 'Continually procrastinate high-quality interfaces for impactful expertise. Distinctively strategize plug-and-play e-commerce through real-time human capital. Uniquely revolutionize end-to-end e-services with front-end interfaces. Energistically communicat', 'Sci-fi', 3, 'adult', 'https://www.facebook.com/ChappieLaPelicula', 'ChappieTheMovie', 'http://www.sonypictures.com/movies/chappie/'),
(8, 'Big Hero 6', 'big-hero-6-.jpg', 'bighero6.mp4', 'Dramatically iterate extensive e-services with plug-and-play mindshare. Professionally innovate B2C e-tailers rather than scalable leadership skills. ', 'Animation', 5, 'kids', 'https://www.facebook.com/DisneyBigHero6', 'BigHero6Movie', 'http://movies.disney.com/big-hero-6/'),
(9, 'The Jungle Book', 'jungleBook.jpg', 'junglebook.mp4', 'Efficiently expedite extensive bandwidth vis-a-vis equity invested potentialities. Rapidiously provide access to cost effective content rather than magnetic best practices. Synergistically mesh performance based resources before sustainable testing ', 'Animals', 5, 'kids', 'https://www.facebook.com/The-Jungle-Book-movie-183051305092464', 'TheJungleBook', 'http://movies.disney.com/the-jungle-book-2016'),
(10, 'Zootopia', 'zootopia.jpg', 'zootopia.mp4', 'Compellingly transition interactive leadership skills via timely markets. Globally visualize enterprise-wide solutions without prospective platforms. Quickly matrix customer directed collaboration and idea-sharing before client-focused mindshare. ', 'Animals', 5, 'kids', 'https://www.facebook.com/DisneyZootopia', 'DisneyZootopia', 'http://movies.disney.com/zootopia'),
(11, 'Bee Movie', 'bee-movie.jpg', 'beemovie.mp4', 'Rapidiously deploy client-centered infrastructures whereas next-generation supply chains. Quickly communicate go forward markets via multimedia based platforms. Rapidiously optimize equity ', 'Animated', 1, 'kids', 'https://www.facebook.com/Bee-Movie-192306654120214', 'BEEtheMOVIE', 'http://www.dreamworksanimation.com/bee/'),
(12, 'Tangled', 'tangled.jpg', 'tangled.mp4', 'Interactively optimize seamless vortals via high-quality experiences. Objectively envisioneer premier infomediaries vis-a-vis future-proof markets. Continually predominate bleeding-edge ', 'Animated', 4, 'kids', 'https://www.facebook.com/DisneyTangled', 'MovieTangled', 'http://movies.disney.com/tangled');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(255) NOT NULL,
  `movie` int(3) NOT NULL,
  `username` varchar(30) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `review` int(2) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `movie`, `username`, `comment`, `review`, `date`) VALUES
(1, 1, 'James Cameron', 'This movie has a terrible direction!', 2, '2018-04-20 07:55:11'),
(2, 1, 'Quantin Tarantino', 'There are some good things that would have been better for this movie.', 3, '2018-04-20 07:55:11'),
(5, 2, 'Kid Rat', 'This movie is for fools!!', 1, '2018-04-20 07:55:11'),
(6, 2, 'Disney-Holic', 'Once more Disney has shown that they could make wonderful movies, i love this one!', 5, '2018-04-20 07:55:11'),
(8, 3, 'Steven SpelBerg', 'THIS MOVIE ROCKS OUTTT!!!!!!!!!!', 5, '2018-04-20 08:54:10'),
(9, 2, 'Pretty Girl', 'It\'s super cute, i want to watch this tousand times more!', 3, '2018-04-20 08:56:04'),
(10, 1, 'Nice Guy', 'Nice MOvie', 3, '2018-04-21 02:38:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `type`) VALUES
(1, 'kidrat', '123456', 'kids'),
(2, 'briicoronel', 'brii123', 'adult');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
