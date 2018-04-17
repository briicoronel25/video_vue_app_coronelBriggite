-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 20, 2018 at 04:24 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.19

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

CREATE DATABASE movies_db;
USE movies_db;

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
  `user_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `thumbnail`, `video`, `description`, `genre`, `stars_review`, `user_type`) VALUES
(1, 'Annabelle', 'annabelle.jpg', 'annabelle.mp4', 'Continually whiteboard 24/365 core competencies for 2.0 architectures. Collaboratively utilize viral innovation through inexpensive customer service. Conveniently deploy 24/7 synergy through team building applications. Proactively redefine mission-critica', 'horror', 3, 'adult'),
(2, 'Moana', 'moana.jpg', 'moana.mp4', 'Globally leverage other\'s cross-platform niche markets rather than next-generation deliverables. Conveniently pontificate top-line internal or \"organic\" sources before installed base niche markets. Completely impact installed base human capital vis-a-vis ', 'adventure', 5, 'kids'),
(3, 'The Babadook', 'babadook.jpg', 'babadook.mp4', 'Distinctively streamline intermandated internal or \"organic\" sources whereas user friendly infomediaries. Distinctively leverage other\'s sticky architectures for interoperable channels. Compellingly fashion worldwide partnersh', 'Horror', 4, 'adult'),
(4, 'Cloverfield', 'cloverfield.jpg', 'cloverfield.mp4', 'Holisticly reintermediate clicks-and-mortar outsourcing through cross-platform platforms. Enthusiastically morph collaborative technology after focused metrics. Credibly iterate scalable ', 'Horror', 4, 'adult'),
(5, 'The Witch', 'witch.jpg', 'thewitch.mp4', 'Compellingly leverage other\'s unique e-markets rather than standards compliant architectures. Uniquely revolutionize emerging quality vectors before integrated internal or \"organic\" sources. ', 'Horror', 5, 'adult'),
(6, 'It Comes at Night', 'itcomesatnight.jpg', 'itcomesatnight.mp4', 'Progressively integrate compelling infrastructures whereas an expanded array of systems. Phosfluorescently harness e-business data with inexpensive manufactured products. Holisticly productize enterprise sources and magnetic ', 'Horror', 5, 'adult'),
(7, 'Chappie', 'chappie.jpg', 'chappie.mp4', 'Continually procrastinate high-quality interfaces for impactful expertise. Distinctively strategize plug-and-play e-commerce through real-time human capital. Uniquely revolutionize end-to-end e-services with front-end interfaces. Energistically communicat', 'Sci-fi', 3, 'adult'),
(8, 'Big Hero 6', 'big-hero-6-.jpg', 'bighero6.mp4', 'Dramatically iterate extensive e-services with plug-and-play mindshare. Professionally innovate B2C e-tailers rather than scalable leadership skills. ', 'Animation', 5, 'kids'),
(9, 'The Jungle Book', 'jungleBook.jpg', 'junglebook.mp4', 'Efficiently expedite extensive bandwidth vis-a-vis equity invested potentialities. Rapidiously provide access to cost effective content rather than magnetic best practices. Synergistically mesh performance based resources before sustainable testing ', 'Animals', 5, 'kids'),
(10, 'Zootopia', 'zootopia.jpg', 'zootopia.mp4', 'Compellingly transition interactive leadership skills via timely markets. Globally visualize enterprise-wide solutions without prospective platforms. Quickly matrix customer directed collaboration and idea-sharing before client-focused mindshare. ', 'Animals', 5, 'kids'),
(11, 'Bee Movie', 'bee-movie.jpg', 'beemovie.mp4', 'Rapidiously deploy client-centered infrastructures whereas next-generation supply chains. Quickly communicate go forward markets via multimedia based platforms. Rapidiously optimize equity ', 'Animated', 1, 'kids'),
(12, 'Tangled', 'tangled.jpg', 'tangled.mp4', 'Interactively optimize seamless vortals via high-quality experiences. Objectively envisioneer premier infomediaries vis-a-vis future-proof markets. Continually predominate bleeding-edge ', 'Animated', 4, 'kids');

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
