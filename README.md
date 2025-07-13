# Proyecto final: ![Merch-F1](https://img.shields.io/badge/Merch--F1-FF1801?style=for-the-badge&logo=formula1&logoColor=white)
 

### Stack:
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=)
![MySQL Logo](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

## 1. Instalar Node.js

Descargá e instalá [Node.js](https://nodejs.org/) desde su página oficial.  

Verificá la instalación ejecutando en la terminal:

```bash
node -v
npm -v
```
## 2. Instalar Angular CLI

Una vez instalado Node.js, instalá Angular CLI globalmente con el siguiente comando:

```bash
npm install -g @angular/cli
```
## 3. Clonar el Repositorio

```bash
git clone https://github.com/JulianKer/TP-Taller-Web-II.git
cd TP-Taller-Web-II
```


## 4. Instalación de dependencias (node_modules)

Para instalar las dependencias del proyecto, ejecutá el siguiente comando dentro de la carpeta "back" y repite el mismo comando pero en la carpeta "front":

```bash
npm install
```

## 5. Instalar Prisma CLI y cliente

Ejecutar en la raíz del backend:

```bash
npm install @prisma/client
```

## 6. Crear una base de datos en MySQL (nosotros utilizamos [Xampp](https://www.apachefriends.org/es/index.html)):
Utilizar el script de generación de base de datos ubicado en:
```bash
back/data/BDDtienda.sql
```

## 7. Ejecutar migración para crear o actualizar la base de datos

```bash
npx prisma migrate dev --name [algún_nombre]
```

## 8. Inicializar los servidores en cada carpeta:
<ul>
  <li>
      front:
  </li>
</ul>

```bash
ng serve -o
```

<ul>
  <li>
      back:
  </li>
</ul>

```bash
npm run dev
```


 | Rol                                      | Nombre           | GitHub                                      |
|:----------------------------------------|:------------------|:---------------------------------------------|
| ![Developer](https://img.shields.io/badge/Developer-2088FF?style=for-the-badge&logo=dev.to&logoColor=white) | 👨🏻‍💻 Julián Schmuker   | [JulianKer](https://github.com/JulianKer)   |
| ![Developer](https://img.shields.io/badge/Developer-2088FF?style=for-the-badge&logo=dev.to&logoColor=white) | 👨🏻‍💻 Germán Schmuker   | [German](https://github.com/GermanSchmuker) |
| ![Developer](https://img.shields.io/badge/Developer-2088FF?style=for-the-badge&logo=dev.to&logoColor=white) | 👨🏻‍💻 Tomás Nania       | [TNania04](https://github.com/TNania04)     | 
