GALÁPAGOS NATIVA — SITIO WEB INICIAL

ARCHIVOS
- index.html: contenido y estructura de la web.
- styles.css: diseño visual adaptable a móviles y computadoras.
- script.js: selector ES/EN y formulario que prepara una consulta por WhatsApp.

ANTES DE PUBLICAR
1. Abre script.js con un editor de texto.
2. Busca: const WHATSAPP_NUMBER = '593XXXXXXXXX';
3. Reemplaza 593XXXXXXXXX por el número comercial real, incluyendo el código de país y sin +, espacios ni guiones. Ejemplo de formato ecuatoriano: 5939XXXXXXXX.
4. Revisa las fotos, textos, servicios, políticas y datos comerciales. Las imágenes actuales son ilustrativas y provienen de URLs de Unsplash; conviene reemplazarlas por fotos propias o con licencia apropiada antes del lanzamiento.

VISTA LOCAL
Abre index.html en un navegador. Para una prueba local simple basta con hacer doble clic en index.html.

PUBLICACIÓN RECOMENDADA
Sube estos archivos a un repositorio de GitHub y conecta ese repositorio con Cloudflare Pages. Selecciona la opción de sitio estático sin comando de compilación; el directorio raíz es /.
Documentación oficial: https://developers.cloudflare.com/pages/get-started/git-integration/

NOTAS
- El formulario no almacena datos ni los envía por sí solo: abre WhatsApp con el mensaje preparado y el visitante debe pulsar Enviar.
- La web inicial no incluye pagos en línea, motor de reservas, base de datos ni sistema administrativo.
- No se ha comprado ni configurado un dominio.
