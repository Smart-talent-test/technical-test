
# Principios SOLID en el Desarrollo Front-End

  
A continuación, Mencionare los principios Solid que conozco con base a mi experiencia laboral
  

## 1. (Letra S) Principio de Responsabilidad Unica

-  **Principio:** Una funcion, o bloque de codigo independiente (modulo o component) debe de tener un proposito unico

-  **Aplicación en Front-End:**

-  **Componentes React:** Un componente React, o un component Angular, debe de tener un unico Proposito, por ejemplo, un componente formulario, Solo debe de manejar la entrada y salida de datos y no manejar la request, eso se debe de separar en un hook o en un servicio

-  **Funciones:** Cada función debe realizar una sola actividad, Si la funcion debe de hacer multiples cosas, debe de abstraerse en pequenas funciones especificas


## 2. (Letra O) Principio de Abierto y Cerrado (Open Close)

-  **Principio:** Se puede extender la funcionalidad de un Componente, sin modificar el codigo del componente, o funcion, Se tiene un antipatron donde cuando se desee modificar un componente se agrega una condicion con el fin de modificar el comportamiento del componente

-  **Aplicación en Front-End:**

-  **Usar  Props:** En React o Angular, puedes hacer que un componente sea "cerrado" para modificaciones pero "abierto" para la extensión usando  props o @Input

-  **Extender Estilos:** Usar herramientas como styled components, o emotion para extender los estilos de un componente sin modificar el componente base.


## 3. (Letra L) Principio de sustitucion de Liskov

-  **Principio:** Los objetos derivados deben poder reemplazar a los objetos de la clase base sin alterar el sistema

-  **Aplicación en Front-End:**

-  **Componentes Microfrontend Heredados:** Este componente Directamente no es muy comun en su estado mas puro en React pero si en angular esto puede aplicar cuando se quieren crear componentes que usen un mismo contrato de Props, de tal manera que pudiese reemplazar el componente pero no modificar la entrada sin que la aplicacion Genere un error

-  **Polimorfismo:** Usando typescript se pueden implementar contratos usando interfaces, y un patron factory para crear objetos

## 4. (Letra I) Segregacion de Interfaz

-  **Principio:** Los clientes no deberían estar obligados a depender de interfaces que no utilizan. Es mejor tener interfaces pequeñas y específicas que una sola interfaz grande y general.

-  **Aplicación en Front-End:**

-  **Componentes Específicos:** En Lugar de crear un componente Angular que haga multples Acciones, se deberia de separar en pequenos componentes, que tengan un unico proposito, por ejemplo, un chat, Aunque el chat en su estado completo realiza muchas Actividades, puede separarse en Multiples componentes ( Chat, ListaMensajes....)

-  **Hooks o servicios Personalizasos:** Crear hooks personalizados que encapsulen lógica específica

## 5. (Letra D) Inyeccion o inversion de Dependencias

-  **Principio:** Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones (interfaces o clases abstractas).

-  **Aplicación en Front-End:**

-  **Inyección de Dependencias:** En un contexto de React, estas dependencias pueden aplicarse en un contexto de Provider And Consumer, En un Contexto React Existe una directiva llamada `@Inyectable` y se inyecta en el constructor, esto tambien se puede hacer con el provider y el useClass, y esta puede ser una interface
