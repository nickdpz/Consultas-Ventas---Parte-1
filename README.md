# Consultas-Ventas-Parte-1
## Archivo para peticiones api /src/api.js
En este archivo unifica los llamados del api para solo tener un solo fetch. El objecto data: {} condensa las funciones que se llaman desde los demás componentes. Cada objecto adiciona las url de los endpoint. 
## Simple Page App
La single page app se configura con React Router. Por otro lado, se pone una componente de Layout para poner el Header y el Footer para todas las vistas. El Header y el Footer son dos componentes apartes. 
## Página
- SalesDate: Esta es la página donde busca el listado de transacciones para una fecha. Pone un calendario y un botón para hacer la búsqueda. Además, importa un componente para la tabla con los datos. La información se pasa al componente en los props del components. 
- UserDetail: Esta es la página donde se lista de transacciones para un usuario. Cuando se carga esta página, se revisa el contento de la aplicación y obtiene la url para hacer el fetch y obtener la información sin necesidad de un evento del usuario.
- NotFound: Página de no encontrado.
## Componentes o Secciones
- SalesDate: Este componente crea una lista con las ventas del día
- UserDetail: Este componente crea una lista las transacciones exitosas de un usuario.
- NotFound: Se redirecciona cuando no encuentra una url
