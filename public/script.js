/**
 * Función para obtener datos meteorológicos desde un archivo PHP
 * y actualizar el contenido del DOM con esos datos.
 */
function fetchWeather() {
  // Realiza la solicitud a datos.php, que retorna datos en formato JSON
  fetch("datos.php")
    .then((response) => response.json()) // Convierte la respuesta en un objeto JSON
    .then((weatherData) => {
      // Actualiza los elementos del DOM con los datos meteorológicos recibidos
      document.getElementById("locationName").textContent = weatherData.ubicacion;
      document.getElementById("weatherDescription").textContent = weatherData.descripcion;
      document.getElementById("currentTemp").textContent = `${weatherData.temperatura}°C`;
      document.getElementById("feelsLike").textContent = `${weatherData.sensacion}°C`;
      document.getElementById("humidity").textContent = `${weatherData.humedad}%`;
      document.getElementById("windSpeed").textContent = `${weatherData.viento} km/h`;
      document.getElementById("pressure").textContent = `${weatherData.presion} hPa`;

      // ==========================
      // Agregar hora actual
      // ==========================

      const currentDate = new Date(); // Obtiene la fecha y hora actual del sistema

      const hour24Format = currentDate.getHours(); // Hora en formato 24h
      const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Asegura 2 dígitos en los minutos
      const amOrPm = hour24Format >= 12 ? 'PM' : 'AM'; // Determina si es AM o PM
      const hour12Format = hour24Format % 12 || 12; // Convierte a formato 12h (si es 0, se muestra como 12)

      const formattedTime = `${hour12Format}:${minutes} ${amOrPm}`; // Construye la hora formateada

      // Actualiza el contenido del elemento con la hora de la última actualización
      document.getElementById("lastUpdate").textContent = `Actualizado: ${formattedTime}`;
    })
    .catch((error) => {
      // En caso de error en la solicitud, se muestra un mensaje en consola y una alerta al usuario
      console.error("Error al obtener los datos:", error);
      alert("No se pudo obtener los datos climáticos.");
    });
}

// Llama automáticamente a la función al cargar la página para mostrar los datos sin intervención del usuario
fetchWeather();
