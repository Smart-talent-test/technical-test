# Diseño de Arquitectura


A lo largo de mi carrera he implementado patrones de arquitectura dependiendo de los proyectos y la necesidad tecnica de este, Esta arquitectura propuesta la he implementado en proyectos tales como Bancolombia, a continuacion he creado un diagrama para el sistema de administracion de **Smart Talent**

![enter image description here](https://i.imgur.com/MHm71B8.png)
  
  El archivo draw.io se encuentra en `assets`

## 1. (Presentacion) 

 En Angular, la modularidad se gestiona a través de **modulos** (NgModules), que organizan el código en unidades independientes, en cada modulo tiene su respectivo `RoutingModule`, tiene su respectiva jerarquia de carpetas tales como
 
 - pages: Contiene las paginas que se exponen a traves del routing Module
 - middlewares: Contiene los Guards, o Resolvers necesarios para 

 La estructura o carpetas adicionales presentada se exponen bajo la arquitectura de atomic design

## 2. (Capa de Dominio) 

  La capa de dominio Se creara bajo Servicios Inyectables en el modulo en cuestion, En este caso el useCase y contendria el contrato del repositorio

## 3. (Capa de Data) 

  La capa de dominio Se creara bajo Servicios Inyectables en el modulo en cuestion, En este caso el repostorio contendria las implementaciones de este