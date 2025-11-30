# Sonrisa Plena - Sistema de Gestión Odontológica

Sistema web para la gestión integral de consultorios odontológicos, desarrollado como parte del proyecto académico de la Corporación Universitaria Iberoamericana.

## 📋 Descripción del Proyecto

**Sonrisa Plena** es una aplicación web diseñada para optimizar la gestión administrativa y clínica de consultorios odontológicos. Permite centralizar la información de pacientes, automatizar procesos y mejorar la atención mediante una plataforma segura, moderna y accesible.

## ✨ Características Principales

- **Gestión de Pacientes**: Registro completo de información personal y médica
- **Control de Citas**: Calendario interactivo con notificaciones
- **Historial Clínico**: Seguimiento detallado de tratamientos y diagnósticos
- **Facturación**: Generación de facturas y control de pagos
- **Dashboard Interactivo**: Visualización de estadísticas en tiempo real
- **Diseño Responsivo**: Adaptable a dispositivos móviles y tablets

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Diseño**: CSS Grid, Flexbox
- **Iconos**: SVG personalizados
- **Almacenamiento**: LocalStorage (para demo)

## 📁 Estructura del Proyecto

\`\`\`
sonrisa-plena/
├── index.html              # Página principal (landing)
├── login.html              # Página de inicio de sesión
├── dashboard.html          # Panel principal
├── pacientes.html          # Gestión de pacientes
├── citas.html              # Gestión de citas
├── historial.html          # Historial clínico
├── facturacion.html        # Facturación
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── main.js             # Scripts landing page
│   ├── auth.js             # Autenticación
│   ├── dashboard.js        # Dashboard
│   ├── pacientes.js        # Módulo pacientes
│   ├── citas.js            # Módulo citas
│   ├── historial.js        # Módulo historial
│   └── facturacion.js      # Módulo facturación
└── README.md               # Este archivo
\`\`\`

## 🔧 Instalación y Uso

### Opción 1: Abrir directamente en el navegador

1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en tu navegador web
3. Navega por la aplicación

### Opción 2: Usar un servidor local

\`\`\`bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx http-server

# Con PHP
php -S localhost:8000
\`\`\`

Luego abre `http://localhost:8000` en tu navegador.

## 🔐 Credenciales de Prueba

Para acceder al sistema, usa las siguientes credenciales:

- **Email**: admin@sonrisaplena.com
- **Contraseña**: admin123

## 📱 Módulos del Sistema

### 1. Dashboard
- Estadísticas generales del consultorio
- Citas del día
- Pacientes recientes
- Resumen financiero

### 2. Pacientes
- Registro de nuevos pacientes
- Búsqueda y filtrado
- Visualización de información completa
- Edición de datos

### 3. Citas
- Calendario mensual interactivo
- Agenda diaria
- Creación y gestión de citas
- Estados: Confirmada, Pendiente

### 4. Historial Clínico
- Registro de tratamientos
- Diagnósticos y procedimientos
- Línea de tiempo de consultas
- Observaciones médicas

### 5. Facturación
- Generación de facturas
- Control de pagos
- Reportes financieros
- Estados: Pagada, Pendiente

## 🎨 Paleta de Colores

- **Primario**: #00B4D8 (Azul celeste)
- **Secundario**: #10B981 (Verde)
- **Acento**: #06D6A0 (Verde agua)
- **Texto**: #1E293B (Gris oscuro)
- **Fondo**: #F8FAFC (Gris claro)

## 📊 Objetivos del Proyecto

### Objetivo General
Desarrollar una aplicación web para el consultorio odontológico "Sonrisa Plena" que permita gestionar eficientemente la información de pacientes, citas, tratamientos y pagos.

### Objetivos Específicos
1. Analizar requerimientos funcionales y no funcionales
2. Diseñar interfaz web intuitiva y responsiva
3. Implementar módulos de gestión
4. Garantizar seguridad de datos
5. Realizar pruebas funcionales

## 👨‍💻 Autor

**Wilmer Hinestroza Palacios**
- Corporación Universitaria Iberoamericana
- Facultad de Ingeniería
- Electiva Disciplinar II - Desarrollo de Aplicaciones Web
- Docente: Joaquín Sánchez

## 📅 Fecha de Desarrollo

Noviembre 2025

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos para la Corporación Universitaria Iberoamericana.

## 🔮 Futuras Mejoras

- Integración con base de datos real (MySQL/PostgreSQL)
- Backend con Node.js o Python (Flask/Django)
- Sistema de notificaciones por email/SMS
- Generación de reportes en PDF
- Integración con sistemas de pago
- Módulo de odontograma digital
- Sistema de roles y permisos
- Backup automático de datos
- API REST para integración con otras aplicaciones

## 📞 Soporte

Para preguntas o soporte sobre este proyecto, contacta a través de la institución educativa.

---

**Nota**: Este es un proyecto frontend de demostración. Para un entorno de producción, se requiere implementar un backend robusto con autenticación real, base de datos y medidas de seguridad apropiadas.
