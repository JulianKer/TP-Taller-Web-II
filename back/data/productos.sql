-- hacer este instert en la bdd en mysql para cargar algunos productos

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `clasificacion`, `precio`) VALUES
(14, 'auto_alpine.avif', 'Auto Alpine - Edición 2024', 'Auto a escala', 74),
(15, 'auto_astonmartin.avif', 'Auto Aston Martin - Edición 2024', 'Auto a escala', 59.99),
(16, 'auto_haas.webp', 'Auto Haas - Edición 2024', 'Auto a escala', 89.5),
(17, 'auto_maclaren.avif', 'Auto MClaren - Edición 2024', 'Auto a escala', 120),
(18, 'auto_redbull.webp', 'Auto RedBull - Edición 2024', 'Auto a escala', 15),
(19, 'auto_mercedes.avif', 'Auto Mercedes - Edición 2024', 'Auto a escala', 92.3),
(20, 'auto_stake.avif', 'Auto Stake - Edición 2024', 'Auto a escala', 48.75),
(21, 'auto_ferrari.avif', 'Auto Ferrari - Edición 2024', 'Auto a escala', 70);


-- Insertar 3 carritos COMPRADOS con id explícito y fechas ordenadas
INSERT INTO Carrito (id, usuarioId, estado, total, creadoEn) VALUES
(1, 1, 'comprado', 133.99, '2024-06-01 10:00:00'), -- carritoId = 1 (más antiguo)
(2, 1, 'comprado', 70.00, '2024-06-10 12:00:00'),  -- carritoId = 2
(3, 1, 'comprado', 209.5, '2024-06-15 15:00:00');  -- carritoId = 3 (más reciente)

-- Insertar 1 carrito ACTIVO con id explícito y fecha actual
INSERT INTO Carrito (id, usuarioId, estado, total, creadoEn) VALUES
(4, 1, 'activo', 331.25, NOW()); -- carritoId = 4 (el último creado)

-- Ítems para carritoId = 1 (2 productos)
INSERT INTO CarritoItem (id, carritoId, productoId, cantidad, precioUnitario) VALUES
(1, 1, 14, 1, 74.00),     -- auto_alpine
(2, 1, 15, 1, 59.99);     -- auto_astonmartin

-- Ítems para carritoId = 2 (1 producto)
INSERT INTO CarritoItem (id, carritoId, productoId, cantidad, precioUnitario) VALUES
(3, 2, 21, 1, 70.00);     -- auto_ferrari

-- Ítems para carritoId = 3 (2 productos)
INSERT INTO CarritoItem (id, carritoId, productoId, cantidad, precioUnitario) VALUES
(4, 3, 16, 1, 89.5),      -- auto_haas
(5, 3, 18, 2, 15.00);     -- auto_redbull x2

-- Ítems para carritoId = 4 (activo, 3 productos)
INSERT INTO CarritoItem (id, carritoId, productoId, cantidad, precioUnitario) VALUES
(6, 4, 17, 1, 120.00),    -- auto_maclaren
(7, 4, 19, 1, 92.30),     -- auto_mercedes
(8, 4, 20, 2, 48.75);     -- auto_stake x2
