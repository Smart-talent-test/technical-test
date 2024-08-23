# Creacion de Componente Reutilizable

Hay muchas maneras de crear componentes web reutilizables, una es usando Module Federation, que facilita mucho el entorno de desarollo, otra forma seria usando La API de CustomElements la cual se expone

1.  En el Directorio [src/components/atoms/Button](https://github.com/Smart-talent-test/technical-test/tree/main/src/components/atoms/Button) se creo un componente en React con sus respectivas pruebas
2.  En El directorio [src/web-components](https://github.com/Smart-talent-test/technical-test/tree/main/src/web-components) se creo La definición del CustomElement
3.  En el Directorio [index.tsx](https://github.com/Smart-talent-test/technical-test/blob/main/src/index.tsx) se Registra el customElement

        import ButtonWebComponent from "./web-components/button-component";

        customElements.define("st-button", ButtonWebComponent);
