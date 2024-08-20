import ReactDOM from "react-dom/client";
import { Button } from "../components/atoms";
import { IButtonProps } from "../components/atoms/Button";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class ButtonWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes<IButtonProps>();

    const sheet = new ServerStyleSheet();
    const styles = sheet.getStyleTags();

    if (this.shadowRoot) {
      const container = document.createElement('div');
      this.shadowRoot.innerHTML = `${styles}`;
      this.shadowRoot.appendChild(container);

      const root = ReactDOM.createRoot(container);

      root.render(
        <StyleSheetManager target={this.shadowRoot as unknown as HTMLElement}>
          <Button {...props} />
        </StyleSheetManager>
      );
    }
  }


  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props as T;
  }
}

export default ButtonWebComponent;
