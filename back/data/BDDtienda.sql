
-- ES UN EXPORT DE LA BASE DE DATOS, ESPERO QUE SE HAYA EXPORTADO BIEN JAJA


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2025 a las 16:09:47
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--
CREATE DATABASE IF NOT EXISTS `tienda` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tienda`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `usuarioId` int(11) NOT NULL,
  `creadoEn` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `estado` varchar(191) NOT NULL,
  `total` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `usuarioId`, `creadoEn`, `estado`, `total`) VALUES
(28, 1, '2025-07-08 05:10:57.808', 'comprado', 5671.36),
(29, 1, '2025-07-08 05:10:57.812', 'activo', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritoitem`
--

CREATE TABLE `carritoitem` (
  `id` int(11) NOT NULL,
  `carritoId` int(11) NOT NULL,
  `productoId` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `precioUnitario` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `carritoitem`
--

INSERT INTO `carritoitem` (`id`, `carritoId`, `productoId`, `cantidad`, `precioUnitario`) VALUES
(67, 28, 1, 7, 74),
(68, 28, 2, 4, 59.99),
(69, 28, 3, 4, 70),
(70, 28, 4, 4, 89.5),
(71, 28, 8, 4, 48.75),
(72, 28, 7, 4, 15),
(73, 28, 6, 4, 92.3),
(74, 28, 5, 4, 120),
(75, 28, 9, 4, 65),
(76, 28, 10, 5, 58.9),
(77, 28, 11, 5, 49.99),
(78, 28, 12, 3, 54.9),
(79, 28, 16, 3, 56.5),
(80, 28, 15, 2, 60),
(81, 28, 14, 3, 39.99),
(82, 28, 13, 3, 52),
(83, 28, 17, 3, 59),
(84, 28, 18, 3, 45.99),
(85, 28, 19, 3, 44.9),
(86, 28, 20, 4, 51),
(87, 28, 24, 3, 22.5),
(88, 28, 23, 5, 30),
(89, 28, 22, 3, 27.99),
(90, 28, 21, 6, 25),
(91, 28, 25, 3, 29),
(92, 28, 26, 3, 28.99),
(93, 28, 27, 3, 32),
(94, 28, 28, 3, 24.99),
(95, 28, 30, 3, 27.5),
(96, 28, 29, 4, 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(191) NOT NULL,
  `clasificacion` varchar(191) NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `clasificacion`, `precio`) VALUES
(1, 'auto_alpine.avif', 'Auto Alpine - Escala 1:43 - Temporada 2024', 'Auto a escala', 74),
(2, 'auto_astonmartin.avif', 'Auto Aston Martin - Escala 1:43 - Temporada 2024', 'Auto a escala', 59.99),
(3, 'auto_ferrari.avif', 'Auto Ferrari - Escala 1:43 - Temporada 2024', 'Auto a escala', 70),
(4, 'auto_haas.webp', 'Auto Haas - Escala 1:43 - Temporada 2024', 'Auto a escala', 89.5),
(5, 'auto_maclaren.avif', 'Auto McLaren - Escala 1:43 - Temporada 2024', 'Auto a escala', 120),
(6, 'auto_mercedes.avif', 'Auto Mercedes - Escala 1:43 - Temporada 2024', 'Auto a escala', 92.3),
(7, 'auto_redbull.webp', 'Auto Red Bull - Escala 1:43 - Temporada 2024', 'Auto a escala', 15),
(8, 'auto_stake.avif', 'Auto Stake - Escala 1:43 - Temporada 2024', 'Auto a escala', 48.75),
(9, 'auto_visacash.webp', 'Auto Visa Cash App RB - Escala 1:43 - Temporada 2024', 'Auto a escala', 65),
(10, 'auto_williams.png', 'Auto Williams - Escala 1:43 - Temporada 2024', 'Auto a escala', 58.9),
(11, 'camiseta_alpine.avif', 'Camiseta Alpine - Oficial Temporada 2024', 'Camiseta', 49.99),
(12, 'camiseta_astonmartin.avif', 'Camiseta Aston Martin - Oficial Temporada 2024', 'Camiseta', 54.9),
(13, 'camiseta_ferrari.avif', 'Camiseta Ferrari - Oficial Temporada 2024', 'Camiseta', 52),
(14, 'camiseta_haas.avif', 'Camiseta Haas - Oficial Temporada 2024', 'Camiseta', 39.99),
(15, 'camiseta_maclaren.avif', 'Camiseta McLaren - Oficial Temporada 2024', 'Camiseta', 60),
(16, 'camiseta_mercedes.avif', 'Camiseta Mercedes - Oficial Temporada 2024', 'Camiseta', 56.5),
(17, 'camiseta_redbull.avif', 'Camiseta Red Bull - Oficial Temporada 2024', 'Camiseta', 59),
(18, 'camiseta_stake.webp', 'Camiseta Stake - Oficial Temporada 2024', 'Camiseta', 45.99),
(19, 'camiseta_visacash.avif', 'Camiseta Visa Cash App RB - Oficial Temporada 2024', 'Camiseta', 44.9),
(20, 'camiseta_williams.avif', 'Camiseta Williams - Oficial Temporada 2024', 'Camiseta', 51),
(21, 'gorra_alpine.avif', 'Gorra Alpine - Temporada 2024', 'Gorra', 25),
(22, 'gorra_astonmartin.avif', 'Gorra Aston Martin - Temporada 2024', 'Gorra', 27.99),
(23, 'gorra_ferrari.jpg', 'Gorra Ferrari - Temporada 2024', 'Gorra', 30),
(24, 'gorra_hass.avif', 'Gorra Haas - Temporada 2024', 'Gorra', 22.5),
(25, 'gorra_maclaren.avif', 'Gorra McLaren - Temporada 2024', 'Gorra', 29),
(26, 'gorra_mercedes.avif', 'Gorra Mercedes - Temporada 2024', 'Gorra', 28.99),
(27, 'gorra_redbull.avif', 'Gorra Red Bull - Temporada 2024', 'Gorra', 32),
(28, 'gorra_stake.avif', 'Gorra Stake - Temporada 2024', 'Gorra', 24.99),
(29, 'gorra_visacash.avif', 'Gorra Visa Cash App RB - Temporada 2024', 'Gorra', 26),
(30, 'gorra_williams.avif', 'Gorra Williams - Temporada 2024', 'Gorra', 27.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `apellido` varchar(191) NOT NULL,
  `direccion` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `password`, `nombre`, `apellido`, `direccion`) VALUES
(1, 'german@gmail.com', 'Hola123456789', 'asas', 'asas', 'asasa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('30ae17dd-0f5d-451a-bec3-c79ce7abed37', 'a8b3e34439ae36e4e701ee13f98bc96da455469098bc43af8c1a55a98b941c65', '2025-07-06 03:47:33.140', '20250706034732_carrito_con_productos', NULL, NULL, '2025-07-06 03:47:32.866', 1),
('e06e0408-1bfc-4a08-a729-5351282086ce', '29f5239d3a4dc81e7a9dbdbe3128fbc849c48c18ffe6da1ec605dc66c201d1dc', '2025-07-06 02:25:29.413', '20250705162955_init', NULL, NULL, '2025-07-06 02:25:29.379', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Carrito_usuarioId_fkey` (`usuarioId`);

--
-- Indices de la tabla `carritoitem`
--
ALTER TABLE `carritoitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CarritoItem_carritoId_fkey` (`carritoId`),
  ADD KEY `CarritoItem_productoId_fkey` (`productoId`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Usuario_email_key` (`email`);

--
-- Indices de la tabla `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `carritoitem`
--
ALTER TABLE `carritoitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `Carrito_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `carritoitem`
--
ALTER TABLE `carritoitem`
  ADD CONSTRAINT `CarritoItem_carritoId_fkey` FOREIGN KEY (`carritoId`) REFERENCES `carrito` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `CarritoItem_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `producto` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
