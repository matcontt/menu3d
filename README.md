🥂 The Noir Bistro - 3D Experience
Una aplicación móvil de alta gama desarrollada con React Native + Expo que redefine la visualización de menús gastronómicos. Utiliza Three.js (React Three Fiber) para presentar alimentos en 3D con una estética minimalista y lujosa, enfocada en la experiencia afectiva del usuario.

✨ Características Principales
Experiencia 3D Inmersiva: Visualización de modelos .glb y .gltf (Ramen, Manzana, Pastel) con iluminación de estudio.

Diseño High Class: Interfaz Dark Mode con acentos en oro (#D4AF37) y tipografía premium.

Interacción Táctil: Los usuarios pueden rotar los alimentos con gestos para apreciar texturas y detalles.

Arquitectura Modular: Código organizado en archivos de menos de 150 líneas para máxima mantenibilidad.

UX Afectiva: Animaciones suaves de entrada (fade-in) y movimientos de levitación (float) que generan deseo de consumo.

📂 Estructura del Proyecto
El proyecto sigue una distribución estricta para separar la lógica de la interfaz:

Plaintext

/app             # Rutas de la aplicación (Expo Router)
/components
  /display       # Escenario 3D, Luces y Canvas
  /models        # Lógica de carga y escalado de modelos 3D
  /ui            # Componentes de interfaz (Info, Selector, Botones)
/lib
  /constants     # Base de datos local y configuración de diseño
  /context       # Estado global de la aplicación (MenuContext)
/assets
  /models        # Modelos 3D originales (.glb, .gltf)
🚀 Tecnologías Utilizadas
React Native & Expo

React Three Fiber: Renderizado 3D de alto rendimiento.

React Three Drei: Utilidades avanzadas para escenas 3D en móvil.

Context API: Gestión de estado global.

TypeScript: Tipado estricto para una base de código robusta.

🛠️ Instalación y Configuración
Clonar el repositorio:

Bash

git clone https://github.com/tu-usuario/noir-bistro-3d.git
cd noir-bistro-3d
Instalar dependencias:

Bash

npm install
# o
npx expo install --fix
Configurar archivos 3D: Asegúrate de tener los modelos en assets/models/:

Ramen-GLB.gltf

AppleIcon.glb

Cake.glb

Iniciar el proyecto:

Bash

npx expo start -c
Ver en iPhone 14: Escanea el código QR desde la app Expo Go.

🎨 Guía de Estilo
Fondo: #050505 (Deep Black)

Acento: #D4AF37 (Classic Gold)

Texto: #F2F2F2 (Bone White)

Sombras: ContactShadows dinámicas para realismo físico.

🖋️ Notas de Desarrollo
Este proyecto fue diseñado bajo el principio de separación de intereses. Cada modelo 3D tiene parámetros independientes de scale y positionY definidos en lib/constants/menuData.ts para garantizar que, independientemente del tamaño original del archivo, la visualización en el dispositivo móvil sea siempre impecable.