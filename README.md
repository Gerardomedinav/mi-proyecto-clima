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

### 🧱 Estructura y Organización General
- **Evitar IDs innecesarios o repetidos**  
  👉 Usar `id` solo cuando sea necesario (una vez por documento). Preferir `class` para estilos y selección múltiple.

- **Separación de responsabilidades (HTML, CSS, JS)**  
  👉 Asegurar que lógica (JS), estructura (HTML) y estilos (CSS) estén separados. Evitar mezclar.

---

### ♿ Accesibilidad (a11y)
- **Falta de etiquetas semánticas**  
  👉 Reemplazar `div` por `section`, `article`, `aside`, etc., según el contenido.

- **Faltan atributos ARIA**  
  👉 Usar `aria-label`, `aria-live`, `role` para mejorar accesibilidad en elementos dinámicos o gráficos.

- **Inputs sin etiquetas `<label>` asociadas**  
  👉 Incluir `<label for="inputID">` para campos del formulario.

---

### ⚡ Rendimiento y Buenas Prácticas
- **Clases BEM demasiado verbosas o redundantes**  
  👉 Revisar nombres como `.forecast-card__temp-max`. Agrupar si es posible.

- **Carga sincrónica de hojas de estilo o scripts**  
  👉 Mover `<script>` al final del `body` con `defer` para evitar bloqueo de renderizado.

---

### 📈 Escalabilidad y Mantenibilidad
- **Faltan atributos `data-*` en elementos interactivos**  
  👉 Usar `data-location`, `data-period`, etc. para facilitar la lógica JS desacoplada.

- **Falta de comentarios en bloques HTML complejos**  
  👉 Comentar secciones como alertas, dashboard, forecast.

- **No hay soporte de internacionalización**  
  👉 Considerar `data-lang` para preparar el sistema a múltiples idiomas.

---

### ✨ Buenas prácticas adicionales
- **Falta de favicon**  
  👉 Agregar un favicon para dar identidad visual.

- **No hay metadatos SEO básicos**  
  👉 Incluir `<meta name="description">` y `<meta name="keywords">`.

- **Enlaces con `href="#"` sin prevención de scroll**  
  👉 Usar `event.preventDefault()` o `href="javascript:void(0)"`.

- **Sin feedback visual en errores del input**  
  👉 Agregar validación visual cuando el usuario ingrese una ciudad vacía o inválida.

- **Compatibilidad con navegadores antiguos**  
  👉 Incluir `<meta http-equiv="X-UA-Compatible" content="IE=edge">` si se desea soporte extendido.

---

📌 *Este documento acompaña al Trabajo Práctico N.º 1 de la materia Metodología de Sistemas I para la presentación académica de la aplicación ClimApp.*

