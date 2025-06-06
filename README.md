## 🖼️ Vista previa de la aplicación

![Vista previa de ClimApp](assets/img_clima.png)


---

## 📋 Trabajo Práctico N.º 1  
**Asignatura:** Metodología de Sistemas I  
**Nivel:** Segundo año – Primer cuatrimestre  
**Carrera:** Tecnicatura Universitaria en Programación  
**Comisión:** 2.2  

### 👨‍🏫 Docente
**Nombre y Apellido:** Facundo Leonel Veron  
**E-mail de contacto:** faccu.veron92@gmail.com  

### 👨‍🎓 Alumno
**Nombre:** Gerardo Medina Villalba  


### 👩‍💼 Coordinadora de la Carrera
**Nombre:** Ing. Claudia Laclau  
**E-mail:** tup@frre.utn.edu.ar  
**Web:** [www.frre.utn.edu.ar/tup](http://www.frre.utn.edu.ar/tup)

---
## ✅ Recomendaciones de Mejora

##📅 CAMBIOS REALIZADOS - 10/04/2025

✅ Se agregó un bloque de comentario en el HTML principal documentando buenas prácticas y sugerencias de mejora.

✅ Se revisó y confirmó el uso de <script defer> para optimizar la carga del JS.

✅ Se validó que la estructura del HTML está separada correctamente en secciones: dashboard, forecast, alerts, etc.

✅ Se verificó la implementación de identificadores únicos (id) y clases con nomenclatura semántica y BEM.

✅ Se confirmó que la estructura del HTML es jerárquica y orientada a la accesibilidad.

✅ Se separó el código en archivos distintos (HTML, CSS, JS) para mantener una buena organización y separación de responsabilidades.

✅ Se renombraron variables en JavaScript con nombres más descriptivos para mejorar la legibilidad y el mantenimiento del código.

✅ Se agregó dinamismo a la aplicación simulando temperaturas cambiantes usando valores generados aleatoriamente para pruebas.


### 🚫 1. Usar muchos `id` en lugar de `class`
- ❌ **Mala práctica:** Abusar de los `id` en HTML para estilos o selección.
- ✅ **Consejo:** Usá `class` cuando necesites reutilizar estilos o seleccionar múltiples elementos. El `id` debe ser único por documento.

---

### 🚫 2. Mezclar HTML, CSS y JS en el mismo archivo
- ❌ **Mala práctica:** Incluir estilos y scripts directamente en el HTML.
- ✅ **Consejo:** Separá tu código en archivos distintos: `.html` para estructura, `.css` para estilos, `.js` para lógica. Esto facilita el mantenimiento y la colaboración.

---

### 🚫 3. Ignorar la accesibilidad (a11y)
- ❌ **Mala práctica:** Usar solo `<div>` para todo y no poner etiquetas `<label>` en los formularios.
- ✅ **Consejo:** Usá etiquetas semánticas (`<section>`, `<header>`, `<footer>`, etc.) y asegurate de etiquetar correctamente tus formularios para que sean accesibles para todos.

---

### 🚫 4. No comentar el código
- ❌ **Mala práctica:** Escribir todo sin una sola línea de explicación.
- ✅ **Consejo:** Comentá partes importantes o complejas del código para que vos (o tus compañeros) puedan entenderlo fácilmente después.

---

### 🚫 5. Clases con nombres confusos o excesivamente largas
- ❌ **Mala práctica:** Usar nombres como `.forecast-card__temperature-max-average-today`.
- ✅ **Consejo:** Usá nombres claros, pero concisos. Preferí `.temp-max` si es suficiente para entender su propósito.

---

### 🚫 6. No validar formularios ni dar feedback al usuario
- ❌ **Mala práctica:** Dejar que el usuario envíe cualquier cosa sin saber si lo hizo bien o mal.
- ✅ **Consejo:** Validá la entrada y mostrale mensajes claros al usuario cuando comete errores.

---

### 🚫 7. Cargar scripts incorrectamente
- ❌ **Mala práctica:** Colocar `<script>` en el `<head>` sin `async` o `defer`.
- ✅ **Consejo:** Usá `<script src="app.js" defer></script>` justo antes de cerrar el `</body>` para que el sitio cargue más rápido.

---

### 🚫 8. No preparar tu sitio para crecer
- ❌ **Mala práctica:** Pensar solo en cómo funciona hoy.
- ✅ **Consejo:** Usá atributos como `data-*`, etiquetas semánticas, y estructura bien tu código para que sea fácil de escalar y mantener.

---

### 🚫 9. No agregar detalles importantes del proyecto
- ❌ **Mala práctica:** No incluir `favicon`, `meta` etiquetas o una descripción del proyecto.
- ✅ **Consejo:** Dale identidad a tu proyecto desde el principio. Eso mejora la experiencia del usuario y la visibilidad en buscadores.

---
📌 *Este documento acompaña al Trabajo Práctico N.º 1 de la materia Metodología de Sistemas I para la presentación académica de la aplicación ClimApp.*

