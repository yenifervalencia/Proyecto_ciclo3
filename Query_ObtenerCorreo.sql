-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2021 a las 03:04:39
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `venta_motos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

-- CREATE TABLE `usuarios` (
--  `idUsuarios` int(11) NOT NULL,
--  `nombre` varchar(30) NOT NULL,
--  `genero` int(11) NOT NULL,
--  `telefono` int(7) NOT NULL,
--  `direccion` varchar(50) NOT NULL,
--  `correo` varchar(100) NOT NULL,
--  `contrasena` varchar(100) NOT NULL
-- );

--
-- Volcado de datos para la tabla `usuarios`
--

-- INSERT INTO `usuarios` (`idUsuarios`, `nombre`, `genero`, `telefono`, `direccion`, `correo`, `contrasena`) VALUES
-- (1, 'julio cesar', 1, 6789087, 'hsdhdjhgh345', 'juliocesar@gmail.com', 'kdsjhshddjs8765775'),
-- (2, 'valeria zapata', 2, 4563278, 'jhsdkhdsjhdsdksjh', 'valeria@gmail.com', 'jhdsuy76'),
-- (3, 'miguel', 1, 7563824, 'jhshs7s778', 'miguel@hotmail.com', 'jkfjfd'),
-- (4, 'mauricio', 1, 2345675, 'yuwagkcjbwd', 'mauro@mail.com', 'xgfhs45');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
-- ALTER TABLE `usuarios`
--  ADD PRIMARY KEY (`idUsuarios`);
-- COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- este es el comando para seleccionar id a partir del correo gmail.com
SELECT nombre, genero, telefono, direccion, correo, contrasena FROM usuarios WHERE correo LIKE '%gmail.com%';


