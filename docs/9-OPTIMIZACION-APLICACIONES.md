
# Estrategias de Optimizacion implementadas en un proyecto web

Existen multiples estategias de optimizacion dependiendo de la naturaleza del proyecto, a continuacion detallare las mas relevantes con base a mi experiencia profesional como desarrollador frontend

## Optimizacion Web: Speed Insights

Un componente muy importante y es que nuestras aplicaciones frontend deben de ser usadas por diferentes dispositivos en diferentes entornos de red, para esto, la optimizacion web con el fin de reducir el ancho de banda y proporcionar una aplicacion mas liviana es importante, para estos algunos criterios se deben de tener en cuenta

 - Reducir el peso de las imagenes hasta 200kb, pueden haber excepciones, pero oscilar sobre ese promedio de peso
 - Usar formatos WebP, o formatos svg
 - Usar Herramientas como google speed insights que permiten verificar conceptos tales como TTF, First Load paint
 - Para la inclusion de archivos CDN se puede usar las propiedades async y defer

## Optimizacion Assets: Minificacion

Siempre que se optimize un proyecto para produccion o para cualquier entorno, se debe de minificar, esto ya tiene configurado en la mayoria de los bundlers, y usar SourceMaps


## Optimizacion JS Assets: Code Splitting

Se puede dividir el codigo javascript en partes mas pequenias, o tambien llamados chunks para que cada chunk cargue lo necesario y bajo la demanda necesaria, por ejemplo, un Quickview, Puede dividirse en un chunk para cargarse cuando el usuario le de click en un registro y no cuando cargue toda la aplicacion, en React y Angular existen estrategias para code splitting:

 - Usar Lazy y  Usar Suspense: Permite cargar un componente de Manera "Perezosa"

		const Quickview = React.lazy(() => import('./QuickVire'));

- En Angular cuando se usar el `RouterModule` De Angular este tiene su estrategia de Code Splitting


## Cache: Cache Header o Service Workers

Algo comun en las aplicaciones PWA o en el uso de microfrontends es el uso de ServiceWorker, Este tiene un apartado de Caches, para la optimizacion de Recursos

En servidores usar los encabezados de Cache control 


## Reduce Bundle Size

En esta se puede Utilizar dependiendo de su bundler ya sea vite o WebPack esttrategias de `TreeShaking` o optimizadores que Eliminan el codigo no usado

## Optimize DOM

Usar buenas practicas con el fin de eliminar Renderizados innesarios, para optimizar la interaccion con Dom o con el Dom virtual