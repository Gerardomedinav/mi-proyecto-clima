<?php
// Establece el tipo de contenido como JSON para la respuesta HTTP
header('Content-Type: application/json');

/**
 * Generación de datos meteorológicos simulados.
 * Se utiliza la función rand() para obtener valores aleatorios
 * que simulan condiciones climáticas reales.
 */

// Genera una temperatura aleatoria entre 15°C y 35°C
$temperatura = rand(15, 35);

// Calcula la sensación térmica como una variación de la temperatura real
$sensacionTermica = $temperatura + rand(-2, 2);

// Genera valores aleatorios para humedad (en %), viento (km/h) y presión (hPa)
$porcentajeHumedad = rand(30, 90);
$velocidadViento = rand(5, 25);
$presionAtmosferica = rand(980, 1025);

// Lista de posibles descripciones climáticas
$descripcionesClimaticas = [
    "Soleado",
    "Parcialmente nublado",
    "Nublado",
    "Lluvia ligera",
    "Tormenta eléctrica"
];

// Construye el arreglo de respuesta con todos los datos climáticos
$respuestaClimatica = [
    "ubicacion" => "Buenos Aires, Argentina",
    "descripcion" => $descripcionesClimaticas[array_rand($descripcionesClimaticas)],
    "temperatura" => $temperatura,
    "sensacion" => $sensacionTermica,
    "humedad" => $porcentajeHumedad,
    "viento" => $velocidadViento,
    "presion" => $presionAtmosferica
];

// Convierte el arreglo en formato JSON y lo envía como respuesta
echo json_encode($respuestaClimatica);
