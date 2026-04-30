-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 30 avr. 2026 à 06:42
-- Version du serveur : 10.11.14-MariaDB-0+deb12u2
-- Version de PHP : 8.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SAE203`
--
CREATE DATABASE IF NOT EXISTS `SAE203` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `SAE203`;
-- --------------------------------------------------------

--
-- Structure de la table `AgeCategory`
--

CREATE TABLE `AgeCategory` (
  `id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `AgeCategory`
--

INSERT INTO `AgeCategory` (`id`, `age`) VALUES
(1, 0),
(2, 3),
(3, 7),
(4, 10),
(5, 12),
(6, 16),
(7, 18);

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Comédie'),
(3, 'Drame'),
(4, 'Science-fiction'),
(5, 'Animation'),
(6, 'Thriller'),
(7, 'Horreur'),
(8, 'Aventure'),
(9, 'Fantaisie'),
(10, 'Documentaire');

-- --------------------------------------------------------

--
-- Structure de la table `Favorite`
--

CREATE TABLE `Favorite` (
  `id_favorite` bigint(20) NOT NULL,
  `id_profile` int(11) DEFAULT NULL,
  `id_movie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Favorite`
--

INSERT INTO `Favorite` (`id_favorite`, `id_profile`, `id_movie`) VALUES
(1, 5, 17),
(2, 5, 101);

-- --------------------------------------------------------

--
-- Structure de la table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `min_age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Movie`
--

INSERT INTO `Movie` (`id`, `name`, `year`, `length`, `description`, `director`, `id_category`, `image`, `trailer`, `min_age`) VALUES
(7, 'Interstellar', 2014, 169, 'Un groupe d\'explorateurs voyage à travers un trou de ver pour sauver l\'humanité.', 'Christopher Nolan', 4, 'interstellar.jpg', 'https://www.youtube.com/embed/VaOijhK3CRU?si=76Ke4uw4LYjuLuQ6', 12),
(12, 'La Liste de Schindler', 1993, 195, 'Un industriel allemand sauve des milliers de Juifs pendant l\'Holocauste.', 'Steven Spielberg', 3, 'schindler.webp', 'https://www.youtube.com/embed/ONWtyxzl-GE?si=xC3ASGGPy5Ib-aPn', 16),
(17, 'Your Name', 2016, 107, 'Deux adolescents échangent leurs corps de manière mystérieuse.', 'Makoto Shinkai', 5, 'your_name.jpg', 'https://www.youtube.com/embed/AROOK45LXXg?si=aUQyGk2VMCb_ToUL', 10),
(27, 'Le Bon, la Brute et le Truand', 1966, 161, 'Trois hommes se lancent à la recherche d\'un trésor caché.', 'Sergio Leone', 8, 'bon_brute_truand.jpg', 'https://www.youtube.com/embed/WA1hCZFOPqs?si=TwNZAoM4oj4KpGja', 12),
(31, 'Princesse Mononoké', 1997, 133, 'Ashitaka, un jeune guerrier japonais, affronte un sanglier géant et furieux qui attaque son village. Il tue la bête, mais se retrouve atteint par un mal mystérieux. Sur le conseil des sages, il part vers l\'ouest, à la recherche de ce qui a transformé l\'animal en démon.', 'Hayao Miyazaki', 9, 'mono.webp', 'https://www.youtube.com/watch?v=NWV5ijop5PY', 12),
(100, 'WALL-E', 2008, 98, 'Wall E, un petit robot, est le dernier être sur Terre ! Il y a 700 ans, l\'humanité a déserté notre planète en lui laissant le soin de nettoyer la Terre. Mais Wall E a développé un petit défaut technique : une forte personnalité ! Curieux et indiscret, il est surtout très seul. Sa vie va être bouleversée avec l\'arrivée d\'Eve, une petite robot. Wall E va tout mettre en œuvre pour la séduire.', 'Andrew Stanton', 4, 'walle.jpg', 'https://youtu.be/CZ1CATNbXg0?si=XZxGp0ckvYLvjRci', 3),
(101, 'Arthur et les Minimoys', 2006, 94, 'Un garçon découvre un monde miniature et part à l’aventure pour sauver sa maison.', 'Luc Besson', 5, 'arthur.jpg', 'https://www.youtube.com/watch?v=4l0lHkF7Y6M', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Profile`
--

CREATE TABLE `Profile` (
  `id` bigint(20) NOT NULL,
  `name` varchar(250) NOT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  `age_restriction` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Profile`
--

INSERT INTO `Profile` (`id`, `name`, `avatar`, `age_restriction`) VALUES
(1, 'MagJR', '', 3),
(3, 'mag2', '', 7),
(4, 'MagSR', '', 18),
(5, 'Magueye', '', 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `AgeCategory`
--
ALTER TABLE `AgeCategory`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Favorite`
--
ALTER TABLE `Favorite`
  ADD PRIMARY KEY (`id_favorite`);

--
-- Index pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Index pour la table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `AgeCategory`
--
ALTER TABLE `AgeCategory`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Favorite`
--
ALTER TABLE `Favorite`
  MODIFY `id_favorite` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT pour la table `Profile`
--
ALTER TABLE `Profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `Category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
