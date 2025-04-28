
# Games Catalogue Web

## Descripción General
Games Catalogue Web es una aplicación web que permite a los usuarios explorar un catálogo de videojuegos, buscar títulos específicos, filtrar por diferentes criterios y ver información detallada de cada juego.

## Tecnologías Utilizadas
- **React + Vite**: Para un desarrollo rápido y eficiente con hot module replacement
- **Tailwind CSS**: Framework de CSS para un diseño responsive y moderno
- **React Router**: Manejo de navegación
- **EmailJS**: Integración de formulario de contacto
- **RAWG API**: Para obtener datos de videojuegos

## Arquitectura

La aplicación sigue una arquitectura basada en características (feature-based), lo que permite una mejor organización y escalabilidad del código.

```plaintext
src/
├── features/
│   ├── catalogue/
│   │   ├── components/
│   │   │   ├── Catalogue.jsx
│   │   │   └── GameCard.jsx
│   │   ├── hooks/
│   │   └── services/
│   ├── contact/
│   │   └── components/
│   ├── home/
│   │   └── components/
│   └── layout/
│       └── components/
├── App.jsx
├── main.jsx
└── styles.css
```

## Estructura de Carpetas

- **/features**: Contiene las características principales de la aplicación
  - **/catalogue**: Gestión y visualización del catálogo de juegos
  - **/contact**: Formulario e información de contacto
  - **/home**: Página principal y presentación
  - **/layout**: Componentes de estructura como navbar y layout general

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/martinsarasola/games-catalogue-web.git
```

2. Instalar dependencias:
`bash
cd games-catalogue-web
npm install
`

3. Crear archivo `.env` en la raíz del proyecto con las siguientes variables:
   `bash
VITE_RAWG_API_KEY=tu_clave_publica
VITE_EMAILJS_PUBLIC_KEY=tu_clave_publica
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   `

5. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

5. Abrir el navegador en [http://localhost:5173](http://localhost:5173)

## Flujo de Tareas

### Búsqueda de Juegos
- Usuario ingresa término de búsqueda
- Sistema filtra resultados en tiempo real
- Se muestran resultados en formato de cards

### Contacto
- Usuario completa formulario
- Sistema valida campos
- Se envía email mediante EmailJS
- Se muestra confirmación

### Navegación
- Menú principal accesible desde cualquier vista
- Navegación fluida entre secciones
- Diseño responsive para diferentes dispositivos
```
